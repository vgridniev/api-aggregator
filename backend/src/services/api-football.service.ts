import {
    Injectable,
    InternalServerErrorException,
    Logger,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
// import { ApiCountryResponse } from '../interfaces/api-country.interface';
// import { ApiLeagueResponse } from '../interfaces/api-country-league.interface';

@Injectable()
export class ApiFootballService {
    private readonly logger = new Logger(ApiFootballService.name);
    private readonly apiKey: string;
    private readonly apiHost: string;

    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {
        this.apiKey = this.configService.get<string>('RAPIDAPI_KEY');
        this.apiHost = this.configService.get<string>('RAPIDAPI_HOST');
    }

    private getHeaders() {
        console.log('API KEY', this.apiKey);
        console.log('API HOST', this.apiHost);
        return {
            'x-rapidapi-key': this.apiKey,
            'x-rapidapi-host': this.apiHost,
        };
    }

    async fetchCountries(): Promise<any> {
        try {
            const response: any = await firstValueFrom(
                this.httpService.get(
                    'https://api-football-v1.p.rapidapi.com/v3/countries',
                    { headers: this.getHeaders() },
                ),
            );

            return response.data.response.filter(
                (c: any) => c.name !== 'World',
            );
        } catch (error) {
            this.logger.error(
                `Failed to fetch countries from API: ${error.message}`,
            );
            throw new InternalServerErrorException(
                'Failed to fetch countries from API',
            );
        }
    }

    async fetchLeaguesByCountry(country: string): Promise<any> {
        try {
            const response: any = await firstValueFrom(
                this.httpService.get(
                    `https://api-football-v1.p.rapidapi.com/v3/leagues?country=${country}`,
                    { headers: this.getHeaders() },
                ),
            );

            return response.data.response;
        } catch (error) {
            this.logger.error(
                `Failed to fetch leagues from API: ${error.message}`,
            );
            throw new InternalServerErrorException(
                'Failed to fetch leagues from API',
            );
        }
    }
}
