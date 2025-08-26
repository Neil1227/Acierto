// src/components/Button.tsx
import React from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  children,
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${styles.btn} ${styles[variant]} ${styles[size]}`}>
      {children}
    </button>
  );
};

export default Button;
