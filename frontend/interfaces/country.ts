export interface Country {
    id: number;
    name: string;
    code: string;
    flag: string;
  }
  
  export interface ApiResponse {
    requestDuration: string;
    countries: Country[];
  }