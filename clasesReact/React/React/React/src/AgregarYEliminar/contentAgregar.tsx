import type { ElementArtista } from "./cardArtista";


interface Props {
  artistas: ElementArtista[];
}

export const ContentAgregar = ({ artistas }: Props) => {
  return (
    <div className="content-Agregar">
      <h2>Artistas Agregados</h2>
      {artistas.length === 0 && <p>No hay artistas agregados aún.</p>}

      {artistas.map(({ id, foto, description }) => (
        <div key={id} className="item-agregado">
          <div className="foto">{foto}</div>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
};
