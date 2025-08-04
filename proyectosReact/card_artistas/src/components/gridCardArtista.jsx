import Artistas from "./artista";
import CardArtista from "./cardArtista";
import './contentArtista.css'

const Divgrid = () =>{
    const datosArtistas = Artistas(); 
  return (
    <div className="Content-cardArtistas">
      {datosArtistas.map(({avatar,nombre,descripcion}) => (
        <CardArtista
          key={nombre}
          avatar={avatar}
          nombre={nombre}
          descripcion={descripcion}
        />
      ))}
    </div>
  );
};
export default Divgrid;