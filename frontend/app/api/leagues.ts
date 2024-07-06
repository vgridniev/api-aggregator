import axios from 'axios';
import { ApiResponse } from '../../interfaces/league';

console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);

export const fetchLeaguesByCountry = async (country: string): Promise<ApiResponse> => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/leagues?country=${country}`);
    return response.data;
};