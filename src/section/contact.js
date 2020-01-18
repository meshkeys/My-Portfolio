import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import resume from '../resume.jpg';
import '../App.css';

class Contact extends Component {
    state = {};
    render(){
        return(
            <div className="contact-grid" id="contact">
              <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Contact Me</h2>
                        <p className="resume">
                        <img src={resume}
                        alt="resume"
                        style={{height: "200px"}}/>
                        </p>
                        <Button className="btn">
                            <a href="https://docs.google.com/document/d/1lPZByp87dWgWnxOXH95XkiYo4HEDadIn-g73-plAz9k/edit" rel="noopener noreferrer" target="_blank">View Resume</a>
                        </Button>
                        <p className="quote" style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        "Success is not owned. It is leased, and rent is due everyday".- JJ Watts
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <hr/>

                        <div className="contact-list">
                            <p>
                            <a href="tell:(234)8039530051" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-phone-square" aria-hidden="true"/><h3>(234) 803-953-0051</h3></a>
                                
                                </p>
                                <p>
                        <a href="skype:meshkeys?" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-skype" aria-hidden="true"/><h3>meshack.osagie</h3></a>
                                
                                </p>
                                <p>
                        <a href="http://gmail.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true"/><h3>meshkeys@gmail.com</h3></a>
                                </p>
                        </div>
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default Contact;