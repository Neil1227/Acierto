import styles from "../styles/Timeline.module.css";
import about from "../styles/About.module.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // ✅ import icons

const timeline = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovation Corp",
    period: "2022 - Present",
    description:
      "Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture that improved system performance by 40%.",
    tags: ["React", "Node.js", "AWS", "TypeScript", "Team Leadership"],
    icon: <FaBriefcase />, // ✅ icon component
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
    tags: ["JavaScript", "Python", "PostgreSQL", "Docker"],
    icon: <FaBriefcase />, // ✅ same icon for work
  },
  {
    role: "Master of Computer Science",
    company: "University of Technology",
    period: "2018 - 2020",
    description:
      "Specialized in Software Engineering and AI. Graduated with distinction. Thesis on machine learning applications in web development.",
    tags: ["Machine Learning", "Algorithms", "Software Engineering"],
    icon: <FaGraduationCap />, // ✅ graduation icon
  },
];

export default function CareerRoadmap() {
  return (
    <div className={styles["roadmap-container"]}>
      <h1 className={about.gradientText}>Career Roadmap</h1>
      <p className={styles["roadmap-subtitle"]}>
        A chronological journey through my professional experiences and
        educational achievements
      </p>

      <div className={styles.timeline}>
        {timeline.map((item, index) => (
          <div className={styles["timeline-item"]} key={index}>
            <div className={styles["timeline-icon"]}>{item.icon}</div>
            <div className={styles["timeline-content"]}>
              <div className={styles["timeline-header"]}>
                <div>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.company}>{item.company}</p>
                </div>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.description}>{item.description}</p>
              <div className={styles.tags}>
                {item.tags.map((tag, i) => (
                  <span className={styles.tag} key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
