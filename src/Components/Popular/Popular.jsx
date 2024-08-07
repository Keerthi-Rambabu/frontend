import React from 'react'
import './Popular.css'
import trending from '../Assets/trending'
import Courses from '../../Pages/Courses/Courses'
const Popular = () => {
  return (
    <div className='popular'>
        <h3>Popular Courses</h3>
        <hr/>
        <div className="popular-item">
            {trending.map((item,i)=>{
                return <Courses key={i} id={item.id} name ={item.name} image ={item.image}/>
            })}
        </div>
    </div>
  )
}

export default Popular