import React, {useRef, useState} from 'react'
import emailjs from "@emailjs/browser";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./contact.css"
const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // To display status messages

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_f1vxifi", // Replace with your EmailJS Service ID
        "template_8q3awr9", // Replace with your EmailJS Template ID
        form.current,
        "_-EHtpEuHENNYIxhe" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message Sent Successfully!");
          e.target.reset();
          console.log(statusMessage)
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div name="contact" className='contact'>
      <div className="left">

        <DotLottieReact
          src="https://lottie.host/1917724c-db86-4dc9-8962-f76abc901890/ZocLPJWaB5.lottie"
          loop
          autoplay
          className='lottie'


        />
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" />
          <input type="email" name="reply_to" placeholder="Your Email" />
          <textarea name="message" placeholder="Your Message" />
          <button type="submit">Send</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
