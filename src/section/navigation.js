import React, { Component } from 'react';
import './navigation.css';
import { Link } from "react-scroll";

class Navigation extends Component {
    render(){
  return (
    <div className="navbar">
            <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={false}
            offset={0}
            duration={500}
            ><h4>Portfolio</h4></Link>
           <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={false}
            offset={0}
            duration={500}
            ><h4>About</h4></Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={false}
            offset={0}
            duration={500}
            ><h4>Projects</h4></Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={false}
            offset={0}
            duration={1000}
            ><h4>Contact</h4></Link>
    </div>
  );
}
}

export default Navigation;