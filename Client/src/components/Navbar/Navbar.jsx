import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import {Navbar, Container} from 'react-bootstrap'

export function NavBar(){   
    const [ activeLink, setActiveLink] = useState('home')
    const [ scrolled, setScrolled ] =useState("false")


    useEffect(()=>{
        if(window.scroll>50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
        window.addEventListener("scroll",onScroll)
        return()=>window.removeEventListener("scroll",onScroll)
    })

    return(
         
           <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src = {''} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="narbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" clasname={activeLink == "home" ? "active navbar-link":"navbar-link"} onClick ={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about me" clasname={activeLink == "aboutme" ? "active navbar-link":"navbar-link"} onClick ={()=> onUpdateActiveLink('aboutme')}>About me</Nav.Link>
            <Nav.Link href="#skills" clasname={activeLink == "skills" ? "active navbar-link":"navbar-link"} onClick ={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" clasname={activeLink == "projects" ? "active navbar-link":"navbar-link"} onClick ={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          <div className="social-icon">
            <a href="#"><img src={""} alt=""></img></a>
            <a href="#"><img src={""} alt=""></img></a>
            <a href="#"><img src={""} alt=""></img></a>
            <a href="#"><img src={""} alt=""></img></a>
            </div>
            </span>
            <button clasname="vvd" onClick={()=>console.log("connect")}><span>Let's connect</span></button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}



   {/* <Link to = "/home">Home</Link>
           <Link to = "/aboutme">About me</Link>
           <Link to = "/projects">Projects</Link>
           <Link to = "/skills">Skills</Link> */}