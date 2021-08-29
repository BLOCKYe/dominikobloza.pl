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
        <span className="t2">X</span>
      </div>

      <div className="modal-container">
        <div className="t1">{props.data.name}</div>
        <div className="t2">{props.data.desc}</div>
        <div className="socials">
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="goto">Github</div>
            <span className="icon-go icon"></span>
          </motion.div>
          <motion.div
            whileHover={{ x: 5 }}
            whileTap={{ rotate: 10 }}
            className="link-container"
          >
            <div className="goto">Website</div>
            <span className="icon-go icon"></span>
          </motion.div>
        </div>

        <img src={props.img} alt={props.img} className="preview"></img>

        <div className="previews">
          <img
            onClick={() => props.setthumb(0)}
            src={props.preview1}
            alt={props.preview1}
            className={`thumb-left ${props.thumb === 0 ? "active" : ""}`}
          ></img>
          <img
            onClick={() => props.setthumb(1)}
            src={props.preview2}
            alt={props.preview2}
            className={`thumb-right ${props.thumb === 1 ? "active" : ""}`}
          ></img>
        </div>
      </div>

      <div onClick={() => props.setModal(false)} className="hollow"></div>
    </motion.div>
  );
}

export default ModalPreview;
