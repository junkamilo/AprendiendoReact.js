export interface ElementArtista {
    id: number;
    name: string;
}
export interface DataMusic {
    MusicArtistas: ElementArtista[];
    GenerosMusic: ElementArtista[];
    CancionesMusic: ElementArtista[];
}

export const Datamusic: DataMusic = {
    MusicArtistas: [
        { id: 1, name: 'Bad Bunny' },
        { id: 2, name: 'Feid' },
        { id: 3, name: 'Karol G' },
        { id: 4, name: 'J Balvin' },
        { id: 5, name: 'Rauw Alejandro' },
        { id: 6, name: 'Ozuna' }
    ],

    GenerosMusic: [
        { id: 1, name: 'Reggaeton' },
        { id: 2, name: 'Trap Latino' },
        { id: 3, name: 'Pop Latino' },
        { id: 4, name: 'Dancehall' },
        { id: 5, name: 'Urbano' },
        { id: 6, name: 'DemBow' }
    ],

    CancionesMusic: [
        { id: 1, name: 'Tití Me Preguntó' },
        { id: 2, name: 'Feliz Cumpleaños Ferxxo' },
        { id: 3, name: 'Provenza' },
        { id: 4, name: 'Mi Gente' },
        { id: 5, name: 'Todo de Ti' },
        { id: 6, name: 'Se Preparó' }
    ]
};
