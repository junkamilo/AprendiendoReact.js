import { useRef } from "react"

export const FocusSceren = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = ()=>{
        console.log(inputRef.current?.value);
        //nos muetsre el value
        inputRef.current?.value
        //selecciona el texto escrito en el input
        inputRef.current?.select();
        //darle focus al input
        inputRef.current?.focus();
    }    

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
        <input
        ref={inputRef} 
        type="text" className="bg-white text-black px-4 py-2 rounded-md" 
        autoFocus/>

        <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            set Focus
        </button>
    </div>
  )
}
