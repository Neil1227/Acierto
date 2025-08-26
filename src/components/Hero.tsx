import Button from "./Button";
import styles from "../styles/NewHero.module.css";
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
          I build beautiful, responsive, and modern websites with clean code and
          scalable architecture.
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
