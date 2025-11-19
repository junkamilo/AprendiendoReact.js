import { ArtistasStats } from "@/Artistas/components/ArtistasStats";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron title="Busqueda de los Artistas" description="Descubre y explora tus Artistas favoritos" />
      
      <ArtistasStats />

      {/* filter search */}
      <SearchControls/>
    </>

  )
}
export default SearchPage;
