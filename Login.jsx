import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

import './form.css'
const Login = () => {
    let [users, setUsername] = useState("")
    let [pwd, setPwd] = useState("")
   let validPassword =(e)=>{
    setPwd(e.target.value)
   };
   let Validation = (e)=>{
    e.preventDefault()
    const storageusername =  localStorage.getItem("username")
    const storagepassword = localStorage.getItem("password")
    if(users === storageusername && pwd === storagepassword){
        alert("Login successfull")
    }
    else{
        alert("username or password is not matched")
    }
   }
  return (
    <>
    <div className='form1'>
        <form action="">
            <div>
            <label htmlFor="">Username</label><br />
            <input type="text" value={users} onChange={(e)=>{
                setUsername(e.target.value)
            }} size="25" height="30px"/>
            </div>
            <div>
                <label htmlFor="">Password</label><br />
                <input type="password" value={pwd} onChange={validPassword} size="25"/>
            </div>
            <div>
                <p className='para1'>Do you have an Account?
                    <Link className='anker3' to="/Register">Signup !</Link>
                </p>
            </div>
            <div>
                <button className='button1' onClick={Validation}>Login</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Login