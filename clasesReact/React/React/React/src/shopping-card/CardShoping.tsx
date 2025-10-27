import { useState } from "react";
import { BotonComprar } from "./botonComprar";
import { ResultShopping } from "./ResultShopping";

const Description = {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
};

export const CardShopping = () => {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <div className="Main-content">
            <div className="Content-description">
                <p className="Description">{Description.description}</p>
            </div>
            <BotonComprar clickBoton={handleClick} />
            <ResultShopping contador={contador} />
        </div>
    );
};
