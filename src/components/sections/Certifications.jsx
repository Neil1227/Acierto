import styles from "@/styles/Certifications.module.css";

import { FaCertificate, FaClock } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Laravel PHP Certification",
      description: "Completed Laravel PHP course covering MVC, Eloquent, and authentication.",
      image: "/img/certifications/laravel.png",
      skills: ["Laravel", "PHP", "MySQL"],
      status: "Completed",
      duration: "3 months",
      issuer: "Udemy",
      verificationUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      description: "Fundamentals of JavaScript including DOM manipulation and ES6+ features.",
      image: "/img/certifications/js.png",
      skills: ["JavaScript", "ES6", "DOM"],
      status: "Completed",
      duration: "1 month",
      issuer: "Coursera",
      verificationUrl: "#",
      featured: false,
    },
    {
      id: 3,
      title: "Front-End Web Development",
      description: "Learned HTML, CSS, and responsive design principles for modern websites.",
      image: "/img/certifications/frontend.png",
      skills: ["HTML", "CSS", "Responsive Design"],
      status: "Completed",
      duration: "2 months",
      issuer: "FreeCodeCamp",
      verificationUrl: "#",
      featured: true,
    },
    // add more certifications as needed
  ];

  return (
    <div id="certifications" className={styles.certificationsPage}>
      <div className={styles.title}>
        <h1 className="mb-3 gradientText" style={{ textAlign: "center" }}>
          My Certifications
        </h1>
      </div>

      <div className={styles.certificationsGrid}>
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className={`${styles.certCard} ${cert.featured ? styles.featured : ""}`}
          >
            <div className={styles.certImageContainer}>
              <img
                src={cert.image}
                alt={cert.title}
                className={styles.certImage}
              />
            </div>

            <div className={styles.certContent}>
              <div className={styles.certHeader}>
                <h2 className={styles.certTitle}>{cert.title}</h2>
                <span
                  className={`${styles.statusBadge} ${
                    cert.status === "Completed" ? styles.statusCompleted : styles.statusProgress
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <p className={styles.certDescription}>{cert.description}</p>

              <div className={styles.certSkills}>
                {cert.skills.map((skill, index) => (
                  <span key={index} className={styles.tag}>
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
                  className={`${styles.btn} ${styles.verificationBtn}`}
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
