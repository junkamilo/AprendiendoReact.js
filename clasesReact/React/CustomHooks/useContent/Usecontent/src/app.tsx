import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProfessionalApp } from './useContext/pages/ProfessionalApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfessionalApp/>
  </StrictMode>,
)
