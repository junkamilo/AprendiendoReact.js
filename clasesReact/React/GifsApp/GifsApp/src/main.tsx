import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import { GifsApp } from './GifsApp'
//import { getPostData } from './Post/postData/postData';
import { Postmain } from './Post/Postmain';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Postmain/>
  </StrictMode>,
)
