// src/components/Hero.jsx
import Button from "@/components/ui/Button";
import styles from "@/styles/Hero.module.css";

// Import icons
import { FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroStack}>
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1>
              Hi! I'm <span>Neil Patrick Acierto</span>
            </h1>
            <h2>Full-Stack Developer (Laravel PHP)</h2>
            <p>
             Full-stack developer focused on responsive design, modern web tech, and AI-powered user experiences.
            </p>

            {/* Social links */}
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Neil1227"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://facebook.com/DncngBlde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.indeed.com/profile/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiIndeed size={22} />
              </a>
            </div>

            {/* Buttons */}
            <div className={styles.buttons}>
              <Button variant="primary" size="md" href="#projects">
                View My Work
              </Button>
              <Button variant="outline" size="md" href="#contact">
                Get In Touch
              </Button>
            </div>
          </div>

        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <strong>1+</strong>
            <span>Years Experience</span>
          </div>
          <div className={styles.statCard}>
            <strong>8+</strong>
            <span>Projects Done</span>
          </div>
        </div>
      </div>

      {/* Bouncing Arrow */}
      <a href="#nextSection" className={styles.arrowDown}>
        <FaArrowDown size={35} />
      </a>
    </section>
  );
}
