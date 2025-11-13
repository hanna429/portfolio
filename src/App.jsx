// import About from "./Components/Sharedcomponent.jsx/Home/Pages/About"
import { Routes, Route } from "react-router-dom"
import Home from "./Sharedcomponents/pages/Home"
import Work from "./Sharedcomponents/pages/Work"
import About from "./Sharedcomponents/pages/About"
import Resume from "./Sharedcomponents/Resume.jsx"


function App() {
  return (
    <>    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/work" element={<Work/>}/>
       <Route path="/resume" element={<Resume/>}/>

    </Routes>
    </>
  )
}

export default App
