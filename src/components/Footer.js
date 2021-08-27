import { motion } from "framer-motion";
import React from "react";
import TrackVisibility from "react-on-screen";

function Footer() {
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
              delay: 1,
            }}
            className="container"
          >
            <div className="t2">Github</div>
            <div className="t2">LinkedIn</div>
            <div className="t2">Dominik Obłoza 2021. Created by Me.</div>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default Footer;
