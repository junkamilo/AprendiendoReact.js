import { dataRickyAndMorty } from "../data-ricky-and-morty"

export const Main = async() => {
    const data = await dataRickyAndMorty();
    
  return (
    <main className="contentMain"></main>
  )
}
