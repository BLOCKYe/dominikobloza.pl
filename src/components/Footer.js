import { motion } from "framer-motion";
import React from "react";
import TrackVisibility from "react-on-screen";

function Footer() {
  const copy = "Copyright © DominikObloza 2021 <> Designed and created by Me.";

  return (
    <TrackVisibility offset={100} partialVisibility className="footer">
      {({ isVisible }) =>
        isVisible && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="container"
          >
            <motion.div
              onClick={() => window.open("https://github.com/BLOCKYe")}
              whileHover={{ x: 5 }}
              whileTap={{ rotate: 10 }}
              className="social-icon"
            >
              <div className="github"></div>
              <div className="t">Github</div>
            </motion.div>
            <motion.div
              onClick={() => window.open("https://www.linkedin.com/in/dominik-ob%C5%82oza-5aa61021b/")}
              whileHover={{ x: 5 }}
              whileTap={{ rotate: 10 }}
              className="social-icon"
            >
              <div className="linkedin"></div>
              <div className="t">LinkedIn</div>
            </motion.div>
            <div className="copyright">{copy}</div>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default Footer;
