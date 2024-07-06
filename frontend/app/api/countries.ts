import axios from 'axios';
import { ApiResponse } from '../../interfaces/country';

export const fetchCountries = async (): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${process.env.API_URL}/countries`);
  console.log("🚀 ~ fetchCountries ~ response:", response)
  return response.data;
  
};