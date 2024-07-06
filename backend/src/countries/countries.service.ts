import {
    Injectable,
    Inject,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { ICountry } from '../interfaces/country.interface';
import { CountryEntity } from '../entities/country.entity';
import { calculateRequestDuration } from 'src/utils/helpers';
import { ApiFootballService } from '../services/api-football.service';

@Injectable()
export class CountriesService {
    private readonly logger = new Logger(CountriesService.name);

    constructor(
        @Inject('CountriesRepository')
        private readonly countriesRepository: Repository<CountryEntity> & {
            findAllCountries: () => Promise<CountryEntity[]>;
            saveCountries: (countries: ICountry[]) => Promise<CountryEntity[]>;
            saveCountriesParallel: (
                countries: CountryEntity[],
            ) => Promise<CountryEntity[]>;
            findCountryByName: (countryName: string) => Promise<CountryEntity>;
        },
        private readonly apiFootballService: ApiFootballService,
    ) {}

    async findAllCountries(): Promise<{
        requestDuration: string;
        countries: ICountry[];
    }> {
        const start = Date.now(); // Start timing the request

        let countries: CountryEntity[];
        try {
            countries = await this.countriesRepository.findAllCountries();
            this.logger.log(
                `Found ${countries.length} countries in the database`,
            );

            if (countries.length === 0) {
                countries = await this.apiFootballService.fetchCountries();
                this.logger.log(`Fetched countries from external API`);

                await this.countriesRepository.saveCountries(countries);
                this.logger.log(
                    `Saved ${countries.length} countries to the database`,
                );
            }

            const requestDuration = calculateRequestDuration(start);
            return { requestDuration, countries };
        } catch (error) {
            this.logger.error(`Failed to fetch countries: ${error.message}`);
            throw new InternalServerErrorException('Failed to fetch countries');
        }
    }

    async findCountryByName(countryName: string): Promise<CountryEntity> {
        return await this.countriesRepository.findCountryByName(countryName);
    }
}
