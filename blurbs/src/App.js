import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Main from './Main';
import Mic from './Mic';
import Contact from './Contact';
import About from './About';
import Home from './Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <Link to='/About'>About</Link> */}
        {/* <Link to='/'>Mic</Link> */}
      {/* </header> */}
      <main>
        <Router>
        {/* <input type='file' accept='audio/*' capture id='microphone' /> */}
          {/* <Route path='/' component={Mic}></Route>
          <Route path='/About' exact component={About}></Route> */}
          <Main />
          {/* <Welcome /> */}
          {/* <Mic /> */}
          {/* <Contact /> */}
          {/* <About /> */}
        </Router>
      </main>
    </div>
  );
}

export default App;
