import { motion } from "framer-motion";
import React, { useState } from "react";
import ModalPreview from "../ModalPreview";
import preview1 from "./img/radek1.png";
import preview2 from "./img/radek2.png";

function Radek() {
  const [modal, setModal] = useState(false);
  const [thumb, setthumb] = useState(0);
  const [data] = useState({
    name: "Portfolio",
    link: "RadekKisiel.pl",
    date: "1 year ago",
    desc: "Portfolio design for a friend.",
    tags: "UI, UX, Adobe Xd, Portoflio",
    socials: true,
    website: "https://radekkisiel.pl/",
    github: "https://github.com/Radekk0002",
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
          {data.socials && (
            <div className="socials">
              <motion.div
                onClick={() => window.open(data.github)}
                whileHover={{ x: 5 }}
                whileTap={{ rotate: 10 }}
                className="link-container"
              >
                <div className="goto">Github</div>
                <span className="icon-go icon"></span>
              </motion.div>
              <motion.div
                onClick={() => window.open(data.website)}
                whileHover={{ x: 5 }}
                whileTap={{ rotate: 10 }}
                className="link-container"
              >
                <div className="goto">Website</div>
                <span className="icon-go icon"></span>
              </motion.div>
            </div>
          )}
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

export default Radek;
