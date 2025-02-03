export interface CountryDetailsDTO {
    name: string;
    nativeName: string;
    population: string;
    region: string;
    subregion: string;
    capital: string;
    currencies: Currencies[];
    acr: TopLevelDomain[];
    languages: Languages[];
    borderCountries: BorderCountries[];
}

export interface Currencies {
    code?: string;
    name: string;
    symbol?: string;
}

export interface TopLevelDomain {
    acr: string;
}

export interface Languages {
    name: string;
}

export interface BorderCountries {
    name: string;
}
