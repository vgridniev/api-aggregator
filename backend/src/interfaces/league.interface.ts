import { ICountry } from './country.interface';

export interface ILeague {
    id: number;
    name: string;
    type: string;
    logo: string;
    country: ICountry;
}

export interface LeagueDto {
    id: number;
    name: string;
    type: string;
    logo: string;
}
