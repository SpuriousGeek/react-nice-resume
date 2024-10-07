import React from "react";
import { motion } from "framer-motion";

const About = ({ data }) => {
  if (!data) return null;

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumeDownload: resumeDownload
  } = data;

  const profilePic = `images/${image}`;

  return (
      <section id="about">
        <motion.div
            className="row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className="three columns">
            <img
                className="profile-pic"
                src={profilePic}
                alt="Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
              {bio}
            </motion.p>
            <div className="row">
              <motion.div
                  className="columns contact-details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
              >
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
              <motion.div
                  className="columns download"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p>
                  <a href={resumeDownload} className="button">
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