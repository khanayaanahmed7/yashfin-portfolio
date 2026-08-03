import "./Footer.css";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  Mail,
  ArrowUp,
} from "lucide-react";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <h2>
            Yashfin Shaikh
          </h2>

          <p className="footer-role">
            Software Testing • QA Engineer • Full Stack Developer
          </p>

          <p className="footer-text">
            Passionate about building reliable software,
            delivering quality user experiences and creating
            modern web applications.
          </p>

          <div className="footer-social">

            <a
              href="https://github.com/shaikhyashfin913-ops"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={22}/>
            </a>

            <a
              href="https://www.linkedin.com/in/yashfin-shaikh-a4b345280/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={22}/>
            </a>

            <a
              href="mailto:yashfinshaikh77@gmail.com"
            >
              <Mail size={22}/>
            </a>

          </div>

          <p className="footer-built">
            Built with React • Vite • Framer Motion
          </p>

          <p className="copyright">
            © 2026 Yashfin Shaikh. All Rights Reserved.
          </p>

        </motion.div>

      </div>

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <ArrowUp size={20}/>
      </button>

    </footer>
  );
};

export default Footer;