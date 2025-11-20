import { heroArtistas } from "../api/Artistas.api"
import type { ArtistasResponse } from "../types/get-artistas.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesArtistasByPage = async (): Promise<ArtistasResponse>=>{
    const {data} = await heroArtistas.get<ArtistasResponse>(`/`);

    const artistas = data.heroes.map(artista =>({
        ...artista,
        image: `${ BASE_URL }/images/${artista.image}`
    }))
    return{
        ...data,
        heroes: artistas,
    }
}