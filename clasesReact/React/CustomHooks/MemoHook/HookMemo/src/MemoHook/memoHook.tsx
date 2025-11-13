import { useCallback, useState } from "react"
import { Mytitle } from "../ui/Mytitle"
import { MySubtitle } from "../ui/MySubtitle"

const handleMyApiCall = (myValue:string) => {
    console.log("Llamar a mi api" , myValue);

}

export const MemoHook = () => {
    const [title, setTitle] = useState('Hola mundo')
    const [subTitle, setsubTitle] = useState('Hola mundo dos')



    const hadleMyAPICall = useCallback(() => {
        console.log('Llamar a mi api', subTitle);
    }, [subTitle]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <Mytitle text={title} />
            <MySubtitle title={subTitle} callMyAPI={handleMyApiCall} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setTitle("Hello" + new Date().getTime())}
            >Cambiar titulo</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={() => setsubTitle("Nuevo Subtitulo")}
            >Cambiar subtitulo</button>
        </div>
    )

}