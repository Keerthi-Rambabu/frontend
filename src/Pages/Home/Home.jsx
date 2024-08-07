import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Popular from '../../Components/Popular/Popular'
// import SideBar from '../../Components/SideBar/SideBar'

// import HomeImage from '../../Components/Assets/HomeImage.jpeg'
const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Popular/>
    </div>

  )
}

export default Home