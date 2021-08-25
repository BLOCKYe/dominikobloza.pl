import { motion } from "framer-motion";
import React, { useState } from "react";
import ModalPreview from "../ModalPreview";
import preview from "./roulette.png";

function Casino() {
  const [modal, setModal] = useState(false);
  const [data] = useState({
    name: "Roulette",
    link: "Casino-app",
    date: "August 2021",
    desc: "Application working as a simulator, you can bet coins and win... afortune. I also implemented currency converter in deposit zone.",
    tags: "React, Js, Sass, Figma, Motion, Router",
  });

  return (
    <div className="tab">
      <div className="tab-container">
        <div className="title">
          <span>{data.name}</span>
          <span className="link">@{data.link}</span>
        </div>
        <div className="date">{data.date}</div>
        <div className="t2">{data.desc}</div>
        <img
          onClick={() => setModal(true)}
          src={preview}
          alt={preview}
          className="preview"
        ></img>
        <div className="tags">{data.tags}</div>
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

      {modal && <ModalPreview data={data} img={preview} setModal={setModal} />}
    </div>
  );
}

export default Casino;
