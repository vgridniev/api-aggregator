import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    Index,
} from 'typeorm';
import { LeagueEntity } from './league.entity';
import { ICountry } from '../interfaces/country.interface';

@Entity()
export class CountryEntity implements ICountry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index()
    name: string;

    @Column()
    code: string;

    @Column({ nullable: true }) // Ensure flag is not null
    flag: string;

    @OneToMany(() => LeagueEntity, (league) => league.country)
    leagues: LeagueEntity[];
}
