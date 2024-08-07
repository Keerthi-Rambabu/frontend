import React from 'react';
import { Link } from 'react-router-dom';
const JavaSidebar = () => {
  return (
    <div className='java'>
        <ul>
            <li><Link to ='introduction'>Java Introduction</Link></li>
            <li><Link to='Oops'>OOPs</Link></li>
            {/* <li><Link to='chapter2'>Java chapter2</Link></li> */}
        </ul>
    </div>
  )
}

export default JavaSidebar