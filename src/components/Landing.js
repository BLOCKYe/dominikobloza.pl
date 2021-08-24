import React from "react";
import { motion } from "framer-motion";

function Landing() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
      className="landing"
    >
      <div className="container">
        <div className="header">
          <div className="headline">Dominik Obłoza</div>
          <div className="headline">UI / Frontend developer</div>
          <div className="text">I like to build peculiar things.</div>
        </div>

        <div className="git">
          <strong>Get In Touch</strong>
        </div>

        <div className="socials">
          <div>About me</div>
          <motion.div
            whileHover={{ rotate: 10 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="link">Github</div>
            <span className="icon-go icon"></span>
          </motion.div>
          <motion.div
            whileHover={{ rotate: 10 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="link">LinkedIn</div>
            <span className="icon-go icon"></span>
          </motion.div>
        </div>

        <div className="line">
          <div className="top"></div>
          <motion.div
            animate={{ y: 30 }}
            initial={{ y: -90 }}
            transition={{ repeat: Infinity, duration: 3, repeatDelay: 3 }}
            className="bottom"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
