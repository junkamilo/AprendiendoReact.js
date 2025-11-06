import { useState } from "react"

export const HooksContador = () => {
    const [first, setfirst] = useState(0)

    const contadorLike = () => {
        setfirst(first + 1);
    }

    const contadorDislike = () => {
        setfirst(first - 1);
    }

    return {
        //values
        first,

        //funciones
        contadorLike,
        contadorDislike

    }
}
