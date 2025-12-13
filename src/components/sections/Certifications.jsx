import styles from "@/styles/Certifications.module.css";
import proj from "@/styles/Projects.module.css";
import { FaCertificate, FaClock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const techClassMap = {
  "PHP": proj.tagPHP,
  "Laravel": proj.tagLaravelPHP,
  "MySQL": proj.tagMySQL,
  "HTML": proj.tagHTML,
  "CSS": proj.tagCSS,
  "JavaScript": proj.tagJavaScript,
  "React JS": proj.tagReact,
};

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Laravel PHP Certification",
      description: "Laravel fundamentas & beyond: Laravel Developer's Core Skills",
      skills: ["Laravel", "PHP", "MySQL"],
      status: "Completed",
      duration: "12 hours",
      issuer: "Ground Gurus",
      verificationUrl: "https://groundgurus.net/certificate/dkb/",
      featured: true,
    },
    {
      id: 1,
      title: "React JS Certification",
      description: "Build Modern Web Application with Laravel and React",
      skills: ["React JS","Laravel", "PHP", "MySQL"],
      status: "Completed",
      duration: "12 hours",
      issuer: "Ground Gurus",
      verificationUrl: "https://groundgurus.net/certificate/iy3/",
      featured: true,
    },
    // add more certifications as needed
  ];

  return (
    <div id="certifications" className={styles.certificationsPage}>
      <div className={proj.title}>
        <h1 className="mb-5 gradientText mx-auto" style={{ textAlign: "center" }}>
          My Certifications
        </h1>
      </div>

      <div className={styles.certificationsGrid}>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`${styles.certCard} ${cert.featured ? styles.featured : ""}`}
          >

            <div className={styles.certContent}>
              <div className={styles.certHeader}>
                <h2 className={styles.certTitle}>{cert.title}</h2>
                <span
                  className={`${proj.statusBadge} ${
                    cert.status === "Completed" ? proj.statusCompleted : proj.statusProgress
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <p className={styles.certDescription}>{cert.description}</p>

              <div className={styles.certSkills}>
                {cert.skills.map((skill, index) => (
              <span
                key={index}
                className={`${proj.tag} ${techClassMap[skill] || ""}`}
              >
                {skill}
              </span>

                ))}
              </div>

              <div className={styles.certMeta}>
                <span className="flex items-center gap-1">
                  <FaClock /> {cert.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaCertificate /> {cert.issuer}
                </span>
              </div>

              <div className={styles.certLinks}>
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${proj.btn} ${proj.demoBtn}`}
                >
                  <FiExternalLink style={{ marginRight: "0.5rem" }} />
                  Verify
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
