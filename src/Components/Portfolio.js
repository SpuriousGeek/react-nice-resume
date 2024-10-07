import React from "react";
import Zmage from "react-zmage";
import { motion } from "framer-motion";

const Portfolio = ({ data }) => {
  if (!data) return null;

  const projects = data.projects.map((project, index) => {
    let projectImage = "images/portfolio/" + project.image;
    return (
        <motion.div
            key={index}
            className="columns portfolio-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="item-wrap">
            <Zmage alt={project.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </motion.div>
    );
  });

  return (
      <section id="portfolio">
        <motion.div
            className="row"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default Portfolio;