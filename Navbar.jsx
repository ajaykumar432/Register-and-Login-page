import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <>
        <div className='Navbar1'>
        <Link className='anker' to="/">Home</Link>
        <Link className='anker' to="/Register">Register</Link>
        <Link className='anker' to="/Login">Login</Link>
        </div>
        </>
    )
}
export default Navbar