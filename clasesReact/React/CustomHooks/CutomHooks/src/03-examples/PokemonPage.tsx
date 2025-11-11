import { UseCounter } from "../hooks/UseCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    //este cunter se encarga solamente del numero
    const {counter,increMent,decreMent} = UseCounter();
    //este se encarga de la informacion del pokemon
    const {pokemon} = usePokemon({id:counter});


  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{counter} {pokemon?.name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${counter}.png`}
        alt=""
      />

      <div className="flex gap-2">
        
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={decreMent}>
          Anterior
        </button>
        
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={increMent}
        >
          Siguiente
        </button>
       
      </div>
    </div>
  );
};