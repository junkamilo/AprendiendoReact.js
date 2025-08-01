import "../index.css";
import Usuarios from "./Usuarios";

const TwitterCard  = () => {
    //Obtenemos Array de los usuarios
    const datosUsuarios = Usuarios();
    
return (
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
            <button className="follow-button">Seguir</button>
          </aside>
        </article>
      ))}
    </section>
  );
};

export default TwitterCard ;
