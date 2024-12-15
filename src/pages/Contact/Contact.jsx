import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState(""); // To display status messages
  const [isSent, setIsSent] = useState(false); // To handle success notifications

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
          />
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
