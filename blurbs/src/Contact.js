import React, { Component } from 'react'

import github from './img/github-128.png'
import facebook from './img/facebook-128.png'
import email from './img/email-128.png'
import twitter from './img/twitter-128.png'
import phone from './img/phone-128.png'
import linkedin from './img/linkedin-128.png'

export class Contact extends Component {
    render() {
        return (
            <div>
                <div id='hello'>
                <h2>Say hello...</h2>
                    <div class='connect'>
                        <button className='connect'><a href='tel:3154822536;2?'><img src={phone} alt={'phone'} href='https://github.com/macuser413/'/></a></button>
                        <button className='connect'><a href='mailto:david.magbee@betterarts.org?subject=Saying hello - blurbs'><img src={email} alt={'email'} href='https://github.com/macuser413/'/></a></button>
                        <button className='connect'><a href='https://www.facebook.com/fmbetterradio'><img src={facebook} alt={'facebook'} href='https://github.com/macuser413/'/></a></button>
                        <button className='connect'><a href='https://twitter.com/fmbetterradio'><img src={twitter} alt={'twitter'} href='https://github.com/macuser413/'/></a></button>
                        <button className='connect'><a href='https://github.com/macuser413/'><img src={github} alt={'github'} href='https://github.com/macuser413/'/></a></button>
                        <button className='connect'><a href='https://www.linkedin.com/in/davidmagbee/'><img src={linkedin} alt={'linkedin'} href='https://github.com/macuser413/'/></a></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
