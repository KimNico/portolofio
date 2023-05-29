import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"


export  function NavBar(){

    return(
        <div>
            <Link to = "/home">Home</Link>
           <Link to = "/aboutme">About me</Link>
           <Link to = "/projects">Projects</Link>
           <Link to = "/skills">Skills</Link>
        </div>
    )
}

