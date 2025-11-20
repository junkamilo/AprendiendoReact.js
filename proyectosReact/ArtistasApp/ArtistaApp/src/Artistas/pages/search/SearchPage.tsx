import { ArtistasStats } from "@/Artistas/components/ArtistasStats";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomBreadcrumbs
        currentPage="Búsqueda"
        breadcrumbs={[
          { label: "Artistas", to: "/artistas" }
        ]}
      />
      <CustomJumbotron title="Busqueda de los Artistas" description="Descubre y explora tus Artistas favoritos" />

      <ArtistasStats />

      {/* filter search */}
      <SearchControls />
    </>

  )
}
export default SearchPage;
