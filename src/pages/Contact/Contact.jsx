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
import { HiPaperAirplane, HiMail, HiLocationMarker, HiExternalLink } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./contact.css";

const socialLinks = [
  { Icon: FaGithub,   href: 'https://github.com/Kuldeepagrahari', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/Kuldeepagrahari/', label: 'LinkedIn' },
  { Icon: FaWhatsapp, href: 'https://wa.me/8957298885', label: 'WhatsApp' },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    console.log(import.meta.env.VITE_EMAIL_SERVICE)
    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      form.current,
      import.meta.env.VITE_EMAIL_KEY
    )
    .then(() => {
      setStatus('ok');
      e.target.reset();
    })
    .catch(() => setStatus('err'));
  };

  return (
    <div className="contact">
      <div className="contact-orb contact-orb--purple" />
      <div className="contact-orb contact-orb--cyan" />

      <div className="contact-inner">

        {/* LEFT */}
        <div className="contact-info-panel">
          <div className="cinfo-top">
            <div className="section-chip">Let's Talk</div>
            <h2 className="cinfo-heading">
              <span className="ci-solid">Get In</span>
              <span className="ci-outline">Touch</span>
            </h2>

            <p className="cinfo-desc">
              I'm currently open to full-time backend engineering roles.
              If you have an opportunity, project, or just want to connect — feel free to reach out.
            </p>
          </div>

          <div className="cinfo-details">
            <div className="cinfo-line">
              <HiMail className="ci-icon" />
              <div>
                <div className="ci-line-label">Email</div>
                <a href="mailto:kuldeepagrahari9103@gmail.com" className="ci-line-val">
                  kuldeepagrahari9103@gmail.com
                </a>
              </div>
            </div>

            <div className="cinfo-line">
              <FaPhone className="ci-icon" />
              <div>
                <div className="ci-line-label">Phone</div>
                <span className="ci-line-val">+91 8871805535</span>
              </div>
            </div>

            <div className="cinfo-line">
              <HiLocationMarker className="ci-icon" />
              <div>
                <div className="ci-line-label">Location</div>
                <span className="ci-line-val">India</span>
              </div>
            </div>
          </div>

          <div className="cinfo-social">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className="ci-social-btn"
                key={label}
              >
                <Icon />
                <span>{label}</span>
                <HiExternalLink className="ci-ext" />
              </Link>
            ))}
          </div>

          <div className="cinfo-avail">
            <span className="avail-dot" />
            <span>Available for full-time roles starting June 2026</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-form-wrap">
          <form ref={form} onSubmit={sendEmail} className="cform">

            <div className="cform-field">
              <label className="cform-label">Your Name</label>
              <input
                type="text"
                name="from_name"
                placeholder="e.g. Sam Sharma"
                required
                className="cform-input"
              />
            </div>

            <div className="cform-field">
              <label className="cform-label">Your Email</label>
              <input
                type="email"
                name="reply_to"
                placeholder="you@company.com"
                required
                className="cform-input"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              {emailFocus && (
                <span className="cform-hint">
                  Ensure email is valid — I reply to every message
                </span>
              )}
            </div>

            {/* NEW SUBJECT FIELD */}
            <div className="cform-field">
              <label className="cform-label">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Opportunity / Collaboration / Query"
                className="cform-input"
              />
            </div>

            <div className="cform-field">
              <label className="cform-label">Message</label>
              <textarea
                name="message"
                placeholder="Hi Kuldeep, I came across your profile and would like to discuss an opportunity..."
                required
                className="cform-textarea"
              />
            </div>

            <button
              type="submit"
              className={`cform-submit ${status === 'sending' ? 'sending' : ''}`}
              disabled={status === 'sending'}
            >
              <HiPaperAirplane />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'ok' && (
              <div className="cform-status cform-status--ok">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            {status === 'err' && (
              <div className="cform-status cform-status--err">
                ✕ Failed to send. Please email me directly.
              </div>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { HiPaperAirplane, HiMail, HiLocationMarker, HiExternalLink } from "react-icons/hi";
// import { FaWhatsapp, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./contact.css";

// const socialLinks = [
//   { Icon: FaGithub,   href: 'https://github.com/Kuldeepagrahari',                      label: 'GitHub' },
//   { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/kuldeep-agrahari-56b159260',   label: 'LinkedIn' },
//   { Icon: FaWhatsapp, href: 'https://wa.me/8957298885',                                 label: 'WhatsApp' },
// ];

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'
//   const [emailFocus, setEmailFocus] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus('sending');

//     emailjs
//       .sendForm(
//         "service_f1vxifi",
//         "template_8q3awr9",
//         form.current,
//         "_-EHtpEuHENNYIxhe"
//       )
//       .then(() => {
//         setStatus('ok');
//         e.target.reset();
//       })
//       .catch(() => setStatus('err'));
//   };

//   return (
//     <div className="contact">
//       <div className="contact-orb contact-orb--purple" />
//       <div className="contact-orb contact-orb--cyan" />

//       <div className="contact-inner">

//         {/* ── LEFT — Info card ─────────────────── */}
//         <div className="contact-info-panel">
//           <div className="cinfo-top">
//             <div className="section-chip">Let's Talk</div>
//             <h2 className="cinfo-heading">
//               <span className="ci-solid">Get In</span>
//               <span className="ci-outline">Touch</span>
//             </h2>
//             <p className="cinfo-desc">
//               I'm currently open to full-time backend/full-stack engineering roles.
//               Whether you have a project, opportunity, or just want to connect — my inbox is open.
//             </p>
//           </div>

//           <div className="cinfo-details">
//             <div className="cinfo-line">
//               <HiMail className="ci-icon" />
//               <div>
//                 <div className="ci-line-label">Email</div>
//                 <a href="mailto:kuldeepagrahari9103@gmail.com" className="ci-line-val">
//                   kuldeepagrahari9103@gmail.com
//                 </a>
//               </div>
//             </div>
//             <div className="cinfo-line">
//               <FaPhone className="ci-icon" />
//               <div>
//                 <div className="ci-line-label">Phone</div>
//                 <span className="ci-line-val">+91 88718 05535</span>
//               </div>
//             </div>
//             <div className="cinfo-line">
//               <HiLocationMarker className="ci-icon" />
//               <div>
//                 <div className="ci-line-label">Location</div>
//                 <span className="ci-line-val">Prayagraj, Uttar Pradesh, India</span>
//               </div>
//             </div>
//           </div>

//           {/* Social links */}
//           <div className="cinfo-social">
//             {socialLinks.map(({ Icon, href, label }) => (
//               <Link
//                 to={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ci-social-btn"
//                 key={label}
//               >
//                 <Icon />
//                 <span>{label}</span>
//                 <HiExternalLink className="ci-ext" />
//               </Link>
//             ))}
//           </div>

//           {/* Availability badge */}
//           <div className="cinfo-avail">
//             <span className="avail-dot" />
//             <span>Available for full-time roles · June 2026</span>
//           </div>
//         </div>

//         {/* ── RIGHT — Form ─────────────────────── */}
//         <div className="contact-form-wrap">
//           <form ref={form} onSubmit={sendEmail} className="cform">
//             <div className="cform-field">
//               <label className="cform-label">Your Name</label>
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="e.g. Sam Sharma"
//                 required
//                 className="cform-input"
//               />
//             </div>

//             <div className="cform-field">
//               <label className="cform-label">Your Email</label>
//               <input
//                 type="email"
//                 name="reply_to"
//                 placeholder="you@company.com"
//                 required
//                 className="cform-input"
//                 onFocus={() => setEmailFocus(true)}
//                 onBlur={() => setEmailFocus(false)}
//               />
//               {emailFocus && (
//                 <span className="cform-hint">
//                  Ensure email is valid — I reply to every message
//                 </span>
//               )}
//             </div>

//             <div className="cform-field">
//               <label className="cform-label">Message</label>
//               <textarea
//                 name="message"
//                 placeholder="Hey Kuldeep, I'd love to discuss..."
//                 required
//                 className="cform-textarea"
//               />
//             </div>

//             <button
//               type="submit"
//               className={`cform-submit ${status === 'sending' ? 'sending' : ''}`}
//               disabled={status === 'sending'}
//             >
//               <HiPaperAirplane />
//               {status === 'sending' ? 'Sending...' : 'Send Message'}
//             </button>

//             {status === 'ok' && (
//               <div className="cform-status cform-status--ok">
//                 ✓ Message sent! I'll get back to you soon.
//               </div>
//             )}
//             {status === 'err' && (
//               <div className="cform-status cform-status--err">
//                 ✕ Failed to send. Please email me directly.
//               </div>
//             )}
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;