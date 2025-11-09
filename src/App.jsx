// import About from "./Components/Sharedcomponent.jsx/Home/Pages/About"
import { Routes, Route } from "react-router-dom"
import Home from "./Sharedcomponents/pages/Home"

function App() {
  return (
    <>    
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="about" element={<About/>}/> */}
    </Routes>
    </>
  )
}

export default App
