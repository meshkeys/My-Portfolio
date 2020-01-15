import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import Navigation from './section/navigation';
import Portfolio from './section/portfolio';
import About from './section/about'
import Projects from './section/projects'
import Contact from './section/contact';
import Footer from './section/footer';
import * as serviceWorker from './serviceWorker';


class App extends Component {
    render() {
        return(
            <div>
                <Navigation/>
                <Portfolio/>
                <About />
                <Projects/>
                <Contact/>
                <Footer />

            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
