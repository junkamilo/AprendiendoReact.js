interface propsContador {
    contador:number
}

export const Contador = ({contador}:propsContador) => {
  return (
    <p>{contador}</p>
  )
}
