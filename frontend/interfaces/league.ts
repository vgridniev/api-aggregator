export interface League {
    id: number;
    name: string;
    type: string;
    logo: string;
  }

export interface ApiResponse {
    requestDuration: string;
    leagues: League[];
}