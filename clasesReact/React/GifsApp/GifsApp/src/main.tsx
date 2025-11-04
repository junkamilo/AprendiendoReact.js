import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import { GifsApp } from './GifsApp'
import { RinckAndMortyApp } from './RickAndMorty/RinckAndMortyApp'
import './RickAndMorty/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RinckAndMortyApp/>
  </StrictMode>,
)
