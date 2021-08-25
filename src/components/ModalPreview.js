import { motion } from "framer-motion";
import React from "react";

function ModalPreview(props) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
      className="modal"
    >
      <div className="modal-container">
        <div className="t1">
          {props.data.name} {props.data.link}
        </div>
        <img src={props.img} alt={props.img} className="preview"></img>
        <div className="close-btn" onClick={() => props.setModal(false)}>
          close
        </div>
      </div>

      <div onClick={() => props.setModal(false)} className="hollow"></div>
    </motion.div>
  );
}

export default ModalPreview;
