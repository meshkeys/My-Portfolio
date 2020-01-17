import React, { Component } from 'react';
import Typical from 'react-typical';
import mesh from "../mesh.jpg"
import '../App.css';


class Portfolio extends Component {
    state = {};
    render(){
        return(
            <div className="portfolio-grid" id="portfolio">
                <p className="img">
                        <img src={mesh}
                          alt="avatar"
                          className="avatar-img" 
                        />
                </p>
                     <p className="intro-grid">
                          <h2> Meshack Osagie </h2>
                          <h2>Full Stack Web Developer</h2>
                     </p>
                     <p className="intro-p">
                                <Typical 
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                'HTML/CSS',
                                 1000,
                                'BootStrap',
                                 1000,
                                'JavaScript',
                                 1000,
                                'React',
                                 1000,
                               'Express',
                                 1000,
                                'Nodejs',
                                 1000,
                                'MongoDB',
                                 1000,
                                 ]}/>
                     </p>
</div>  
        )
    }
}

export default Portfolio;


 