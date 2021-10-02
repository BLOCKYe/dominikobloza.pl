import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
// projects
import Mail from "./design-tabs/Mail";
import Golden from "./Sandbox-tabs/Golden";
import Weather from "./code-tabs/Weather";
import Casino from "./code-tabs/Casino";
import Stragan from "./design-tabs/Stragan";
import Watch from "./design-tabs/Watch";
import Radek from "./design-tabs/Radek";
import SmartHome from "./design-tabs/SmartHome";
import Todo from "./code-tabs/Todo";
import Earth from "./Sandbox-tabs/Earth";
import Eye from "./Sandbox-tabs/Eye";
import Untitled from "./Sandbox-tabs/Untitled";
import LineSwap from "./code-tabs/LineSwap";
import F1 from "./code-tabs/F1";

function Works() {
  const [code, setCode] = useState(true);
  const [design, setDesign] = useState(false);
  const [sandbox, setsandbox] = useState(false);
  const [isReady, setisReady] = useState(true);

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
                      if (isReady) {
                        setisReady(false);
                        setDesign(false);
                        setsandbox(false);
                        setTimeout(() => {
                          setCode(true);
                          setisReady(true);
                        }, 600);
                      }
                    }}
                    className={`tab-code ${code ? "active" : ""}`}
                  >
                    Code
                  </div>
                  <div
                    onClick={() => {
                      if (isReady) {
                        setisReady(false);
                        setsandbox(false);
                        setCode(false);
                        setTimeout(() => {
                          setDesign(true);
                          setisReady(true);
                        }, 600);
                      }
                    }}
                    className={`tab-design ${design ? "active" : ""}`}
                  >
                    Design
                  </div>
                  <div
                    onClick={() => {
                      if (isReady) {
                        setisReady(false);
                        setCode(false);
                        setDesign(false);
                        setTimeout(() => {
                          setsandbox(true);
                          setisReady(true);
                        }, 600);
                      }
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
                      <F1 />
                      <LineSwap />
                      <Todo />
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {design && (
                    <motion.div
                      className="design-container"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Design zone */}
                      <Radek />
                      <Stragan />
                      <Watch />
                      <SmartHome />
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
                      <Earth />
                      <Eye />
                      <Untitled />
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
