import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Homepage from './Pages/Homepage.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('home')).render(
  <StrictMode>
  <Navbar/>
  <Homepage/>
  {/* <Footer/> */}

  </StrictMode>,
)
