import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  const [ formData, setFormData ] = useState({
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: ""
  });

  const [ submitStatus, setSubmitStatus ] = useState({
    submitting: false,
    success: false,
    error: null // Can be null or a string
  });

  if (!data) return null;

  const { name, address: { street, city, state, zip }, phone, contactMessage } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [ name ]: value }));
  };

  // TODO Determine why the spinner is not showing when the form is submitted & update the styling to display the error messages nicer than just a black div with red text
  const handleSubmit = async (e) => {
    console.log("Handling submit...");

    e.preventDefault();

    // Validate form data
    if (!formData.contactName || !formData.contactEmail || !formData.contactMessage) {
      console.log("Validation failed");
      setSubmitStatus({
        submitting: false,
        success: false,
        error: "Please fill in all required fields."
      });

      return;
    }

    console.log("Starting submission...");
    // Set submitting state - this will show the loader
    setSubmitStatus({
      submitting: true,
      success: false,
      error: null
    });

    // Prepare payload according to Rust API's EmailRequest structure
    const payload = {
      from_email: formData.contactEmail,
      to_email: "your-email@example.com", // Replace with your destination email
      subject: formData.contactSubject || `Contact form message from ${formData.contactName}`,
      body: `Name: ${formData.contactName}\n\n${formData.contactMessage}`,
      reply_to: formData.contactEmail,
      cc: null,
      bcc: null
    };

    try {
      // Make API request
      console.log("Sending request to API...");

      // TODO Update this to use a valid API endpoint (the Rust API endpoint that I have configured)
      const response = await fetch("https://your-rust-api-endpoint.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.log("API response not OK:", response.status);
        const errorData = await response.json();
        setSubmitStatus({
          submitting: false,
          success: false,
          error: errorData.message || `Failed to send message (Status: ${response.status})`
        });
        return;
      }

      console.log("Message sent successfully!");
      // Handle success
      setSubmitStatus({
        submitting: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        contactName: "",
        contactEmail: "",
        contactSubject: "",
        contactMessage: ""
      });

    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
      setSubmitStatus({
        submitting: false,
        success: false,
        error: error.message || "An unexpected error occurred"
      });
    }
  };

  // Add helper for conditional display based on submit status
  const displayMessageWarning = () => {
    if (submitStatus.error) {
      return { display: "block" };
    }
    return { display: "none" };
  };

  const displayMessageSuccess = () => {
    if (submitStatus.success) {
      return { display: "block" };
    }
    return { display: "none" };
  };

  const displayLoader = () => {
    if (submitStatus.submitting) {
      return { display: "inline-block" };
    }
    return { display: "none" };
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
                <button className="submit" disabled={submitStatus.submitting}>
                  {submitStatus.submitting ? "Sending..." : "Submit"}
                </button>
                <span id="image-loader" style={{
                  ...displayLoader(),
                  transition: "opacity 0.3s ease-in-out",
                  opacity: submitStatus.submitting ? 1 : 0
                }}>
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning" style={{
            ...displayMessageWarning(),
            transition: "opacity 0.4s ease-in-out",
            opacity: submitStatus.error ? 1 : 0
          }}>
            {submitStatus.error || "Error"}
          </div>
          <div id="message-success" style={{
            ...displayMessageSuccess(),
            transition: "opacity 0.4s ease-in-out",
            opacity: submitStatus.success ? 1 : 0
          }}>
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