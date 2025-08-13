import Button from "./components/Button";
import Usuario from "./components/usuario";
import "/src/style.css";

const TwiterFollowCard = () =>{
  //obtenemos el array de los usuarios
  const datosUsuarios = Usuario();
  return(
    <section className="App">
      {datosUsuarios.map(({Nombre,NombreUsuario,avatar}) => (
        <article className="twitter-card" key={Nombre}>
          <header className="card-header">
            <img
              className="avatar"
              src={avatar}
              alt={`Avatar de ${Nombre}`}
            />
            <div className="user-info">
              <strong>{Nombre}</strong>
              <span className="username">{NombreUsuario}</span>
            </div>
          </header>

          <aside className="card-aside">
            <Button></Button>
          </aside>
        </article>
      ))}
    </section>
  );
}
export default TwiterFollowCard;