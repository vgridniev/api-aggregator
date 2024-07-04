interface Coverage {
    fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
    };
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
}

interface Season {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: Coverage;
}

interface Country {
    name: string;
    code: string;
    flag: string;
}

export interface LeagueDetails {
    id: number;
    name: string;
    type: string;
    logo: string;
}

export interface LeagueResponse {
    league: LeagueDetails;
    country: Country;
    seasons: Season[];
}

export interface ApiLeagueResponse {
    get: string;
    parameters: {
        country: string;
    };
    errors: any[];
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: LeagueResponse[];
}

// Example usage
// const exampleApiResponse: ApiResponse = {
//     get: 'leagues',
//     parameters: {
//         country: 'England',
//     },
//     errors: [],
//     results: 45,
//     paging: {
//         current: 1,
//         total: 1,
//     },
//     response: [
//         {
//             league: {
//                 id: 39,
//                 name: 'Premier League',
//                 type: 'League',
//                 logo: 'https://media.api-sports.io/football/leagues/39.png',
//             },
//             country: {
//                 name: 'England',
//                 code: 'GB',
//                 flag: 'https://media.api-sports.io/flags/gb.svg',
//             },
//             seasons: [
//                 {
//                     year: 2010,
//                     start: '2010-08-14',
//                     end: '2011-05-17',
//                     current: false,
//                     coverage: {
//                         fixtures: {
//                             events: true,
//                             lineups: true,
//                             statistics_fixtures: false,
//                             statistics_players: false,
//                         },
//                         standings: true,
//                         players: true,
//                         top_scorers: true,
//                         top_assists: true,
//                         top_cards: true,
//                         injuries: false,
//                         predictions: true,
//                         odds: false,
//                     },
//                 },
//                 // Additional seasons
//             ],
//         },
//         // Additional league responses
//     ],
// };
