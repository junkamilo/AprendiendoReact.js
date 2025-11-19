import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ArtistasApp } from './ArtistasApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtistasApp/>
  </StrictMode>,
)
