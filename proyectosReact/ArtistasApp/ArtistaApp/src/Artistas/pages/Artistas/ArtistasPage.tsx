import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

export const ArtistasPage = () => {
  return (
    <>
      <CustomBreadcrumbs
        currentPage="Artistas"
        breadcrumbs={[
          { label: "Música", to: "/musica" },
        ]}
      />

      <div>ArtistasPage</div>
    </>
  );
};

