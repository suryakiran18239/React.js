import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User'
import Github from './components/Github/Github'
import {Route ,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter([
  { 
    path: '/',
    element: <Layout />,
    children: [{
      path: "",
      element: <Home />
    }, {  
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path: "user/:userid",
      element: <User />
    },
    {
      path: "github",
      element: <Github />
    }
  ]
  }
])

  //  const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Layout>
  //       <Route path="/" element={<Layout/>} />
  //       <Route path="" element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //     </Layout>
  //   )
  //  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
