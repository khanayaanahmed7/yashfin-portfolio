import "./Projects.css";
import { motion } from "framer-motion";

import {
  CalendarDays,
  Building2,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI based Developer-QA Integration Platform",
    duration: "Dec 2025 - Mar 2026",
    organization: "MSG-SGKM College of Arts, Science and Commerce",
    description:
      "Platform integrating AI to assist developers and QA in testing and issue detection.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Artificial Intelligence",
    ],
    image: "/projects/project1.png",
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "AI for Weather Disaster Early Alert System",
    duration: "Jul 2025 - Oct 2025",
    organization: "MSG-SGKM College of Arts, Science and Commerce",
    description:
      "AI-based application for weather analysis and early disaster warning.",
    tech: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    image: "/projects/project2.png",
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "E-Commerce Website",
    duration: "Nov 2024 - Dec 2024",
    organization: "Team Project (2 Members)",
    description:
      "Frontend-focused e-commerce website with user registration, login and email handling.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: "/projects/project3.png",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        <p className="section-tag">
          Projects
        </p>

        <h2>
          Featured Projects
        </h2>

        <p className="section-desc">
          Academic projects showcasing my experience in
          Artificial Intelligence, Quality Assurance and
          Web Development.
        </p>

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${
                index % 2 ? "reverse" : ""
              }`}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
              }}
            >

              <div className="project-image">

                <div className="browser">

                  <div className="browser-top">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

              </div>

              <div className="project-content">

                <span className="project-number">
                  0{project.id}
                </span>

                <h3>
                  {project.title}
                </h3>

                <div className="project-meta">

                  <div>

                    <CalendarDays size={17} />

                    <span>
                      {project.duration}
                    </span>

                  </div>

                  <div>

                    <Building2 size={17} />

                    <span>
                      {project.organization}
                    </span>

                  </div>

                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.tech.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

                <div className="project-buttons">
                                      <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-btn"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-btn"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;