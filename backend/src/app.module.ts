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
                return {
                    type: 'postgres',
                    host: configService.get<string>('POSTGRES_HOST'),
                    port: parseInt(
                        configService.get<string>('POSTGRES_PORT'),
                        10,
                    ),
                    username: configService.get<string>('POSTGRES_USER'),
                    password: configService.get<string>('POSTGRES_PASSWORD'),
                    database: configService.get<string>('POSTGRES_DB'),
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
