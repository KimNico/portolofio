import React from "react"
import { NavBar } from "./components/Navbar/Navbar"
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from "./views/Home/Home";
import { Aboutme } from "./views/Aboutme/Aboutme";
import { Projects } from "./views/Projects/Projects";
import { Skills } from "./views/Skills/Skills";
import { Landing } from "./views/Landing/Landing";



function App() {


  return (
    <div className="App">
   <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/home" element ={<Home/>}/>
      <Route exact path="/aboutme" element ={<Aboutme/>}/>
      <Route exact path="/projects" element ={<Projects/>}/>
      <Route exact path="/skills" element ={<Skills/>}/>

   </Routes>
      </div>

  )
}

export default App
