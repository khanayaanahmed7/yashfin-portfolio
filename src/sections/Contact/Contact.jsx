import "./Contact.css";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >

          <p className="section-tag">
            Contact
          </p>

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p className="contact-description">
            I'm currently looking for QA Internship,
            QA Engineer and Full Stack Developer opportunities.
            Feel free to connect for internships,
            freelance projects or collaborations.
          </p>

          <div className="contact-details">

            <a href="mailto:shaikhyahsfin913@gmail.com">
              <Mail size={20} />
              <span>shaikhyashfin913@gmail.com</span>
            </a>

            <a href="tel:+917028605571">
              <Phone size={20} />
              <span>+91 7028605571</span>
            </a>

            <div>
              <MapPin size={20} />
              <span>Thane, Maharashtra, India</span>
            </div>

            <a
              href="https://github.com/shaikhyashfin913-ops"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yashfin-shaikh-a4b345280/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>

          </div>

          <div className="contact-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-btn"
            >
              <Download size={18} />
              Download Resume
            </a>
                        <a
              href="mailto:shaikhyashfin913@gmail.com"
              className="secondary-btn"
            >
              <Send size={18} />
              Send Email
            </a>

          </div>

        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="availability-card">

            <div className="status-dot"></div>

            <h3>
              Available for Internships
            </h3>

            <p>
              Open to QA Internship, QA Engineer,
              Software Testing, Full Stack Development
              and Software Engineering opportunities.
            </p>

            <span>
              Usually replies within 24 hours
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;