import Artistas from './artista';
import './cardArtista'
const CardArtista = ({avatar, nombre, descripcion}) =>{
    const datosArtistas = Artistas();
 return(
    <div className="card-artista">
        <div className="content-perfil">
             <img className="logo-artista" src={avatar} alt={`Avatar de ${nombre}`} />
            <span className="nombre-artista">{nombre}</span>
        </div>
        <div className="descripcion-artista">
            <p className="text">{descripcion}</p>
        </div>
    </div>
 );
};
export default CardArtista;