import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';
import { CountryEntity } from '../entities/country.entity';
import { CountriesRepository } from './countries.repository';
import { ApiFootballService } from '../services/api-football.service';

@Module({
    imports: [TypeOrmModule.forFeature([CountryEntity]), HttpModule],
    controllers: [CountriesController],
    providers: [CountriesService, ApiFootballService, CountriesRepository],
    exports: ['CountriesRepository'],
})
export class CountriesModule {}
