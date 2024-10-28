import React from "react";
import { motion } from "framer-motion";

const Footer = ({ data }) => {
  if (!data) return null;

  const networks = data.social.map((network) => (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
  ));

  return (
      <footer>
        <div className="row">
          <motion.div
              className="twelve columns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
          >
            <ul className="social-links">{networks}</ul>
            <ul className="copyright">
              <li>&copy; Copyright {new Date().getFullYear()} Alphamind</li>
              <li>
                Design by{" "}
                <a title="Alphamind" href="http://www.alphamind.tech/">
                  Alphamind
                </a>
              </li>
            </ul>
          </motion.div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;