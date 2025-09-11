// src/components/Hero.jsx
import Button from "@/components/ui/Button";
import styles from "@/styles/Hero.module.css";
import heroImg from "@/assets/img/neil.webp";


// Import icons
import { FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home"className={styles.hero}>

      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1>
            Hi! I’m <span>Neil Acierto</span>
          </h1>
          <h2>Full-Stack Developer</h2>
          <p>
            BSIT graduate specializing in responsive web development with a
            growing focus on AI-powered tools and innovative digital solutions.
          </p>

          {/* Social links */}
          <div
            className={styles.socialLinks}
            style={{ marginBottom: "20px", display: "flex", gap: "15px" }}
          >
            <a
              href="https://github.com/Neil1227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://facebook.com/DncngBlde"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.indeed.com/profile/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiIndeed size={30} />
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

        <div className={styles.imageWrapper}>
          <img src={heroImg} alt="Neil Acierto" />
        </div>
      </div>

      {/* Bouncing Arrow */}
      <a href="#nextSection" className={styles.arrowDown}>
        <FaArrowDown size={35} />
      </a>
    </section>
  );
}
