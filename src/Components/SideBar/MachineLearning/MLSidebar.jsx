import React from 'react'
import '../SidebarStyles.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const MLSidebar = () => {
    const [menu,setMenu] = useState("introduction");
    return (
      <div className='sidebar'>
          <ul className='unordered'>
          <li className={menu === "introduction" ? 'active' : ''} onClick={() => setMenu("introduction")}><Link to='introduction' style={{ textDecoration: 'none' }}>Introduction</Link></li>
          <li className={menu === "typesoflearning" ? 'active' : ''} onClick={() => setMenu("typesoflearning")}><Link to='typesoflearning' style={{ textDecoration: 'none' }}>Types of Learning</Link></li>
          <li className={menu === "activationfunctions" ? 'active' : ''} onClick={() => setMenu("activationfunctions")}><Link to='activationfunctions' style={{ textDecoration: 'none' }}>Activation Functions</Link></li>
          <li className={menu === "confusionmatrix" ? 'active' : ''} onClick={() => setMenu("confusionmatrix")}><Link to='confusionmatrix' style={{ textDecoration: 'none' }}>Confusion Matrix</Link></li>
          <li className={menu === "perceptron" ? 'active' : ''} onClick={() => setMenu("perceptron")}><Link to='perceptron' style={{ textDecoration: 'none' }}>Perceptron</Link></li>
          <li className={menu === "ensemblemethods" ? 'active' : ''} onClick={() => setMenu("ensemblemethods")}><Link to='ensemblemethods' style={{ textDecoration: 'none' }}>Ensemble Methods</Link></li>
          <li className={menu === "nonassociativelearning" ? 'active' : ''} onClick={() => setMenu("nonassociativelearning")}><Link to='nonassociativelearning' style={{ textDecoration: 'none' }}>Non-Associative Learning</Link></li>
          </ul>
      </div>
    )
}

export default MLSidebar;