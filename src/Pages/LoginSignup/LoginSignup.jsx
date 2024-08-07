import React, { useState } from 'react'
import './LoginSignup.css'
import cart_cross_icon from "../../Components/Assets/cart_cross_icon.png";


const LoginSignup = ({setShowLogin}) => {
  const [currState,setCurrentState] = useState("Login");
  return (
    <div className='login-signup'>
      <form className='login-signup-container'>
        <div className="login-signup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={cart_cross_icon} alt=""/>
        </div>
        <div className="login-signup-inputs">
          {currState==="Login"?<></>:
          <input type="text" placeholder='Your name' required/>}
          <input type="email" placeholder='Your email' required/>
          <input type='password' placeholder='Your password' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState ==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
             }
      </form>

    </div>
  )
}

export default LoginSignup