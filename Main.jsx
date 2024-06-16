import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Navbar from './Navbar'
const Main = () => {
  return (
    <>
     {/* <ToastContainer
        // position="top-center"
        autoClose={2000}
        
      /> */}
        <BrowserRouter>
        <Navbar/>
        <Routes>
           <Route path="/"  element={<Home/>}/>
           <Route path= "/Register" element={<Register/>}/>
           <Route path="/Login" element={<Login/>}/>
        </Routes>

        </BrowserRouter>
    </>
  )
}

export default Main