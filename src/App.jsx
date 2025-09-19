import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  index element = {<Home />} />
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App