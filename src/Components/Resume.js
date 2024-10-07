import React from "react";
import { motion } from "framer-motion";

const Resume = ({ data }) => {
  if (!data) return null;

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  };

  const { skillmessage, education, work, skills } = data;

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
      <section id="resume">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="row education"
        >
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education.map(edu => (
                    <div key={edu.school}>
                      <h3>{edu.school}</h3>
                      <p className="info">
                        {edu.degree} <span>&bull;</span>
                        <em className="date">{edu.graduated}</em>
                      </p>
                      <p>{edu.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="row work"
        >
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {work.map(job => (
                <div key={job.company}>
                  <h3>{job.company}</h3>
                  <p className="info">
                    {job.title}<span>&bull;</span> <em className="date">{job.years}</em>
                  </p>
                  <p>{job.description}</p>
                </div>
            ))}
          </div>
        </motion.div>

        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="row skill"
        >
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">
                {skills.map(skill => (
                    <li key={skill.name}>
                  <span
                      style={{
                        width: skill.level,
                        backgroundColor: getRandomColor()
                      }}
                      className={`bar-expand ${skill.name.toLowerCase()}`}
                  ></span>
                      <em>{skill.name}</em>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default Resume;