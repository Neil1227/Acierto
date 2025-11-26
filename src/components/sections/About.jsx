import styles from "@/styles/About.module.css";
import { FaCode, FaPaintBrush, FaServer, FaUsers } from "react-icons/fa";

const About = () => {
const skills = [
  {
    icon: <FaCode size={30} />, // simple React icon
    title: "Frontend Development",
    description: "React JS, HTML, CSS, JS",
    color: "#9a0002", // primary color
  },
  {
    icon: <FaPaintBrush size={30} />,
    title: "UI/UX Design",
    description: "Word Press, Bootstrap, Design Systems",
    color: "#9a0002",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    description: "Java, Python, PHP, Laravel PHP, MySQL",
    color: "#9a0002",
  },
  {
    icon: <FaUsers size={30} />,
    title: "Collaboration",
    description: "Agile, Git, Team Player, Communication",
    color: "#9a0002",
  },
];

  return (
    
    <section id="nextSection" className={styles.section}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={styles.header}>
            <h1 className="gradientText">About Me</h1>
          <p className={styles.subtitle}>
            I'm a passionate developer with experience creating digital
            solutions that combine beautiful design with robust functionality. I
            love turning complex problems into simple, elegant designs.
          </p>
        </div>

        {/* Skills Cards */}
        <div className={`${styles.grid} mb-5`}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.card}>
              {/* Glow Effect */}
              <div
                className={styles.cardGlow}
                style={{ background: skill.color }}
              ></div>

              {/* Content */}
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  {skill.icon}
                </div>

                <h3 className={styles.cardTitle}>{skill.title}</h3>
                <p className={styles.cardDesc}>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
