import { useState } from "react"
import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviouSearches } from "./gifs/components/PreviouSearches"
import { mockGifs } from "./mock-data/gifs.mock"

import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearch } from "./shared/components/CustomSearch"

export const GifsApp = () => {
    const [previuesTerms ] = useState(['Dragon ball z']);

    const handleTermClicked = (term:string) =>{
        console.log(term);
    }

    const handleSearch = (query:string) =>{
        console.log(query);
    }
  return (
    <>
    {/**Header */}
    <CustomHeader title="Buscador De Gifs" description="Descubre y comparte tu gifs favorito"/>
    
    {/**Search */}
    <CustomSearch onQuery={(query:string) => handleSearch(query) }/>

    {/**Busquedas previas */}
    <PreviouSearches searches={previuesTerms} onLabelclick={handleTermClicked} title='Comparte tu gifs favorito'/>
    {/**Gifs */}
    <GifsContainer gifs={mockGifs}/>
    </> 
  )
}
