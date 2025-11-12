import React from 'react'
import Navbarr from '../Navbarr'
import Aboutt from '../../Components/Home/Aboutt'
import Footer from '../Footer'
import Avathar from '../../Components/Home/Avathar'

function Ab() {
  return (
    <div>

      {/* ✅ Navbar */}
      <Navbarr />

      {/* ✅ Avatar Section */}
      
         <Avathar />

      {/* ✅ About Section */}
      <Aboutt />

      {/* ✅ Footer */}
      <Footer />

    </div>
  )
}

export default Ab
