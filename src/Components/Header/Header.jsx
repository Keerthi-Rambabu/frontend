import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import main2 from '../Assets/main2.jpg'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2> Let's start learning...</h2>
            <p>Learning should be fun and enjoyable. It should boost you up. Keeping this in mind, we designed our courses to make learning easier and faster, helping you reach your full potential with every lesson.</p>
            <Link to='/courses'><button>View Courses</button></Link>
        </div>
        <div className="header-logo">
          <img src={main2} alt=""/>
        </div>

    </div>
  )
}

export default Header