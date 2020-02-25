import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <>
            <div className='gist'>
                <h4>a tool to create snippets</h4>
                <p>blurbs is a tool to create small sound snippets to share with others. The core concept around blurbs was to create a tool to allow listeners, performers, and creators from all over the world to record a snippet to provide Better Radio with content.</p>
                    <p>This content can include anything from a call sign from a listener or musician, a vague weather report, a song introduction, a poem, an encouragement, and so on. These can then be downloaded and submitted to the station to be inserted into the broadcast library and shared with the world.</p>
            </div>
            <div className='airtime'>
            <iframe id="embed_player" frameborder="0" width="350" height="396" src="https://betterradio.airtime.pro/embed/player?stream=auto&skin=2"></iframe>
            </div>
            </>
        )
    }
}

export default About