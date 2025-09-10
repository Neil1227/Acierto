import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPhp, FaLaravel, 
  FaDatabase, FaGitAlt, FaGithub, FaWordpress 
} from "react-icons/fa";
import {  SiPython } from "react-icons/si";
import styles from "@/styles/SkillsBanner.module.css";

const skills = [
  { icon: <FaHtml5 size={25} />, name: "HTML5" },
  { icon: <FaCss3Alt size={25} />, name: "CSS3" },
  { icon: <FaJs size={25} />, name: "JavaScript" },
  { icon: <FaReact size={25} />, name: "React" },
  { icon: <FaBootstrap size={25} />, name: "Bootstrap" },
  { icon: <FaPhp size={25} />, name: "PHP" },
  { icon: <FaLaravel size={25} />, name: "Laravel" },
  { icon: <FaDatabase size={25} />, name: "MySQL" },
  { icon: <FaGitAlt size={25} />, name: "Git" },
  { icon: <FaGithub size={25} />, name: "GitHub" },
  { icon: <FaWordpress size={25} />, name: "WordPress" },
  { icon: <SiPython size={25} />, name: "Python" },
];

const SkillsBanner = () => {
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className={styles.skillsBanner}>
      <div className={styles.gradientOverlay}></div>
      <div className={styles.skillsScroll}>
        {duplicatedSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className={styles.skillBadge}>
            <span className={styles.skillIcon}>{skill.icon}</span>
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBanner;
