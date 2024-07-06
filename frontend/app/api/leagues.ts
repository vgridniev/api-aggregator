import axios from 'axios';
import { ApiResponse } from '../../interfaces/league';


export const fetchLeaguesByCountry = async (country: string): Promise<ApiResponse> => {
    const response = await axios.get(`${process.env.API_URL}/leagues?country=${country}`);
    return response.data;
};