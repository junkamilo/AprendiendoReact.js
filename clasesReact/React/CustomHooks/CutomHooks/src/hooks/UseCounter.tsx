import { useState } from "react"

export const UseCounter = (initialValue : number = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increMent = () =>{
    setCounter(counter + 1);
  }

  const decreMent = ()=>{
    //si counter es menor o igual a uno que no haga nada
    if(counter <= 1) return;
    setCounter(counter - 1);
  }

  return {
    //properties
    counter,

    //Methods
    increMent,
    decreMent,
  }
}
