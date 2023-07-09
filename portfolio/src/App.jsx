import { useState } from 'react'
import './App.css'

import Nav from "./Components/Nav"
import Home from './Components/Home'
import Intro from './Components/Intro'
import Blog from './Components/Blog'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

function App() {

  return (
    <div>
    <Nav />

    <div id="home">
      <Home />
    </div>

    <div id="intro">
      <Intro />
    </div>

    <div id="experience">
      <Experience />
    </div>

    <div id="blog">
      <Blog />
    </div>
    
    <div id="contact">
      <Contact />
    </div>
  </div>
  )
}

export default App
