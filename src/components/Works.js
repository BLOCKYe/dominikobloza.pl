import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Casino from "./code-tabs/Casino";
import TrackVisibility from "react-on-screen";
import Mail from "./design-tabs/Mail";
import Golden from "./Sandbox-tabs/Golden";
import Weather from "./code-tabs/Weather";

function Works() {
  const [code, setCode] = useState(true);
  const [design, setDesign] = useState(false);
  const [sandbox, setsandbox] = useState(false);

  return (
    <TrackVisibility offset={-100} partialVisibility className="works">
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
            <div className="t1">Some my work.</div>
            <div className="columns">
              <div className="left">
                <div className="tabs-container">
                  <div
                    onClick={() => {
                      setDesign(false);
                      setsandbox(false);
                      setTimeout(() => {
                        setCode(true);
                      }, 501);
                    }}
                    className={`tab-code ${code ? "active" : ""}`}
                  >
                    Code
                  </div>
                  <div
                    onClick={() => {
                      setCode(false);
                      setsandbox(false);
                      setTimeout(() => {
                        setDesign(true);
                      }, 501);
                    }}
                    className={`tab-design ${design ? "active" : ""}`}
                  >
                    Design
                  </div>
                  <div
                    onClick={() => {
                      setDesign(false);
                      setCode(false);
                      setTimeout(() => {
                        setsandbox(true);
                      }, 501);
                    }}
                    className={`tab-sandbox ${sandbox ? "active" : ""}`}
                  >
                    Sandbox
                  </div>
                </div>
              </div>
              <div className="right">
                <AnimatePresence>
                  {code && (
                    <motion.div
                      className="code-container"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                      {/* Code zone */}
                      <Weather />
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
                      transition={{ duration: 0.3 }}
                    >

                       {/* Code design */}
                      <Mail />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {sandbox && (
                    <motion.div
                      className="sandbox-container"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                       {/* Sandbox zone */}
                      <Golden />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default Works;
