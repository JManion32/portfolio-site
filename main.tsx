import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import Home from './pages/home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
