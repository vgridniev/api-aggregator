import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { LeagueEntity } from '../entities/league.entity';
import { CountryEntity } from '../entities/country.entity';
import { HttpModule } from '@nestjs/axios';
import { LeaguesRepository } from './leagues.repository';
import { ApiFootballService } from '../services/api-football.service';
import { CountriesService } from '../countries/countries.service';
import { CountriesRepository } from 'src/countries/countries.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([LeagueEntity, CountryEntity]),
        HttpModule,
    ],
    controllers: [LeaguesController],
    providers: [
        LeaguesService,
        CountriesService,
        ApiFootballService,
        LeaguesRepository,
        CountriesRepository,
    ],
    exports: ['LeaguesRepository', 'CountriesRepository'],
})
export class LeaguesModule {}
