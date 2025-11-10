import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animte-pulse',
    green: 'bg-green-500 animte-pulse',
}

type TrffitColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-2xl font-thin">Semaforo con UseEffect</h1>
                <h2 className="text-white text-2xl font-thin">Contador {count}</h2>
                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" style={{width:`${(count/5) * 100}%`}}></div>
                </div>

                <div className={`w-32 h-32 ${color === 'red' ? colors[color] : 'bg-gray-500'} rounded-full`}></div>


                <div className={`w-32 h-32 ${color === 'yellow' ? colors[color] : 'bg-gray-500'} rounded-full`}></div>


                <div className={`w-32 h-32 ${color === 'green' ? colors[color] : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
}
