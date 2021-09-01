import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, type: "tween", delay: 1 }}
    >
      <div className="logo"></div>
      <div className="bar">
        <div className="socials">
          <motion.div
            onClick={() => window.open("https://github.com/BLOCKYe")}
            whileHover={{ x: 5 }}
            whileTap={{ x: 5 }}
            className="link-container"
          >
            <div className="goto">Github</div>
            <span className="icon-go icon"></span>
          </motion.div>
          <motion.div
            onClick={() => window.open("https://www.linkedin.com/in/dominik-ob%C5%82oza-5aa61021b/")}
            whileHover={{ x: 5 }}
            whileTap={{ x: 5 }}
            className="link-container"
          >
            <div className="goto">LinkedIn</div>
            <span className="icon-go icon"></span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Logo;
