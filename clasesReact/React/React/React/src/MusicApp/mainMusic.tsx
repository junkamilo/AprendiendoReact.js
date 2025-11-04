import { CancionesMusic, CardArtista, CardGeneros } from "./cardMusic";


export const MainMusic = () => {
    return (
        <main className="contentMain">
            <CardArtista/>
            <CardGeneros/>
            <CancionesMusic/>
        </main>
    );
}