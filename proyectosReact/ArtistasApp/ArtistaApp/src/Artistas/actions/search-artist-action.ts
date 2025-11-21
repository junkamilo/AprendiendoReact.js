import { heroArtistas } from "../api/Artistas.api";
import type { Hero } from "../types/artistas-interfaces";

const BASE_URL = import.meta.env.VITE_API_URL;


interface Options {
    name?:string;
    team?:string;
    category?:string;
    universe?:string;
    status?:string;
    strength?:string;
}

export const searchArtistAction = async (option:Options)=>{
    const { name,team ,category,universe,status,strength } = option;

    if (!name && !team && !category && !universe && !status && !strength) {
        return[];
    }

    const { data } = await heroArtistas.get<Hero[]>('/search',{
        params:{
            name,
            team,
            category,
            universe,
            status,
            strength
        }
    });

    return data.map(hero =>({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))
}