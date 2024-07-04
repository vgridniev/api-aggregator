import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    Index,
} from 'typeorm';
import { CountryEntity } from './country.entity';
import { ILeague } from '../interfaces/league.interface';

@Entity()
export class LeagueEntity implements ILeague {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    logo: string;

    @ManyToOne(() => CountryEntity, (country) => country.leagues)
    @Index()
    country: CountryEntity;
}
