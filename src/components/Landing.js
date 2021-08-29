import React from "react";
import { motion } from "framer-motion";
import TrackVisibility from "react-on-screen";

function Landing() {
  return (
    <TrackVisibility partialVisibility className="landing">
      {({ isVisible }) =>
        isVisible && (
          <div className="container">
            <div className="header">
              <div className="c">
                <motion.div
                  initial={{ y: 100, rotate: 15 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="headline"
                >
                  Dominik Obłoza
                </motion.div>
              </div>
              <div className="c">
                <motion.div
                  initial={{ y: 100, rotate: 15 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="headline"
                >
                  UI / Frontend developer
                </motion.div>
              </div>
              <div className="c">
                <motion.div
                  initial={{ y: 100, rotate: 15 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="text"
                >
                  I like to build peculiar things.
                </motion.div>
              </div>
            </div>
            <div className="mail">
              <motion.a
                href="mailto:kontakt@dominikobloza.pl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
                className="git"
              >
                <strong>Get In Touch</strong>
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="socials">
                <div>About me</div>

                <motion.div
                  onClick={() => window.open("https://github.com/BLOCKYe")}
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="link-container"
                >
                  <div className="link">Github</div>
                  <span className="icon-go icon"></span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 5 }}
                  className="link-container"
                >
                  <div className="link">LinkedIn</div>
                  <span className="icon-go icon"></span>
                </motion.div>
              </div>

              <div className="line">
                <div className="top"></div>
                <motion.div
                  animate={{ y: 0 }}
                  initial={{ y: -120 }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatDelay: 2,
                  }}
                  className="bottom"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        )
      }
    </TrackVisibility>
  );
}

export default Landing;
