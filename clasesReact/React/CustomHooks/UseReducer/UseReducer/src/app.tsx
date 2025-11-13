import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TasksApp } from './UseReducer/TaskApp'
import { ScrambleWords } from './ScrambleWords/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TasksApp/> */}
    <ScrambleWords/>
  </StrictMode>,
)
