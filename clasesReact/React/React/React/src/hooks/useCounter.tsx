import { useState } from "react";

//le pasamos como parametres un valor inicial 10 lo cual recibira como argumento en counterApp
export const useCounter = (valueInitial:number=10) => {
    //primer parametro es el contador
    //segundo parametro es una funcion para hacerle conteo el primer parametro
    //useState es un metodo lo cual nos ayudara a sumar y restar al contador
    const [contador, setFuncionContador] = useState(valueInitial)
    //creamos las funciones para el evento onclick del boton
    const Sumar = () => {
        //llamamos una funcion y le contamos 1 al contador
        setFuncionContador(contador + 1);
    }
    //creamos las funciones para el evento onclick del boton
    const Restar = () => {
        //llamamos una funcion y le contamos 1 al contador
        setFuncionContador(contador - 1);
    }
    //llamamos una funcion y reiniciamos su valor actual al contador en este caso es 5
    const limpiar = () => {
        setFuncionContador(valueInitial);
    }
    return {
        //Values
        contador,

        //funciones
        Sumar,
        Restar,
        limpiar
    }
}
