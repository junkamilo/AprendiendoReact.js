import { CustomBuscador } from "./CustomBuscador"

export const Header = () => {
  return (
    <header className="contentHeader">
        <h1>Busca tu personaje favortio de Ricky And Morty</h1>
        {/**Pasamos al placeholder el parametro... */}
        <CustomBuscador placeholder='Buscar tu personaje Favorito...'/>
    </header>
  )
}
