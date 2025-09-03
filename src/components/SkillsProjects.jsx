// src/components/SkillsProjects.jsx
import styles from "../styles/SkillsProjects.module.css";
import about from "../styles/About.module.css";
import { FaArrowRight } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiPython } from "react-icons/si"; // ✅ added Python

const skills = [
  { icon: <FaHtml5 size={40} color="#E34F26" />, name: "HTML5" },
  { icon: <FaCss3Alt size={40} color="#1572B6" />, name: "CSS3" },
  { icon: <FaJs size={40} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <FaReact size={40} color="#61DAFB" />, name: "React" },
  { icon: <FaBootstrap size={40} color="#7952B3" />, name: "Bootstrap" },
  { icon: <FaPhp size={40} color="#777BB4" />, name: "PHP" },
  { icon: <FaLaravel size={40} color="#FF2D20" />, name: "Laravel" },
  { icon: <FaDatabase size={40} color="#00618A" />, name: "MySQL" },
  { icon: <FaGitAlt size={40} color="#F05032" />, name: "Git" },
  { icon: <FaGithub size={40} color="#333" />, name: "GitHub" },
  { icon: <FaWordpress size={40} color="#21759B" />, name: "WordPress" },
  { icon: <SiPython size={40} color="#3776AB" />, name: "Python" }, // ✅ new skill
];


const projects = [
  {
    img: "/img/projects/kmu-final.png",
    title: "Knowledge Management Unit Website",
    tech: ["Laravel", "MySQL"],
    link: "https://your-kmu-website.com",
  },
  {
    img: "/img/projects/admin-kmu.png",
    title: "Knowledge Management Unit Admin",
    tech: ["Laravel", "MySQL"],
    link: "https://your-kmu-admin.com",
  },
  {
    img: "/img/projects/acv.png",
    title: "Angeles City Vet Adoption System",
    tech: ["PHP","MySQL"],
    link: "https://acv.free.nf",
  },
  {
    img: "/img/projects/acv-admin.png",
    title: "Angeles City Vet Adoption System Admin",
    tech: ["PHP","MySQL"],
    link: "https://acv.free.nf/adminLogin.php",
  },
  {
    img: "/img/projects/intern.png",
    title: "Internship Portfolio",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://neil1227.github.io/IT-Internship/",
  },
];


const SkillsProjects = () => {
  return (
    <section id="skills-projects" className={styles.section}>
      <div className="max-w-6xl mx-auto">
        <div className={styles.columns}>
          {/* Skills */}
          <div className={styles.skills}>
            <h2 className={about.gradientText}>My Skill Set</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skill}>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        <div className={styles.projects}>
          <h2 className={about.gradientText}>My Projects</h2>
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
              <img 
                src={project.img} 
                alt={project.title} 
                style={{ width: "350px", height: "auto", objectFit: "fill", borderRadius: "8px" }} 
              />

                
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <div className={styles.badges}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.badge}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.demoButton}
                >
                  View <FaArrowRight style={{ marginLeft: "0.5rem" }} />
                </a>

              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsProjects;
