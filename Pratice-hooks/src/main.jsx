import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateContext_provider from '../src/Hooks/Context/CreateContext_provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <CreateContext_provider /> */}
  </StrictMode>,
)
