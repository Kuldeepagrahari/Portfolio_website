// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import "./contact.css";
// const Contact = () => {
//   const form = useRef();
//   const [statusMessage, setStatusMessage] = useState(""); // To display status messages
//   const [isSent, setIsSent] = useState(false); // To handle success notifications
//   const [isTypingEmail, setIsTypingEmail] = useState(false); // To track email input activity

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatusMessage(""); // Clear any previous messages
//     setIsSent(false);

//     emailjs
//       .sendForm(
//         "service_f1vxifi", // Replace with your EmailJS Service ID
//         "template_8q3awr9", // Replace with your EmailJS Template ID
//         form.current,
//         "_-EHtpEuHENNYIxhe" // Replace with your EmailJS Public Key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setStatusMessage("✅ Thanks for Messaging!");
//           setIsSent(true);
//           e.target.reset();
//           setIsTypingEmail(false); // Reset typing state
//         },
//         (error) => {
//           console.log(error.text);
//           setStatusMessage("❌ Failed to send message. Please try again.");
//           setIsSent(false);
//         }
//       );
//   };

//   return (
//     <div name="contact" className="contact">
//        {/* <video autoPlay loop muted>
//         <source src="background.mp4" type="video/mp4" />
       
//       </video> */}
//       <div className="left">
//         <DotLottieReact
//           src="https://lottie.host/1917724c-db86-4dc9-8962-f76abc901890/ZocLPJWaB5.lottie"
//           loop
//           autoplay
//           className="lottie"
//         />
//       </div>
//       <div className="right">
//         <h1>Contact me</h1>
//         <form ref={form} onSubmit={sendEmail}>
//           <input
//             type="text"
//             name="from_name"
//             placeholder="Your Name"
//             required
//           />
          
//             <input
//               type="email"
//               name="reply_to"
//               placeholder="Your Email"
//               required
//               onChange={(e) => setIsTypingEmail(e.target.value.length > 0)}
//             />
//             {isTypingEmail && (
//               <small
//                 style={{
//                   color: "skyBlue",
//                   marginTop: "5px",
//                   display: "block",
//                   fontSize: "16px",
//                   textAlign:"center"
//                 }}
//               >
//                 *Ensure the validity of EMAIL address by yourself for one-to-one communication.
//               </small>
//             )}
        
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//           ></textarea>
//           <button type="submit">Send</button>

//           {/* Display notification message below the button */}
//           {statusMessage && (
//             <div
//               style={{
//                 marginTop: "10px",
//                 color: isSent ? "#83f28f" : "red",
//                 fontWeight: "bold",
//               }}
//             >
//               {statusMessage}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HiPaperAirplane } from "react-icons/hi";
import "./contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("");
    setIsSent(false);

    emailjs
      .sendForm(
        "service_f1vxifi",
        "template_8q3awr9",
        form.current,
        "_-EHtpEuHENNYIxhe"
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setIsSent(true);
          e.target.reset();
          setIsTypingEmail(false);
        },
        () => {
          setStatusMessage("Failed to send. Please try again.");
          setIsSent(false);
        }
      );
  };

  return (
    <div className="contact">
      <div className="orb orb-purple" style={{ width: 400, height: 400, bottom: '-100px', right: '-50px' }} />
      <div className="orb orb-cyan" style={{ width: 300, height: 300, top: 0, left: '300px' }} />

      <div className="contact-inner">
        {/* Left */}
        <div className="contact-left">
          <DotLottieReact
            src="https://lottie.host/1917724c-db86-4dc9-8962-f76abc901890/ZocLPJWaB5.lottie"
            loop
            autoplay
            className="contact-lottie"
          />
          <div className="contact-info">
            <div className="contact-info-line">
              <span>Email</span> kuldeepagrahari9103@gmail.com
            </div>
            <div className="contact-info-line">
              <span>Location</span> Prayagraj, UP, India
            </div>
            <div className="contact-info-line">
              <span>Status</span> Open to opportunities
            </div>
          </div>
        </div>

        {/* Right - form */}
        <div className="contact-right">
          <div className="section-chip">Let's Talk</div>
          <h2 className="contact-heading">
            <span className="line1">Get In</span>
            <span className="line2">Touch</span>
          </h2>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-field">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="Kuldeep Agrahari"
                required
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label">Your Email</label>
              <input
                type="email"
                name="reply_to"
                placeholder="you@example.com"
                required
                className="form-input"
                onChange={(e) => setIsTypingEmail(e.target.value.length > 0)}
              />
              {isTypingEmail && (
                <span className="form-email-hint">
                  ↳ Ensure email is valid for direct reply
                </span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                placeholder="Hey Kuldeep, I'd love to work with you on..."
                required
                className="form-textarea"
              />
            </div>

            <button type="submit" className="form-submit">
              <HiPaperAirplane /> Send Message
            </button>

            {statusMessage && (
              <div className={`form-status ${isSent ? 'success' : 'error'}`}>
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;