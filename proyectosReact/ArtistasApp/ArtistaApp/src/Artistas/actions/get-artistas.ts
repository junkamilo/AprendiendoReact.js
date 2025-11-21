import { heroArtistas } from "../api/Artistas.api";
import type { Hero } from "../types/artistas-interfaces";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getArtistas = async (idSlug:string) =>{

    const { data } = await heroArtistas.get<Hero>(`/${idSlug}`);

    return {
        ...data,
        image: `${BASE_URL}/images/${data.image}`
    }

}
