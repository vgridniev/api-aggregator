import { DataSource, Repository } from 'typeorm';
import { LeagueEntity } from '../entities/league.entity';
import { ILeague } from '../interfaces/league.interface';

export const LeaguesRepository = {
    provide: 'LeaguesRepository',
    useFactory: (dataSource: DataSource): Repository<LeagueEntity> => {
        return dataSource.getRepository(LeagueEntity).extend({
            async findAllLeagues(): Promise<LeagueEntity[]> {
                return await this.find();
            },

            async saveLeagues(
                leagues: LeagueEntity[],
            ): Promise<LeagueEntity[]> {
                return await this.save(leagues);
            },

            async findLeaguesByCountry(
                countryName: string,
            ): Promise<LeagueEntity[]> {
                return await this.find({
                    where: { country: { name: countryName } },
                    relations: ['country'],
                });
            },

            async saveLeague(league: ILeague): Promise<LeagueEntity> {
                return await this.save(league);
            },
        });
    },
    inject: [DataSource],
};
