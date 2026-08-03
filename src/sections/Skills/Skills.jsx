import "./Skills.css";

import {
  Bug,
  Code2,
  Laptop,
  GitBranch,
  Monitor,
  Users,
} from "lucide-react";

const qaSkills = [
  "Manual Testing",
  "SDLC",
  "STLC",
  "Test Case Design",
  "Bug Reporting",
  "SQL (Basic)",
];

const programmingSkills = [
  "Python (Basic)",
  "JavaScript",
  "HTML5",
  "CSS3",
];

const webDevelopmentSkills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Firebase",
];

const versionControlSkills = [
  "Git",
  "GitHub",
];

const computerSkills = [
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "Windows",
  "Internet & Email",
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Attention to Detail",
  "Communication",
  "Teamwork",
];

const SkillCard = ({ Icon, title, skills }) => {
  return (
    <div className="skill-card">
      <div className="skill-header">
        <div className="skill-icon">
          <Icon size={22} strokeWidth={2.2} />
        </div>

        <h3>{title}</h3>
      </div>

      <div className="skill-list">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <p className="section-tag">
          Skills
        </p>

        <h2>
          Technical Expertise
        </h2>

        <p className="section-desc">
          My technical foundation combines Quality Assurance,
          Programming and Web Development, enabling me to build,
          test and deliver reliable software applications.
        </p>

        <div className="skills-grid">

          <SkillCard
            Icon={Bug}
            title="Quality Assurance"
            skills={qaSkills}
          />

          <SkillCard
            Icon={Code2}
            title="Programming"
            skills={programmingSkills}
          />

          <SkillCard
            Icon={Laptop}
            title="Web Development"
            skills={webDevelopmentSkills}
          />

          <SkillCard
            Icon={GitBranch}
            title="Version Control"
            skills={versionControlSkills}
          />

          <SkillCard
            Icon={Monitor}
            title="Computer Skills"
            skills={computerSkills}
          />

          <SkillCard
            Icon={Users}
            title="Soft Skills"
            skills={softSkills}
          />

        </div>

      </div>
    </section>
  );
};

export default Skills;