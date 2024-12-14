import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./contact.css"
const Contact = () => {
 
  return (
    <div name="contact" className='contact'>
        <div className="left">
     
        <DotLottieReact
      src="https://lottie.host/1917724c-db86-4dc9-8962-f76abc901890/ZocLPJWaB5.lottie"
      loop
      autoplay
      style={{width:"800px"}}
     
    />
        </div>
        <div className="right">
               <h1 style={{fontSize:"80px", color:"rgb(45, 72, 246)", textAlign:"center"}}>Contact Me</h1>
            <form >
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <textarea name="message" placeholder="Your Message"/>
                <button type="submit">Send</button>
                </form>
        </div>
     
    </div>
  )
}

export default Contact
