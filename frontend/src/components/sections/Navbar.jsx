import { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import { FaHome, FaUserAlt, FaBriefcase, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: <FaHome /> },
    { href: "#nextSection", label: "About", icon: <FaUserAlt /> },
    { href: "#career", label: "Career", icon: <FaBriefcase /> },
    { href: "#projects", label: "Projects", icon: <FaProjectDiagram /> },
    { href: "#contact", label: "Contact", icon: <FaEnvelope /> },
  ];

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

      <div className={styles.menu}>
        {navLinks.map((link) => (
          <div className={styles.menuItem} key={link.href}>
            <a href={link.href}>
              <span className={styles.desktopNavIcon}>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          </div>
        ))}
      </div>

      <div className={styles.mobileNav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.mobileNavItem}>
            <span className={styles.navIcon}>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
