interface Country {
    name: string;
    code: string;
    flag: string;
}

interface Paging {
    current: number;
    total: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ApiCountryResponse {
    get: string;
    parameters: any[];
    errors: any[];
    results: number;
    paging: Paging;
    response: Country[];
}
