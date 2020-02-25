import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

import Main from './Main';

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Main />
        </Router>
      </main>
    </div>
  );
}

export default App;
