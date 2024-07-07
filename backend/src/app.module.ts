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
            envFilePath: ['.env.local', '.env.prod'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                return {
                    type: 'postgres',
                    url: configService.get<string>('DATABASE_URL'),
                    entities: [CountryEntity, LeagueEntity],
                    synchronize: true,
                    ssl: {
                        rejectUnauthorized: false,
                    },
                };
            },
        }),
        CountriesModule,
        LeaguesModule,
    ],
})
export class AppModule {}
