import { motion } from "framer-motion";
import React from "react";
import TrackVisibility from "react-on-screen";

function Footer() {
  const copy = "Copyright © DominikObloza 2021 <> Designed and created by Me.";

  return (
    <TrackVisibility offset={300} partialVisibility className="footer">
      {({ isVisible }) =>
        isVisible && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: .5,
            }}
            className="container"
          >
            <div className="social-icon">
              <div className="github"></div>
              <div className="t">Github</div>
            </div>
            <div className="social-icon">
              <div className="linkedin"></div>
              <div className="t">LinkedIn</div>
            </div>
            <div className="copyright ">{copy}</div>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default Footer;
