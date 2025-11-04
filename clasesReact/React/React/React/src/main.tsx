import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import { Card } from './Card';
//import './AgregarYEliminar/style.css'
//import { ContentAgregar } from './AgregarYEliminar/contentAgregar'
//import { CardShopping } from './shopping-card/CardShoping'
//import { ContentArtista } from './AgregarYEliminar/contentArtista';
//import { DataArtista } from './AgregarYEliminar/dataArtista';
//import { MyAwesomeApp } from './MyAwesomeApp';
import { Header } from './MusicApp/Header';
import { MainMusic } from './MusicApp/mainMusic';
import { Footer } from './MusicApp/Footer';
import './MusicApp/StyleMusic.css'


//createRoot es una función en React que crea un punto de entrada para renderizar componentes de React en un nodo del DOM del navegador.
//En eset caso elegimos el elemento que encuentra en el html con el id root lo cual createRoot va arendereizar componenet y va abuscar el root para pegarlos
createRoot(document.getElementById('root')!).render(
  //el estrictMode es una madera para ayudarnos con los errores del codigo, este solo efecat en desarrollo no en produccion
  <StrictMode>
    {/**<ContentArtista/> */}
    {/** <ContentAgregar artistas={DataArtista}/>*/}
    {/**<MyAwesomeApp />*/}

    {/**Version del App music */}
    <Header/>
    <MainMusic/>
    <Footer/>
  </StrictMode>
)
