export class WorldStat {
    total_cases: string;
    total_deaths: string;
    total_recovered: string;
    new_cases: string;
    new_deaths: string;
    statistic_taken_at: string;
}

export interface CountryCases {
    countries_stat: CountryStat[];
    statistic_taken_at: string;
}

export interface CountryStat {
    name: any;
    country_name: string;
    cases: string;
    deaths: string;
    region: string;
    total_recovered: string;
    new_deaths: string;
    new_cases: string;
    serious_critical: string;
    active_cases: string;
    total_cases_per_1m_population: string;
}

export interface CountryIsoStat {
    countrycode: string;
    country: string;
    latitude: string;
    longitude: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    active: number;
}
