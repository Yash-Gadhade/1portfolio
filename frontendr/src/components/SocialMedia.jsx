import React from 'react'

import { BsTwitter, BsLinkedin, BsWhatsapp } from 'react-icons/bs'



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