import { useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow:'bg-yellow-500 animte-pulse',
    green: 'bg-green-500 animte-pulse',
}

// type TrffitColor = 'red'|'yellow'|'green';
//hacemos sincronias de TrffitColor con el colors lo cual si agregamos un nuevo color pues automaticamente se agregara tambine a TrffitColor
//keyof son las llaves que tiene colors ejemplo red
//typeof son los valores que tiene la llave 'bg-yellow-500 animte-pulse'
type TrffitColor = keyof typeof colors;

export const TrafficLight = () => {
    const [color, setColor] = useState<TrffitColor>('red');
    
    const cambiarColor = ( color:TrffitColor) =>{
        setColor((prev)=>{
            //aca nos retorna el valor anterior que estaba antes
            console.log({prev});
            return color
            
        });
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">


                <div className={`w-32 h-32 ${ color === 'red' ? colors[color] :  'bg-gray-500'} rounded-full`}></div>


                <div className={`w-32 h-32 ${ color === 'yellow' ? colors[color] :  'bg-gray-500'} rounded-full`}></div>


                <div className={`w-32 h-32 ${ color === 'green' ? colors[color] :  'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}
                <div className="flex gap-2">
                    <button onClick={()=>cambiarColor('red')}
                        className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Rojo
                    </button>
                    <button onClick={()=>cambiarColor('yellow')}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Amarillo
                    </button>
                    <button onClick={()=>cambiarColor('green')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">
                        Verde
                    </button>
                </div>
            </div>
        </div>
    );
}
