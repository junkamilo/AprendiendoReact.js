import { useState } from "react";

import { DataArtista } from "./dataArtista";
import { CardArtista, type ElementArtista } from "./cardArtista";
import { ContentAgregar } from "./contentAgregar";

export const ContentArtista = () => {
    const [artistasAgregados, setArtistasAgregados] = useState<ElementArtista[]>([]);

    const agregarArtista = (id: number) => {
        const artista = DataArtista.find(a => a.id === id);
        if (!artista) return;

        setArtistasAgregados(prev => [...prev, artista]);
    };

    return (
        <div className="Content-artista">
            <CardArtista onAgregar={agregarArtista} />
            <ContentAgregar artistas={artistasAgregados} />
        </div>
    );
};
