import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
   const [menu,setMenu] = useState("home");


  return (
    <div className="navbar">
    <div className="nav-logo">
        <Link to='/'><img src={logo} alt=""/></Link>
        <p>REFLECTION</p>
    </div>
    <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("courses")}}><Link  style={{textDecoration:'none'}} to='/courses'>Courses</Link>{menu==="courses"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("reviews")}}><Link  style={{textDecoration:'none'}} to='/reviews'>Reviews</Link>{menu==="reviews"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("blogs")}}><Link  style={{textDecoration:'none'}} to='/blogs'>Blogs</Link> {menu==="blogs"?<hr/>:<></>}</li> */}
    </ul>
    <div className="nav-login">
        <Link to='/login'><button>Login</button></Link>
    </div>
    </div>
  )
}

export default Navbar