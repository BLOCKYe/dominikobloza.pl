import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, type: "tween", delay: 1 }}
      className="logo"
    ></motion.div>
  );
}

export default Logo;
