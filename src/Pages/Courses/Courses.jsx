import React from 'react'
import './Courses.css'
// import all_subjects from '../../Components/Assets/all_subjects.js'
 import {Link} from 'react-router-dom'
const Courses = (props) => {
  return (
    <div className='course'>
        <Link to={`/course/${props.name}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=""/></Link>
        <p>{props.name}</p>   
    </div>
  )
}

export default Courses