import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';
import blurbmic from './img/blurbmic.png';

import Mic from './Mic';
import Contact from './Contact';
import About from './About';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <div>
                <h1><Link to='/'>blurbs</Link></h1>
                {/* <img id='blurb-mic' src={blurbmic} alt={'blurb-mic'} href=''/> */}
                <ul className='header'>
                    <li><Link to='/Mic'>Record</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><a href='/Contact'>Contact</a></li>
                </ul>
                <div className='content'>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/Mic' component={Mic}></Route>
                    <Route path='/About' component={About}></Route>
                    <Route path='/Contact' component={Contact}></Route>
                </div>
                <footer>
                    <h4>dj fuzz℗</h4>
                </footer>
            </div>
        )
    }
}

export default Main
