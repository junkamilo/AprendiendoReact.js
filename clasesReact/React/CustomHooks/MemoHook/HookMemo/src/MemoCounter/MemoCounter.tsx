import { useMemo } from "react";
import { HooksCounter } from "./HooksCounter";

const heavyStuff = (iterationNumber: number) => {
    console.time('Heavy_stuff_start');
    for (let index = 0; index < iterationNumber * 1_000_000; index++) { }
    console.timeEnd('Heavy_stuff_start');
    return `${iterationNumber} iteraciones procesadas`;
};

export const MemoCounter = () => {
    const { counter, handledCounter } = HooksCounter();

    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <>
            <h1>Memo - useMemo</h1>
            <hr />
            <h4>Valor calculado: {myHeavyValue}</h4>
            <h4>Contador: {counter}</h4>

            <button
                onClick={handledCounter}
                className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
                Contador
            </button>
        </>
    );
};

