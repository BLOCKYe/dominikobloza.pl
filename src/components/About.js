import { motion } from "framer-motion";
import React from "react";
import TrackVisibility from "react-on-screen";

function About() {
  return (
    <TrackVisibility partialVisibility className="about">
      {({ isVisible }) =>
        isVisible && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="container"
          >
            <div className="t1 m0">Yo, I’m Dominik.</div>
            <div className="t2 me">
              My journey as a designer began 5 years ago, but now I am
              progressing as a frontend developer. What sets me apart is my
              ambition, hard work and fresh approach.
            </div>

            <div className="about-columns">
              <div className="col">
                <div className="t1">Specialties.</div>
                <div className="list">
                  <div className="p t2">
                    <span className="icon-list"></span>
                    JavaScript (ES6+)
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Sass
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    React
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    CSS
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    HTML
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Bootstrap
                  </div>
                </div>

                <div className="t2">
                  I also had to deal with C++, Python and C#.
                </div>
              </div>

              <div className="col">
                <div className="t1">Tools.</div>
                <div className="list">
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Visual Studio Code
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Github
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Figma
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Git
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Photoshop
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Adobe Xd
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    Illustrator
                  </div>
                  <div className="p t2">
                    <span className="icon-list"></span>
                    After Effects
                  </div>
                </div>
              </div>
            </div>
            <div className="t2 m80">My works</div>

            <div className="line">
              <div className="top"></div>
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: -120 }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 2 }}
                className="bottom"
              ></motion.div>
            </div>
          </motion.div>
        )
      }
    </TrackVisibility>
  );
}

export default About;
