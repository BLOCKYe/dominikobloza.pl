import { motion } from "framer-motion";
import React from "react";

function ModalPreview(props) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
      className="modal"
    >
      <div className="close-btn" onClick={() => props.setModal(false)}>
        <span className="t1">back to portfolio</span>
        <span className="icon-go icon"></span>
      </div>

      <div className="modal-container">
        <div className="t1">{props.data.name}</div>
        <img src={props.img} alt={props.img} className="preview"></img>

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

        <div className="t2">{props.data.desc}</div>
      </div>

      <div onClick={() => props.setModal(false)} className="hollow"></div>
    </motion.div>
  );
}

export default ModalPreview;
