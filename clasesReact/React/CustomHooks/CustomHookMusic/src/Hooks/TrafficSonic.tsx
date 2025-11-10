import { useEffect, useState } from "react";

export const colorsMusic: Record<number, string> = {
    1: "bg-red-500 animate-pulse",
    2: "bg-yellow-500 animate-pulse",
    3: "bg-green-500 animate-pulse",
    4: "bg-blue-500 animate-pulse",
    5: "bg-purple-500 animate-pulse",
    6: "bg-pink-500 animate-pulse",
    7: "bg-indigo-500 animate-pulse",
    8: "bg-teal-500 animate-pulse",
    9: "bg-orange-500 animate-pulse",
    10: "bg-emerald-500 animate-pulse",
    11: "bg-gray-500 animate-pulse",
};

export const TrafficSonic = () => {
    const [color, setColor] = useState<string>("bg-gray-500");
    const [count, setCount] = useState(5);
    const [idMusic, setActiveId] = useState<number | null>(null);

const cambiarColorMusic = (id: number) => {
    setActiveId(id);
    setColor(colorsMusic[id] ?? "bg-gray-500");
    setCount(10);
};



    useEffect(() => {
        if (count === 0) return;

        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [count]);

    return {
        color,
        count,
        idMusic,
        colorsMusic,
        cambiarColorMusic,
    };
};

