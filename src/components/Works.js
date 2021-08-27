import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Casino from "./code-tabs/Casino";
import TrackVisibility from "react-on-screen";

function Works() {
  const [code, setCode] = useState(true);
  const [design, setDesign] = useState(false);

  return (
    <TrackVisibility partialVisibility className="works">
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
            <div className="t1">Here you can see some my work</div>
            <div className="tabs-container">
              <div
                onClick={() => {
                  setDesign(false);
                  setTimeout(() => {
                    setCode(true);
                  }, 300);
                }}
                className={`tab-code ${code ? "active" : ""}`}
              >
                Code
              </div>
              <div
                onClick={() => {
                  setCode(false);
                  setTimeout(() => {
                    setDesign(true);
                  }, 300);
                }}
                className={`tab-design ${design ? "active" : ""}`}
              >
                Design
              </div>
            </div>
            <AnimatePresence>
              {code && (
                <motion.div
                  className="code-container"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Casino />
                  <Casino />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {design && (
                <motion.div
                  className="design-container"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Casino />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default Works;
