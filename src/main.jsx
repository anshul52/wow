import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'

ScrollTrigger.defaults({ scroller: window })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
