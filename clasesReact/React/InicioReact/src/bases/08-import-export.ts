//importamos el archivo heroes
import { heroes, type Hero } from "./data/heroes.data"

const GetHeroByid = (id:number):Hero | undefined =>{
    const hero = heroes.find( (hero)=>{
        return hero.id === id
    });

    // if (!hero) {
    //     throw new Error("No existe un heroes con ese id")
    // }

    return hero;
}

const result = GetHeroByid(2);
console.log(result);
