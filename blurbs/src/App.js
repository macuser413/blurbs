import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Mic from './Mic';
import About from './About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Link to='/About'>About</Link> */}
        {/* <Link to='/'>Mic</Link> */}
      </header>
      <main>
        {/* <Switch> */}
        {/* <input type='file' accept='audio/*' capture id='microphone' /> */}
        {/* <Route path='/' component={Mic}></Route> */}
        {/* <Route path='/About' exact component={About}></Route> */}
        <Mic />
        {/* <About /> */}
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default App;
