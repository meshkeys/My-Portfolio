import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';
import '../App.css';

class Contact extends Component {
    state = {};
    render(){
        return(
            <div className="contact-grid" id="contact">
              <Grid className="contact-grid">
                    <Cell col={6}>
                        <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                        alt="avatar"
                        style={{height: "250px"}}/>
                        <h2>Developer</h2>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        <h3>"Success is not owned. It is leased, and rent is due everyday".-JJ Watts</h3>
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'aqua'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (234) 803-953-0051
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'aqua'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                                meshkeys@skype.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'aqua'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                meshkeys@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                        <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton', color: 'aqua'}}>
                                <i className="fa fa-linkedin" aria-hidden="true"/>
                            </ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default Contact;