interface propsContador {
    contador:number
}

export const Contador = ({contador}:propsContador) => {
  return (
    <p className="conteoLikes">{contador}</p>
  )
}

export const ConteCompartir = ({contador}:propsContador)=>{
  return(
    <p className="conteotCompartir">{contador}</p>
  )
}
