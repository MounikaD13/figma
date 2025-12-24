import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Coding from './components/Coding'
import Login from './components/Login'
import SingUp from './components/SingUp'
import Mcq from './components/MCQPage'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/coding' element={<Coding/>}/>
        <Route path="/signup" element={<SingUp/>} />
        <Route path='/mcq' element={<Mcq/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
