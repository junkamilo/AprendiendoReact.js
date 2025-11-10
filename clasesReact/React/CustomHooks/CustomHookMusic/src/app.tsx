import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MusicComponent } from './components/MusicComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MusicComponent/>
  </StrictMode>,
)
