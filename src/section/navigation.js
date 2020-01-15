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
            >Portfolio</Link>
           <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={false}
            offset={0}
            duration={500}
            >About</Link>
            <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={false}
            offset={0}
            duration={500}
            >Projects</Link>
            <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={false}
            offset={0}
            duration={1000}
            >Contact</Link>
    </div>
  );
}
}

export default Navigation;