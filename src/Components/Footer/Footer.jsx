import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import facebook_icon from '../Assets/facebook_icon.png'
import twitter_icon from '../Assets/twitter_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
           <div className="footer-content-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio expedita amet ea </p>
                <div className="footer-social-icons">
                    <img src={facebook_icon} alt="" />
                    <img src={twitter_icon} alt="" />
                    <img src={linkedin_icon} alt="" />
                </div>
           </div>
           <div className="footer-content-center">
                <h3>COMPANY</h3>
                <ul>
                    <li>Home</li>
                    <li>courses</li>
                    <li>Reviews</li>
                </ul>

           </div>
           <div className="footer-content-right">
                <h3>Get In Touch</h3>
                <ul>
                    <li>+91-9391404099</li>
                    <li>keerthikothapalli17@gmail.com</li>
                </ul>

           </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Reflection.com - All Rights are reserved.</p>

    </div>
  )
}

export default Footer