import { Owner, type Hero } from "./data/heroes.data";

export const getHeroesByOwner = (heroesArray: Hero[], owner: Owner): Hero[] => {
    return heroesArray.filter(hero => hero.owner === owner);
}



