import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Casino from "./code-tabs/Casino";

function Works() {
  const [code, setCode] = useState(true);
  const [design, setDesign] = useState(false);

  return (
    <div className="works">
      <div className="container">
        <div className="t1">Here you can see some my work</div>
        <div className="tabs-container">
          <div
            onClick={() => {
              setDesign(false);
              setCode(true);
            }}
            className={`tab-code ${code ? "active" : ""}`}
          >
            Code
          </div>
          <div
            onClick={() => {
              setDesign(true);
              setCode(false);
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
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
            >
              <Casino />
              <Casino />
              <Casino />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {design && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
              className="design-container"
            >
              <Casino />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Works;
