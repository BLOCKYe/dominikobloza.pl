import { motion } from "framer-motion";
import React from "react";
import preview from "./roulette.png";

function Casino() {
  return (
    <div className="tab">
      <div className="tab-container">
        <div className="title">
          <span>Roulette</span>
          <span className="link">@Casino-app</span>
        </div>
        <div className="date">August 2021</div>
        <div className="t2">
          Application working as a simulator, you can bet coins and win... a
          fortune. I also implemented currency converter in deposit zone.
        </div>
        <img src={preview} alt={preview} className="preview"></img>
        <div className="tags">React, Js, Sass, Figma, Motion, Router</div>
        <div className="socials">
          <motion.div
            whileHover={{ rotate: 10 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="goto">Github</div>
            <span className="icon-go icon"></span>
          </motion.div>
          <motion.div
            whileHover={{ rotate: 10 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="goto">Website</div>
            <span className="icon-go icon"></span>
          </motion.div>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
}

export default Casino;
