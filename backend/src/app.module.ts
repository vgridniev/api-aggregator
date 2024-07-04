import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
import { LeaguesModule } from './leagues/leagues.module';
import { CountryEntity } from './entities/country.entity';
import { LeagueEntity } from './entities/league.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env.local', '.env'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                console.log(
                    'DATABASE_URL:',
                    configService.get<string>('DATABASE_URL'),
                );
                return {
                    type: configService.get<string>('DATABASE_TYPE') as any,
                    url: configService.get<string>('DATABASE_URL'),
                    entities: [CountryEntity, LeagueEntity],
                    synchronize: true,
                };
            },
        }),
        CountriesModule,
        LeaguesModule,
    ],
})
export class AppModule {}
