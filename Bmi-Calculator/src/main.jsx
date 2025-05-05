import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bmi from './components/Bmi/Bmi.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bmi/>
  </StrictMode>,
)
