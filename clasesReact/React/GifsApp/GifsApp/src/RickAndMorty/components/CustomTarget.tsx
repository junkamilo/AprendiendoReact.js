import { useEffect, useState } from "react";
import { dataRickyAndMorty } from "../data-ricky-and-morty";

interface Personaje {
    id: number;
    name: string;
    species: string;
    status: string;
    image: string;
}

export const CustomTarget = () => {
    const [data, setData] = useState<Personaje[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await dataRickyAndMorty();
            setData(res.results);
        };
        fetchData();
    }, []);

    return (
        <div className="contentCard">

            {data.map(({id,name,image,species,status}) => (
                <div className="card" key={id}>

                    <div className="contentLogo">
                        <img src={image} alt={name} />
                    </div>

                    <div className="contentName">
                        <h3 className="name">{name}</h3>
                    </div>

                    <div className="content-description">
                        <div className="contentEspecie">
                            <h3>{species}</h3>
                        </div>
                        <div className="contentStatus">
                            <p>{status}</p>
                        </div>
                    </div>

                </div>
            ))}

        </div>
    );
};

