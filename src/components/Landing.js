import React, { useState } from "react";
import { motion } from "framer-motion";

function Landing() {
  const [show, setshow] = useState(true);

  return (
    <div className="landing">
      {show && (
        <div className="container">
          <div className="header">
            <div className="c">
              <motion.div
                initial={{ y: 100, rotate: 15 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                className="headline"
              >
                Dominik Obłoza
              </motion.div>
            </div>
            <div className="c">
              <motion.div
                initial={{ y: 100, rotate: 15 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                className="headline"
              >
                UI / Frontend developer
              </motion.div>
            </div>
            <div className="c">
              <motion.div
                initial={{ y: 100, rotate: 15 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
                className="text"
              >
                I like to build peculiar things.
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
            className="git"
          >
            <strong>Get In Touch</strong>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 2.5 }}
          >
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
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Landing;
