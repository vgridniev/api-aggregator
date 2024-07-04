import {
    Injectable,
    Inject,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { LeagueEntity } from '../entities/league.entity';
import { LeagueDto } from '../interfaces/league.interface';
import { ApiFootballService } from '../services/api-football.service';
import { calculateRequestDuration } from 'src/utils/helpers';
import { CountriesService } from '../countries/countries.service';

@Injectable()
export class LeaguesService {
    private readonly logger = new Logger(LeaguesService.name);

    constructor(
        @Inject('LeaguesRepository')
        private readonly leaguesRepository: Repository<LeagueEntity> & {
            findLeaguesByCountry: (
                countryName: string,
            ) => Promise<LeagueEntity[]>;
            saveLeagues: (leagues: LeagueEntity[]) => Promise<LeagueEntity[]>;
        },
        private readonly apiFootballService: ApiFootballService,
        private readonly countriesService: CountriesService,
    ) {}

    async findLeaguesByCountry(countryName: string): Promise<{
        requestDuration: string;
        leagues: LeagueDto[];
    }> {
        const start = Date.now();

        let leagues: LeagueEntity[];

        try {
            leagues =
                await this.leaguesRepository.findLeaguesByCountry(countryName);
            this.logger.log(`Found ${leagues.length} leagues in the database`);
            console.log(
                '🚀 ~ LeaguesService ~ findLeaguesByCountry ~ leagues:',
                leagues,
            );

            if (leagues.length === 0) {
                const apiLeagues =
                    await this.apiFootballService.fetchLeaguesByCountry(
                        countryName,
                    );
                this.logger.log(
                    `Fetched ${apiLeagues.length} leagues for ${countryName} from external API`,
                );

                // find the country in the database
                const country =
                    await this.countriesService.findCountryByName(countryName);

                const leagueEntities = apiLeagues.map((l) => {
                    const league = new LeagueEntity();
                    league.id = l.league.id;
                    league.name = l.league.name;
                    league.type = l.league.type;
                    league.logo = l.league.logo;
                    league.country = country;
                    return league;
                });

                leagues =
                    await this.leaguesRepository.saveLeagues(leagueEntities);
                this.logger.log(
                    `Saved ${leagues.length} leagues to the database`,
                );
            }

            const requestDuration = calculateRequestDuration(start);

            const leaguesDto: LeagueDto[] = leagues.map((l) => {
                return {
                    id: l.id,
                    name: l.name,
                    type: l.type,
                    logo: l.logo,
                };
            });

            return { requestDuration, leagues: leaguesDto };
        } catch (error) {
            this.logger.error(`Failed to fetch leagues: ${error.message}`);
            throw new InternalServerErrorException('Failed to fetch leagues');
        }
    }
}
