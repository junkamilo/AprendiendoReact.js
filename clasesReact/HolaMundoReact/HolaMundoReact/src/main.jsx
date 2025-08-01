
import React from 'react';
import { createRoot } from 'react-dom/client'
import Button from './button';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Button text="boton 1"/>
    <Button text="boton 2"/>
    <Button text="boton 3"/>
  </React.StrictMode>
);
 