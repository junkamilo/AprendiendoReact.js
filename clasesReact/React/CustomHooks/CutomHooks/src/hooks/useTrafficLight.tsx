import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animte-pulse',
    green: 'bg-green-500 animte-pulse',
}

type TrffitColor = keyof typeof colors;

export const useTrafficLight = () => {
    const [color, setColor] = useState<TrffitColor>('red');
    const [count, setCount] = useState(5);

    useEffect(() => {
        if (count === 0) return;

        const interval = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);


        return () => {
            clearInterval(interval);
        }
    }, [count]);

    useEffect(() => {

        if (count === 0) {
            setCount(5);
            if (color === 'red') {
                setColor('green');
                return;
            }
            if (color === 'yellow') {
                setColor('red');
                return;
            }
            if (color === 'green') {
                setColor('yellow');
                return;
            }
            return;
        }
    }, [count, color])

    return {
        //props
        colors,
        color,
        count,

        //computed
        percentage:(count / 5) * 100,
        greenLight:color === 'green' ? colors.green : 'bg-gray-500',
        redLight:color === 'red' ? colors.red : 'bg-gray-500',
        yellowLight:color === 'yellow' ? colors.yellow : 'bg-gray-500',


    }
}
