import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../App.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {active: 0};
    }
    toggleCategories() {
        if(this.state.activeTab === 0){
        return(
    <div className="project-grid" id="projects">
            {/*Project 1 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>React project #1</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
            {/*Project 2 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>React project #2</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
            {/*Project 3 */}
            <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>React project #3</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
        </div>
    )
}
if(this.state.activeTab === 1){
return(
    <div className="project-grid" id="portfolio"> 
    <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>Angular project #1</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
        </Card>
        {/*Project 2 */}
        <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>Angular project #2</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
        </div>
)
}
if(this.state.activeTab === 2){
return(
<div className="project-grid">
<Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>VueJs project #1</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
        </Card>
        {/*Project 2 */}
        <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>VueJs project #2</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
        </div>
)
}
if(this.state.activeTab === 3){
return(
<div className="project-grid">
<Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>MongoDB project #1</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
        </Card>
        {/*Project 2 */}
        <Card shadow={5} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHFpSQN43lwSdvhefZrWZuK-8qclT5CsUGTRn4sB1IehktQKkBw&s) center/ cover'}}>MongoDB project #2</CardTitle>
            <CardText>here's is me project</CardText>
            <CardActions border>
                <Button colored>GitHub</Button> 
                <Button colored>LiveDemo</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
        </div>
)
}
}

render () {
return(
    <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>Vuejs</Tab>
            <Tab>MongoDB</Tab>
        </Tabs>
            <Grid>
                <Cell col={12}>
                    <div className="content">
                    {this.toggleCategories()} 
                    </div>
                </Cell>
            </Grid>
    </div>
)
}
}

export default Projects;