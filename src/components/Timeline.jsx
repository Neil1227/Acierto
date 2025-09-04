import styles from "../styles/Timeline.module.css";
import about from "../styles/About.module.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"; // ✅ import icons

const timeline = [
  {
    role: "Website Developer",
    company: "Pampanga State Agricultural University",
    period: "06/2025 - Present",
    description:
      "Developing web applications using React JS and Laravel PHP. Optimizing front-end and back-end components for better performance and maintainability.",
    tags: ["React JS", "Laravel PHP"],
    icon: <FaBriefcase />,
  },
  {
    role: "Hardware Technical Support",
    company: "Superl Philippines",
    period: "01/2025 - 06/2025",
    description:
      "Handled Level 1 Networking support while using my free time to study and practice Laravel PHP, building small projects to improve my web development skills.",
    tags: ["Level 1 Networking", "Laravel PHP", "Technical Support", "Communications"],
    icon: <FaBriefcase />,
  },

  {
    role: "Bachelors Degree",
    company: "Pampanga State Agricultural University",
    period: "2020 - 2024",
    description:
      "Studied Computers, Networking, and Web Development. Gained hands-on experience in building applications and understanding networking protocols.",
    tags: ["Computers", "Networking", "Web Development"],
    icon: <FaGraduationCap />,
  },
  {
    role: "Service Crew Student",
    company: "McDonald's Magalang, Pampanga",
    period: "2021 - 2025",
    description:
      "Developed strong communication, teamwork, and customer service skills while balancing work and studies.",
    tags: ["Communications", "Team Work", "Costumer Service"],
    icon: <FaBriefcase />,
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
