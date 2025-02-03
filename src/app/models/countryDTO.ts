export interface Country {
    name: string;
    population: string;
    region: string;
    capital: string;
    flags: Flags; // Rimuovi `[]` perché `flags` è un singolo oggetto, non un array.
}

export interface Flags {
    svg: string;
    png: string;
}
