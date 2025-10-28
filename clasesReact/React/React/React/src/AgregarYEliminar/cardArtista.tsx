import { ButtonAgregar } from "./buttonAgregar";
import { DataArtista } from "./dataArtista";

export interface ElementArtista {
    id: number;
    foto: string;
    description: string;
}

interface Props {
    onAgregar: (id: number) => void;
}

export const CardArtista = ({ onAgregar }: Props) => {
    return (
        <>
            {DataArtista.map(({ id, foto, description }) => (
                <div key={id} className="content-card">
                    <div className="content-button">
                        <ButtonAgregar
                            description="Agregar Artista"
                            id={id}
                            onClick={onAgregar}
                        />
                    </div>

                    <div className="content-logo">{foto}</div>
                    <div className="content-description">
                        <p className="description">{description}</p>
                    </div>
                </div>
            ))}
        </>
    );
};


