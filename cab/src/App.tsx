import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import Hero from './Components/Hero.js'
import Business from './Components/Business.js'
import RIdes from './Components/RIdes.js'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Business/>
      <RIdes/>
    </>
  )
}

export default App
