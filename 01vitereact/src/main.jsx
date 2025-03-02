import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <>
    <App />
    <h1>Heading</h1>
    <em>Italic</em>
   </>
)
