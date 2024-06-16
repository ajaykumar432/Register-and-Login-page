import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
import './form.css'
const Register = () => {
  let [user,setUser] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword]=useState("")
  let [gender, setGender] = useState("")

  let SubmitForm = (e)=>{
    e.preventDefault();
    if(user === ""){
      
      alert("Username is required")
      
    }
    else if(email === ""){
      
      alert("Email is required")
    }
    else if(password === ""){
      
      alert("Password is required")
    }
    else if(gender === ""){
      
      alert("Gender is required")
    }
    else{
      localStorage.setItem("username", user)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("gender",gender)
    }
  };
  let userChange =(e)=>{
    setUser(e.target.value)
  }
  let matchPassword = (e)=>{
    setPassword(e.target.value)
  }
  return (
    <>
    <div className='form2 form3'>
      <form action="">
      <div>
        <label htmlFor="username">User Name</label><br />
        <input type="text" value={user} onChange={userChange} />
      </div>
      <div>
        <label htmlFor="email" >Email Address</label><br />
        <input type="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
      </div>
      <div>
        <label htmlFor="Password">password</label><br />
        <input type="password" value={password} onChange={matchPassword}/>
      </div>
      <div>
        <label htmlFor="Gender">Gender: </label>
        <input type="radio" name="Gen"  value="Male" defaultChecked={gender="male"} onClick={(e)=>{
          setGender(e.target.value)
        }}/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="Gen"  value="Female" defaultChecked={gender="female"} onClick={(e)=>{
          setGender(e.target.value)}}/>
        <label htmlFor="Female" name="gender">Female</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="checkbox"> I Accept term and conditions</label>
      </div>
      <div>
        <button onClick={SubmitForm}>Submit</button>
      </div>
      </form>
    </div>
    </>
  )
}

export default Register