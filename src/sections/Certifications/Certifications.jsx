import "./Certifications.css";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Communicating with Impact",
    issuer: "IBM SkillsBuild",
    date: "Oct 2023",
    image: "/certificates/communicating-with-impact.png",
    certificate: "/certificates/communicating-with-impact.pdf",
  },
  {
    id: 2,
    title: "Build Your First Web Pages with HTML & CSS",
    issuer: "OpenClassrooms • IBM SkillsBuild",
    date: "Nov 2023",
    image: "/certificates/html-css.png",
    certificate: "/certificates/html-css.pdf",
  },
  {
    id: 3,
    title: "Data Skills 3 Day Challenge",
    issuer: "Crion Versity • IIT Madras Alumni",
    date: "Aug 2024",
    image: "/certificates/data-skills.jpg",
    certificate: "/certificates/data-skills.pdf",
  },
  {
    id: 4,
    title: "Learn Python Tutorial",
    issuer: "W3Schools • IBM SkillsBuild",
    date: "Jan 2025",
    image: "/certificates/python.jpg",
    certificate: "/certificates/python.pdf",
  },
  {
    id: 5,
    title: "Cyber Job Simulation",
    issuer: "Deloitte",
    date: "Jun 2025",
    image: "/certificates/deloitte.jpg",
    certificate: "/certificates/deloitte.pdf",
  },
  {
    id: 6,
    title: "Solutions Architecture Job Simulation",
    issuer: "Amazon Web Services (AWS)",
    date: "Jun 2025",
    image: "/certificates/aws.jpg",
    certificate: "/certificates/aws.pdf",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="certifications-section"
    >
      <div className="certifications-container">

        <p className="section-tag">
          Certifications
        </p>

        <h2>
          Professional Learning Journey
        </h2>

        <p className="section-desc">
          Professional certifications that strengthened my
          knowledge in Quality Assurance, Web Development,
          Programming and Cloud Technologies.
        </p>

        <div className="certifications-grid">

          {certificates.map((item, index) => (

            <motion.div
              key={item.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="certificate-preview">

                <div className="certificate-paper">

                  <div className="paper-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="verified-badge">
                    ✓ Verified
                  </div>

                </div>

              </div>

              <div className="certificate-content">

                <h3>{item.title}</h3>

                <p className="issuer">
                  {item.issuer}
                </p>

                <span className="date">
                  {item.date}
                </span>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-btn"
                >
                  <span>
                    View Certificate
                  </span>

                  <ExternalLink size={18} />
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;