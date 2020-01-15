import React, { Component } from 'react';
import '../App.css';
import Typical from 'react-typical';


class Portfolio extends Component {
    state = {};
    render(){
        return(
            <div className="portfolio-grid" id="portfolio">
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        className="avatar-img" 
                        />
                        <h2> Meshack Osagie </h2>
                        <h2>Full Stack Web Developer</h2>
                <div className="intro">
                             <p>
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
            </div>

        )
    }
}

export default Portfolio;