import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: ""
  });

  if (!data) return null;

  const { name, address: { street, city, state, zip }, phone, contactMessage } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
      <section id="contact">
        <motion.div
            className="row section-head"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">{contactMessage}</p>
          </div>
        </motion.div>

        <div className="row">
          <motion.div
              className="eight columns"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input
                      type="text"
                      size="35"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input
                      type="email"
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                      type="text"
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={formData.contactSubject}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={formData.contactMessage}
                      onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning">Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </motion.div>

          <motion.aside
              className="four columns footer-widgets"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="widget widget_contact">
              <h4 className="addressHeading">Address and Phone</h4>
              <p className="address">
                {name}<br />
                {street} <br />
                {city}, {state} {zip}<br />
                <span>{phone}</span>
              </p>
            </div>
            {/*<div className="widget widget_tweets">*/}
            {/*  <h4 className="widget-title">Latest Tweets</h4>*/}
            {/*  <ul id="twitter">*/}
            {/*    <li>*/}
            {/*    <span>*/}
            {/*      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum*/}
            {/*      <a href="./">http://t.co/CGIrdxIlI3</a>*/}
            {/*    </span>*/}
            {/*      <b><a href="./">2 Days Ago</a></b>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*    <span>*/}
            {/*      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi*/}
            {/*      <a href="./">http://t.co/CGIrdxIlI3</a>*/}
            {/*    </span>*/}
            {/*      <b><a href="./">3 Days Ago</a></b>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </motion.aside>
        </div>
      </section>
  );
};

export default Contact;