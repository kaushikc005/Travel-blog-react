import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import {Navbar,Home,Footer} from './components/index'
import Services from './components/Services'
import Products from './components/Products'
function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
