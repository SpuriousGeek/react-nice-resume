import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ data }) => {
  if (!data) return null;

  const testimonials = data.testimonials.map((testimonial, index) => (
      <motion.li
          key={testimonial.user}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <blockquote>
          <p>{testimonial.text}</p>
          {testimonial.user}
        </blockquote>
      </motion.li>
  ));

  return (
      <section id="testimonials">
        <div className="text-container">
          <motion.div
              className="row"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default Testimonials;