import React from 'react'

import { BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp, BsDiscord } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://www.linkedin.com/in/yash-gadhade/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/yashg512"><BsTwitter /></a>
            </div>

            <div>
                <a href="https://wa.me/918454973811"><BsWhatsapp /></a>
            </div>
        </div>
    )
}

export default SocialMedia