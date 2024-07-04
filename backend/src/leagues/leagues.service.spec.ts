import { Test, TestingModule } from '@nestjs/testing';
import { LeaguesService } from './leagues.service';
import { ApiFootballService } from '../services/api-football.service';
import { CountriesService } from '../countries/countries.service';
import { LeagueEntity } from '../entities/league.entity';

jest.mock('src/utils/helpers', () => ({
    calculateRequestDuration: jest.fn(),
}));

describe('LeaguesService', () => {
    let service: LeaguesService;
    let leaguesRepository: any;
    let apiFootballService: any;
    let countriesService: any;
    let calculateRequestDuration: jest.Mock;

    beforeEach(async () => {
        leaguesRepository = {
            findLeaguesByCountry: jest.fn(),
            saveLeagues: jest.fn(),
        };

        apiFootballService = {
            fetchLeaguesByCountry: jest.fn(),
        };

        countriesService = {
            findCountryByName: jest.fn(),
        };

        calculateRequestDuration =
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            require('src/utils/helpers').calculateRequestDuration;

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                LeaguesService,
                {
                    provide: 'LeaguesRepository',
                    useValue: leaguesRepository,
                },
                {
                    provide: ApiFootballService,
                    useValue: apiFootballService,
                },
                {
                    provide: CountriesService,
                    useValue: countriesService,
                },
            ],
        }).compile();

        service = module.get<LeaguesService>(LeaguesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should find leagues by country from the repository', async () => {
        const mockCountryName = 'CountryName';
        const mockLeagues = [new LeagueEntity(), new LeagueEntity()];
        leaguesRepository.findLeaguesByCountry.mockResolvedValue(mockLeagues);
        calculateRequestDuration.mockReturnValue('1.00 seconds');

        const result = await service.findLeaguesByCountry(mockCountryName);

        expect(leaguesRepository.findLeaguesByCountry).toHaveBeenCalledWith(
            mockCountryName,
        );
        expect(result.leagues.length).toBe(2);
        expect(result.requestDuration).toBe('1.00 seconds');
    });

    it('should fetch leagues from the API and save them when repository returns no leagues', async () => {
        const mockCountryName = 'CountryName';
        const mockApiLeagues = [
            {
                league: {
                    id: 1,
                    name: 'League1',
                    type: 'Type1',
                    logo: 'Logo1',
                },
            },
        ];
        const mockCountry = { name: mockCountryName };
        leaguesRepository.findLeaguesByCountry.mockResolvedValue([]);
        apiFootballService.fetchLeaguesByCountry.mockResolvedValue(
            mockApiLeagues,
        );
        countriesService.findCountryByName.mockResolvedValue(mockCountry);
        leaguesRepository.saveLeagues.mockResolvedValue(mockApiLeagues);
        calculateRequestDuration.mockReturnValue('1.00 seconds');

        const result = await service.findLeaguesByCountry(mockCountryName);

        expect(leaguesRepository.findLeaguesByCountry).toHaveBeenCalledWith(
            mockCountryName,
        );
        expect(apiFootballService.fetchLeaguesByCountry).toHaveBeenCalledWith(
            mockCountryName,
        );
        expect(countriesService.findCountryByName).toHaveBeenCalledWith(
            mockCountryName,
        );
        expect(leaguesRepository.saveLeagues).toHaveBeenCalled();
        expect(result.leagues.length).toBe(1);
        expect(result.requestDuration).toBe('1.00 seconds');
    });

    it('should log an error and throw an exception when fetching leagues fails', async () => {
        const mockCountryName = 'CountryName';
        leaguesRepository.findLeaguesByCountry.mockRejectedValue(
            new Error('Failed to fetch'),
        );

        await expect(
            service.findLeaguesByCountry(mockCountryName),
        ).rejects.toThrow('Failed to fetch leagues');
    });
});
