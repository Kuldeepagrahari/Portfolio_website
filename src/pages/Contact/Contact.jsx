import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./contact.css";
import video from "../../../public/background.mp4"
const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // To display status messages
  const [isSent, setIsSent] = useState(false); // To handle success notifications
  const [isTypingEmail, setIsTypingEmail] = useState(false); // To track email input activity

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage(""); // Clear any previous messages
    setIsSent(false);

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
          setStatusMessage("✅ Thanks for Messaging!");
          setIsSent(true);
          e.target.reset();
          setIsTypingEmail(false); // Reset typing state
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Failed to send message. Please try again.");
          setIsSent(false);
        }
      );
  };

  return (
    <div name="contact" className="contact">
       <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
       
      </video>
      <div className="left">
        <DotLottieReact
          src="https://lottie.host/1917724c-db86-4dc9-8962-f76abc901890/ZocLPJWaB5.lottie"
          loop
          autoplay
          className="lottie"
        />
      </div>
      <div className="right">
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              onChange={(e) => setIsTypingEmail(e.target.value.length > 0)}
            />
            {isTypingEmail && (
              <small
                style={{
                  color: "skyBlue",
                  marginTop: "5px",
                  display: "block",
                  fontSize: "16px",
                  textAlign:"center"
                }}
              >
                *Ensure the validity of EMAIL address by yourself for one-to-one communication.
              </small>
            )}
        
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send</button>

          {/* Display notification message below the button */}
          {statusMessage && (
            <div
              style={{
                marginTop: "10px",
                color: isSent ? "#83f28f" : "red",
                fontWeight: "bold",
              }}
            >
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
