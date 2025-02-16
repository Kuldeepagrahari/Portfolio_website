import React from "react";
import { motion } from "framer-motion";
import "./marquee.css";
const messages = [
  "Consistency is the key to mastery.",
  "Debugging is part of life.",
  "Every challenge is an opportunity.",
  "Growth happens outside the comfort zone.",
  "Small wins lead to big success.",
  "Never stop learning.",
];

const InfiniteScrollText = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scroll-content"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        }}
      >
        {[...messages, ...messages].map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollText;
