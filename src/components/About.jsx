import styles from "../styles/About.module.css";

const About = () => {
const skills = [
  {
    icon: <i className="bi bi-code-slash"></i>,
    title: "Frontend Development",
    description: "React, TypeScript, Next.js, Tailwind CSS",
    color: "linear-gradient(to right, var(--primary-color), #ff4d4f)", // cherry → bright red
  },
  {
    icon: <i className="bi bi-palette-fill"></i>,
    title: "UI/UX Design",
    description: "Figma, Adobe Creative Suite, Design Systems",
    color: "linear-gradient(to right, var(--primary-color), #ff7a7c)", // cherry → soft coral
  },
  {
    icon: <i className="bi bi-server"></i>,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, APIs",
    color: "linear-gradient(to right, var(--primary-color), #b3001b)", // cherry → darker red
  },
  {
    icon: <i className="bi bi-people-fill"></i>,
    title: "Collaboration",
    description: "Agile, Git, Team Leadership, Communication",
    color: "linear-gradient(to right, var(--primary-color), #985a5aff)", // cherry → light pink tint
  },
];




  return (
    <section id="about" className={styles.section}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            About <span className={styles.gradientText}>Me</span>
          </h2>
          <p className={styles.subtitle}>
            I'm a passionate developer with experience creating digital
            solutions that combine beautiful design with robust functionality. I
            love turning complex problems into simple, elegant designs.
          </p>
        </div>

{/* Skills Cards */}
{/* Skills Cards */}
<div className={styles.grid}>
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
