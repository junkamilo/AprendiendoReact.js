import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Card } from './Card';
import './style.css'
import { CardShopping } from './shopping-card/cardShoping'

//createRoot es una función en React que crea un punto de entrada para renderizar componentes de React en un nodo del DOM del navegador.
//En eset caso elegimos el elemento que encuentra en el html con el id root lo cual createRoot va arendereizar componenet y va abuscar el root para pegarlos
createRoot(document.getElementById('root')!).render(
  //el estrictMode es una madera para ayudarnos con los errores del codigo, este solo efecat en desarrollo no en produccion
  <StrictMode>
    <CardShopping />
  </StrictMode>
)
