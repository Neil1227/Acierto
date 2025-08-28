// src/components/Hero.jsx
import Button from "./ui/Button";
import styles from "../styles/Hero.module.css";
import heroImg from "../assets/img/hero-img.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.textContent}>
        <h1>
          Hi! I’m <span>Neil Acierto</span>
        </h1>
        <h2>Web Developer & IT Support Specialist</h2>
        <p>
          BSIT graduate specializing in responsive web development with a
          growing focus on AI-powered tools and innovative digital solutions.
        </p>

        <div className={styles.buttons}>
          <Button variant="primary" size="md" href="#work">
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
    </section>
  );
}
