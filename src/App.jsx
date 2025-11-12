// import About from "./Components/Sharedcomponent.jsx/Home/Pages/About"
import { Routes, Route } from "react-router-dom"
import Home from "./Sharedcomponents/pages/Home"
import Work from "./Sharedcomponents/pages/Work"
import More from "./Sharedcomponents/More"
import Ab from "./Sharedcomponents/pages/ab"

function App() {
  return (
    <>    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ab" element={<Ab/>}/>
       <Route path="/work" element={<Work/>}/>
       <Route path="/more" element={<More/>}/>

    </Routes>
    </>
  )
}

export default App
