import { useState } from "react"

export const HooksCounter = () => {
    const [counter, setCounter] = useState(0);

    const handledCounter = () => {
        setCounter(counter + 1);
    }

    return {
        //values
        counter,

        //funciones 
        handledCounter
    }
}
