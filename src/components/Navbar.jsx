import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <h2>
          <strong>ACIERTO.</strong>
        </h2>
      </div>

      {/* Hamburger Icon */}
      <button
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.menuItem}>
          <a href="#home">Home</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#about">About</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#education">Education</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#experiences">Experiences</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#projects">Projects</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
