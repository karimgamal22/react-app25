import React from 'react'
import NavBars from './CompontNav/NavBars'
import './App.css'
import Home from './CompontHome/Home'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <fragment >
      <NavBars />
      <Home />
      <Footer />
    </fragment>
  )
}

export default App
