import React from "react";

interface PropsTitle {
    text:string;
}

export const Mytitle = React.memo(({text}:PropsTitle) => {

    console.log("My titel re-render");
    
  return (
    <h1 className="text-2xl font-thin text-white">{text} </h1>
  )
})
