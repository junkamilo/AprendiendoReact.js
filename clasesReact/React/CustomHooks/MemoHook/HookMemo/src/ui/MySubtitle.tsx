import React from "react";

interface PropsSubtitle {
  title: string;
  callMyAPI : (myValue:string)=> void;
}

export const MySubtitle = React.memo(({ title,callMyAPI }: PropsSubtitle) => {
  console.log("My sutitulo");
  
  return (
    <>
      <h6 className="text-2xl font-thin text-white">{title} </h6>
      <button onClick={()=>callMyAPI(title)} className="bg-indigo-500 text-white px-4 py-2 rounded-md cursor-pointer">Llamar a funcion</button>
    </>

  )
})
