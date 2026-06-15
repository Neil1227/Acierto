import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";
import heroImg from "@/assets/img/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("nextSection"); // target section
    if (section) {
      const rect = section.getBoundingClientRect();
      // when section top reaches the top of viewport
      setScrolled(rect.top <= 0);
    }
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
          <a href="#nextSection">About</a>
        </div>
        <div className={styles.menuItem}>
          <a href="#career">Career</a>
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
