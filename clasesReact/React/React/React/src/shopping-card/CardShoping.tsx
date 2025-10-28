import { useState } from "react";

import { ResultShopping } from "./ResultShopping";
import { BotonComprar } from "./BotonComprar";

const Description = {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
};

export const CardShopping = () => {
    /**
     *A esto se le llama hooks pero esta vez lo hicimos con useState();
     */
    const [contador, setContador] = useState(0);

    /**
     * el contador: siempre va hacer de tipo numero
     * setContador: es la funcion que usaremos para cambiar el valor del contador.
     * La regla: contador es para contar y el setContador es para ejecutar el contador.
     */
    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <div className="Main-content">
            <div className="Content-description">
                <p className="Description">{Description.description}</p>
            </div>
            <BotonComprar firstName="Agregar" clickBoton={handleClick} />
            <ResultShopping contador={contador} />
        </div>
    );
};
