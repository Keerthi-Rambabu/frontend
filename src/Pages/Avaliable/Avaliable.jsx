import React from 'react'
import './Avaliable.css'
import all_subjects from '../../Components/Assets/all_subjects'
import Courses from '../../Pages/Courses/Courses'

const Avaliable = () => {
  return (
    <>
    <div className='avaliable'>
        <h3>Avaliable Courses</h3>
        <hr/>
        <div className="avaliable-items">
            {
                all_subjects.map((item,i)=>{
                    return <Courses key={i} id={item.id} name ={item.name} image ={item.image}/>
                })
            }
        </div>
    </div>
    </>
  )
}

export default Avaliable

