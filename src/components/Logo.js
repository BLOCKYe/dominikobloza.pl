import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, type: "tween", delay: 1 }}
        className="logo"
      ></motion.div>
      <div className="bar">
        <div className="socials">
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ x: 5 }}
            className="link-container"
          >
            <div className="goto">Github</div>
            <span className="icon-go icon"></span>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ x: 5 }}
            className="link-container"
          >
            <div className="goto">LinkedIn</div>
            <span className="icon-go icon"></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
