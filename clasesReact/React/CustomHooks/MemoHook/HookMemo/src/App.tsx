import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { MemoHook } from './MemoHook/memoHook';
// import { MemoCounter } from './MemoCounter/MemoCounter';
import { InstagromApp } from './UseOptimistic/UseOptimistic';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    <InstagromApp/>
  </StrictMode>,
)
