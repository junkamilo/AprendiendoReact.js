import { useState } from "react"
import { GifsContainer } from "./gifs/components/GifsContainer"
import { PreviouSearches } from "./gifs/components/PreviouSearches"
import { mockGifs } from "./mock-data/gifs.mock"

import { CustomHeader } from "./shared/components/CustomHeader"
import { CustomSearch } from "./shared/components/CustomSearch"

export const GifsApp = () => {
    const [previuesTerms, setpreviuesTerms] = useState(['Dragon ball z']);
  return (
    <>
    {/**Header */}
    <CustomHeader title="Buscador De Gifs" description="Descubre y comparte tu gifs favorito"/>
    
    {/**Search */}
    <CustomSearch/>

    {/**Busquedas previas */}
    <PreviouSearches searches={previuesTerms} />
    {/**Gifs */}
    <GifsContainer gifs={mockGifs}/>
    </>
  )
}
