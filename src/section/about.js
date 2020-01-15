import React, { Component } from 'react';
import Detabout from '../components/detabout';
import Content from '../components/content';
import '../App.css';

class About extends Component {
    state = {};
    render(){
        return(
            <div className="about-grid" id="about">
                <Detabout title={this.props.title}/>
                <Content>
                    <p>Hello, my name is Meshack, i am a full stack web developer with experience in frontend and backend technologies.</p>
                    <p>Keeping my hands busy building stuffs is my greatest passion and getting issues solved,looking forward to becoming a really great tech scrum someday.</p>
                    <p>I keep personal development and growth consistent and currently working on gaining better skills with Javascript, Express JS, MongoDb and Node JS while getting experience using libraries such as React,Angular,Vuejs.</p>
                    <p>You can checkout some of my projects below, and find some pretty cool apps deployed already using heroku and netlify.</p>
                    <p>When am not working or sitting in front of my system, i enjoy playing the piano personally and with my band or travelling.</p>
                </Content>
            </div>
        )
    }
}

export default About;