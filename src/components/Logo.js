import React from "react";
import { motion } from "framer-motion";

function Logo() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={toTop}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, type: "tween", delay: 1 }}
        className="logo"
      ></motion.div>
      <div className="bar"></div>
    </div>
  );
}

export default Logo;
