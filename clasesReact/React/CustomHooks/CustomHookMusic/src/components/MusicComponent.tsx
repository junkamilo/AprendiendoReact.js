import { HooksData } from "../Hooks/HooksData";
import { TrafficSonic } from "../Hooks/TrafficSonic";

export const MusicComponent = () => {
    const { music, loading } = HooksData();
    const { count, cambiarColorMusic, idMusic, colorsMusic, color } = TrafficSonic();

    if (loading) return <p>Cargando música...</p>;

    return (
        <div>
            <h2>Lista de canciones</h2>
            <ul>
                {music.map(({ idMusic: idItem, nameArtista, nameMusic, reproductionMusic }) => (
                    <li key={idItem}>
                        {nameArtista} - {nameMusic} ({reproductionMusic})

                        <button
                            className={idMusic === idItem ? color : "bg-red-700"}
                            onClick={() => cambiarColorMusic(idItem)}
                        >
                            Reproducir
                        </button>


                        <div className="w-64 bg-gray-700 rounded-full h-2">
                            <div
                                className="h-2 rounded-full transition-all duration-1000 ease-linear bg-blue-500"
                                style={{ width: `${(count / 5) * 100}%` }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};



