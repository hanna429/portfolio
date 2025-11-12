import React from 'react'
import Navbarr from '../Navbarr'
import Her from '../../Components/Home/Her'
import Passionate from '../../Components/Home/Passionate'
import Project from '../../Components/Home/Project'
import Footer from '../Footer'
import Aboutt from '../../Components/Home/Aboutt'

function Home() {
  return (
    <div>
        <Navbarr/>
        <Her/>
        <Passionate/>
        <Project/>
        <Aboutt/>
        <Footer/>
    </div>
  )
}

export default Home