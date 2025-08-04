import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Divgrid from './components/gridCardArtista.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Divgrid />
  </StrictMode>,
)
