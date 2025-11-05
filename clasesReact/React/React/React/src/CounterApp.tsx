import { useCounter } from "./hooks/useCounter"

export const CounterApp = () => {
    //utilizamos una CustomHooks
    const { contador,Sumar,Restar,limpiar } = useCounter(5)

    return (
        <div>
            <h3>{contador}</h3>
            <button onClick={Sumar}>Sumar</button>
            <button onClick={Restar}>Restar</button>
            <button onClick={limpiar}>Resetear</button>
        </div>
    )
}
