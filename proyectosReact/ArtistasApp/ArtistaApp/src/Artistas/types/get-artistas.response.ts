import type { Hero } from "./artistas-interfaces";

export interface ArtistasResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}

