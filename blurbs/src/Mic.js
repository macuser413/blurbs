import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import './App.css';

const Microphone = new MicRecorder({ bitRate: 128 });

export class Mic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRecording: false,
      blobURL: "",
      isBlocked: false,
      snippets: []
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log("Action not allowed.");
    } else {
      Microphone.start()
        .then(() => {
          this.setState({ isRecording: true });
        })
        .catch(err => console.error(err));
    }
  };

  stop = () => {
    Microphone.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        console.log(buffer, blob)
        const file = new File(buffer, 'snippet.mp3', {
              type: blob.type,
              lastModified: Date.now()
          })
        const li = document.createElement('li')
        const player = new Audio(URL.createObjectURL(file))
        player.controls = true;
        li.appendChild(player);
        document.querySelector('#snip-list').appendChild(li)

        const blobURL = URL.createObjectURL(blob);
        this.setState({ blobURL, isRecording: false });
        this.setState((preRec) => ({
            snippets: [...preRec.snippets, {blob}]
        }))
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("You can use the microphone.");
        this.setState({ isBlocked: false });
      },
      () => {
        console.log("Unable to access the microphone.");
        this.setState({ isBlocked: true });
      }
    );
  }

  render() {
    return (
    <div className="container">
        <nav>
            <h1>blurbs</h1>
        </nav>
        <main>
            <div className='button-set'>
                <button className='rec' onClick={this.start} disabled={this.state.isRecording}>
                Record
                </button>
                <button className='stop' onClick={this.stop} disabled={!this.state.isRecording}>
                Stop
                </button>
            </div>
            {/* <audio className='current-player' src={this.state.blobURL} controls="controls" /> */}
            <ul id='snip-list' className='scroll'>
            {this.state.snippets ? this.state.snippets.map((snip, index) => (
                <li key={index}>
                {snip.blobURL}
                </li>
            ))  : <li></li>
            }
            </ul>
        </main>
        <footer>
            <h4>dj fuzz℗</h4>
        </footer>
      </div>
    );
  }
}

export default Mic;