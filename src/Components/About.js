import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible")
          .catch(error => {
            console.error("Animation failed to start:", error);
          });
    }
  }, [controls, inView]);

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumeDownload
  } = data;

  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const profilePic = `images/${image}`;

  return (
      <section id="about">
        <motion.div
            className="row"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
        >
          <div className="three columns">
            <motion.img
                className="profile-pic"
                src={profilePic}
                alt="Profile Pic"
                variants={itemVariants}
            />
          </div>
          <div className="nine columns main-col">
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            <motion.p variants={itemVariants}>{bio}</motion.p>
            <div className="row">
              <motion.div className="columns contact-details" variants={itemVariants}>
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                  {street}
                    <br />
                    {city} {state}, {zip}
                </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </motion.div>
              <motion.div className="columns" variants={itemVariants}>
                <p>
                  <a href={resumeDownload} className="button" download={resumeDownload}>
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
  );
};

export default About;