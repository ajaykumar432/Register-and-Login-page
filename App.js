import React from 'react'
import App3 from './Component/Routers2/App3'
// import Login from './Register/Login'
// import Register from './Register/Register'
import Main from './Register/Main'
import Table from './StoreDataInTable/Table'
import Dropdown from './Dropdown'
import Carousel1 from './Carousel/Carousel1'



const App = () => {
  return (
    <>
     <App3/>
     <br/><br/><br/><br/><br/><br/><br/><br/><br/>
     {/* <Login/>
     <br/>
     <Register/> */}
     <Main/>
     

     <h1>Table started</h1>
     <Table/>
     <Dropdown/>
     <Carousel1/>
    </>
  )
}

export default App