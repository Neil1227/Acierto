import { Facebook, Instagram, Send } from "react-bootstrap-icons";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}
        <div className={styles.brand}>
          <h2 className={styles.logo}> <strong>ACIERTO.</strong></h2>
          <p className={styles.tagline}>
            Building a better web experience together.
          </p>
        </div>

        {/* Social Icons */}
        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="Telegram">
            <Send />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Neil Acierto. All rights reserved.</p>
      </div>
    </footer>
  );
}
