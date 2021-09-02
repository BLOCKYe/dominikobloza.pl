import { motion } from "framer-motion";
import React, { useState } from "react";
import ModalPreview from "../ModalPreview";
import preview1 from "./img/roulette2.png";
import preview2 from "./img/roulette.png";

function Casino() {
  const [modal, setModal] = useState(false);
  const [thumb, setthumb] = useState(0);
  const [data] = useState({
    name: "Roulette",
    link: "Casino-app",
    date: "August 2021",
    desc: "The app works like a simulator, you can bet coins and win a fortune. I also implemented currency converter in deposit zone.",
    tags: "React, Js, Sass, Figma, Motion",
    socials: true,
  });

  const pickJpg = () => {
    switch (thumb) {
      case 0:
        return preview1;
      case 1:
        return preview2;
      default:
        return preview1;
    }
  };

  return (
    <div className="tab">
      <div className="tab-container">
        <div className="p1">
          <div className="title">
            <span>{data.name}</span>
            <span className="link">{data.link}</span>
          </div>
          <div className="date">{data.date}</div>
          <div className="t2">{data.desc}</div>
        </div>
        <div className="p2">
          <img
            onClick={() => setModal(true)}
            src={pickJpg()}
            alt={pickJpg()}
            className="preview"
          ></img>

          <div className="previews">
            <img
              onClick={() => setthumb(0)}
              src={preview1}
              alt={preview1}
              className={`thumb-left ${thumb === 0 ? "active" : ""}`}
            ></img>
            <img
              onClick={() => setthumb(1)}
              src={preview2}
              alt={preview2}
              className={`thumb-right ${thumb === 1 ? "active" : ""}`}
            ></img>
          </div>
        </div>
        <div className="p3">
          <div className="tags">{data.tags}</div>

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
        </div>
        <div className="divider"></div>
      </div>

      {modal && (
        <ModalPreview
          data={data}
          img={pickJpg()}
          preview1={preview1}
          preview2={preview2}
          setModal={setModal}
          setthumb={setthumb}
          thumb={thumb}
        />
      )}
    </div>
  );
}

export default Casino;
