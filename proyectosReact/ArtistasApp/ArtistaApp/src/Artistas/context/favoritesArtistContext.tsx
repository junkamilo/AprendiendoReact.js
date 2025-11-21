import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/artistas-interfaces";

interface FavoriteArtistContext {
    favorites: Hero[];
    favoriteCount: number;

    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

export const FavoritesArtistContext = createContext({} as FavoriteArtistContext);

const getFavoriteFromLocalStorage = () => {
    const Favorites = localStorage.getItem('favorite');
    return Favorites ? JSON.parse('favorites') : [];
}

export const FavoritesArtistProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>([]);

    const toggleFavorite = (hero: Hero) => {
        const exists = favorites.some((h) => h.id === hero.id);

        if (exists) {
            // Si existe → quitar
            setFavorites(favorites.filter((h) => h.id !== hero.id));
        } else {
            // Si NO existe → agregar
            setFavorites([...favorites, hero]);
        }
    };

    const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id);
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    return (
        <FavoritesArtistContext.Provider
            value={{
                favorites,
                favoriteCount: favorites.length,
                isFavorite,
                toggleFavorite,
            }}
        >
            {children}
        </FavoritesArtistContext.Provider>
    );
};

