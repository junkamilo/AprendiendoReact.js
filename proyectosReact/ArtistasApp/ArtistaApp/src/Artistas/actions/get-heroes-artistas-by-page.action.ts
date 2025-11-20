import { heroArtistas } from "../api/Artistas.api"
import type { ArtistasResponse } from "../types/get-artistas.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesArtistasByPage = async (
    page: number,
    limit: number = 6,
    category:string = 'all'
): Promise<ArtistasResponse> => {
    if(isNaN(page)){
        page = 1;
    }
    if(isNaN(limit)){
        page = 6;
    }

    const { data } = await heroArtistas.get<ArtistasResponse>(`/`, {
        params: {
            limit: limit,
            offset: (page - 1) * limit,
            category:category,
        },
    });

    const artistas = data.heroes.map(artista => ({
        ...artista,
        image: `${BASE_URL}/images/${artista.image}`
    }))
    return {
        ...data,
        heroes: artistas,
    }
}