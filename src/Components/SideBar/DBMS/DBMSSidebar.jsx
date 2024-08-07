import React from 'react'
import '../SidebarStyles.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const DBMSSidebar = () => {
  const [menu,setMenu] = useState("introduction");
  return (
    <div className='sidebar'>
        <ul className='unordered'>
        <li className={menu === "introduction" ? 'active' : ''} onClick={() => setMenu("introduction")}><Link to='introduction' style={{ textDecoration: 'none' }}>Introduction</Link></li>
        <li className={menu === "ddl" ? 'active' : ''} onClick={() => setMenu("ddl")}><Link to='ddl' style={{ textDecoration: 'none' }}>DDL</Link></li>
        </ul>
    </div>
  )
}

export default DBMSSidebar;