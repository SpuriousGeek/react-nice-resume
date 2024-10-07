import React from "react";
import ParticlesBg from "particles-bg";
import { motion } from "framer-motion";

const Header = ({ data }) => {
  if (!data) return null;

  const { project, github, name, description, subTitle } = data;

  return (
      <header id="home">
        {/*<ParticlesBg type="color" bg={true} />*/}
        <ParticlesBg color="#708090" num={200} type="cobweb" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <motion.h1
                className="responsive-headline"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
              {name}
            </motion.h1>
            <motion.h2
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.2}}
            >
              {subTitle}
            </motion.h2>
            <motion.h3
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.2}}
            >
              {description}
            </motion.h3>
            <hr/>
            <motion.ul
                className="social"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.4}}
            >
              <a href={project} className="button btn project-btn">
                <i className="fa fa-book"></i>Project
              </a>
              <a href={github} className="button btn github-btn">
                <i className="fa fa-github"></i>Github
              </a>
            </motion.ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
  );
};

export default Header;