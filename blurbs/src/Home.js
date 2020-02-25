import React, { Component } from 'react'

import './App.css';

class Home extends Component {
  render() {
    return (
      <div className='airtime'>
        <iframe id="embed_player" frameborder="0" width="350" height="396" src="https://betterradio.airtime.pro/embed/player?stream=auto&skin=2"></iframe>
      </div>
    )
  }
}

export default Home

