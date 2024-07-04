import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CountriesModule } from './countries/countries.module';
import { LeaguesModule } from './leagues/leagues.module';
import { CountryEntity } from './entities/country.entity';
import { LeagueEntity } from './entities/league.entity';

const logger = new Logger('AppModule');
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env.local', '.env', '.env.production'],
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => {
                logger.log(`POSTGRES_HOST: ${configService.get<string>('POSTGRES_HOST')}`);
                logger.log(`POSTGRES_PORT: ${configService.get<string>('POSTGRES_PORT')}`);
                logger.log(`POSTGRES_USER: ${configService.get<string>('POSTGRES_USER')}`);
                logger.log(`POSTGRES_PASSWORD: ${configService.get<string>('POSTGRES_PASSWORD')}`);
                logger.log(`POSTGRES_DB: ${configService.get<string>('POSTGRES_DB')}`);
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
