import { CountryEntity } from '../entities/country.entity';
import { DataSource, Repository } from 'typeorm';
import { ICountry } from '../interfaces/country.interface';

export const CountriesRepository = {
    provide: 'CountriesRepository',
    useFactory: (dataSource: DataSource): Repository<CountryEntity> => {
        return dataSource.getRepository(CountryEntity).extend({
            async findAllCountries(): Promise<CountryEntity[]> {
                return await this.find();
            },

            async saveCountries(
                countries: ICountry[],
            ): Promise<CountryEntity[]> {
                return await this.save(countries);
            },

            async saveCountriesParallel(
                countries: CountryEntity[],
            ): Promise<CountryEntity[]> {
                await Promise.allSettled(
                    countries.map(async (country) => {
                        await this.save(country);
                    }),
                );
                return countries;
            },

            async findCountryByName(
                countryName: string,
            ): Promise<CountryEntity> {
                try {
                    return await this.findOneOrFail({
                        where: { name: countryName },
                    });
                } catch (error) {
                    return null;
                }
            },
        });
    },
    inject: [DataSource],
};
