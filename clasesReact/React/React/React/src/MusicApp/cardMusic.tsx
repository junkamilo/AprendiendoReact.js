import { Buttonagregar } from "./button";
import { Datamusic, type ElementArtista } from "./dataMusic";

export const CardArtista  = () => {

    return (
        <div className="CardMusicaContainer">
            <h2>Artistas</h2>
            {Datamusic.MusicArtistas.map((artista: ElementArtista) => (
                <div className="CardMusica" key={artista.id}>
                    <Buttonagregar/>
                    <div className="Logo">Logo</div>
                    <h3 className="Name">{artista.name}</h3>
                </div>
            ))}
        </div>
    );
};
export const CardGeneros = () => {

    return (
        <div className="CardMusicaContainer">
            <h2>Generos</h2>
            {Datamusic.GenerosMusic.map((artista: ElementArtista) => (
                <div className="CardMusica" key={artista.id}>
                    <Buttonagregar/>
                    <div className="Logo">Logo</div>
                    <h3 className="Name">{artista.name}</h3>
                </div>
            ))}
        </div>
    );
};
export const CancionesMusic = () => {

    return (
        <div className="CardMusicaContainer">
            <h2>Musica</h2>
            {Datamusic.CancionesMusic.map((artista: ElementArtista) => (
                <div className="CardMusica" key={artista.id}>
                    <Buttonagregar/>
                    <div className="Logo">Logo</div>
                    <h3 className="Name">{artista.name}</h3>
                </div>
            ))}
        </div>
    );
};