import React, { useState } from "react";

interface ItemBuscado {
    nombre: string;
}

interface Props {
    placeholder?: string;
    datos: ItemBuscado[];
    onValueChange?: (value: string) => void;
}

export const CustomBuscador: React.FC<Props> = ({placeholder = "Buscar...",datos = [],onValueChange}) => {

    const [consulta, setConsulta] = useState('');

    const ValueBuscador = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConsulta(value);
        onValueChange?.(value);
        console.log("Escribiendo:", value);
    };

    const handleBuscar = () => {
        console.log("Buscando:", consulta);
    };

    const datosFiltrados = datos.filter((item) =>
        item.nombre.toLowerCase().includes(consulta.toLowerCase())
    );

    return (
        <div className="content-buscador">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleBuscar();
                }}
            >
                <input
                    type="search"
                    aria-label="Buscar"
                    placeholder={placeholder}
                    className="BuscadorPersonaje"
                    onChange={ValueBuscador}
                />

                <button type="submit">Buscar...</button>
            </form>

            <div className="resultado-busqueda">
                {datosFiltrados.map((item, index) => (
                    <p key={index}>{item.nombre}</p>
                ))}
            </div>
        </div>
    );
};




