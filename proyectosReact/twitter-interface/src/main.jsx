import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TwitterCard  from './components/App'
import "./index.css"
import Usuarios from './components/Usuarios'

createRoot(document.getElementById('root')).render(
  <>
    <TwitterCard button={false}/>
  </>,
)
