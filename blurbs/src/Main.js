import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Mic from './Mic';
import Contact from './Contact';
import About from './About';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>blurbs</h1>
                <ul className='navbar'>
                    <li><Link to='/Mic'>Rec</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><a href='/Contact'>Contact</a></li>
                </ul>
                <div className='content'>
                    <Route path='/Mic' component={Mic}></Route>
                    <Route path='/About' component={About}></Route>
                </div>
            </div>
        )
    }
}

export default Main
