import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, Eye, EyeOff } from "lucide-react";
import styles from "@/styles/AdminLogin.module.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    // UI-only placeholder — replace with real auth call before production
    setTimeout(() => {
      localStorage.setItem("portfolioAdminSession", "active");
      setIsSubmitting(false);
      navigate("/admin/dashboard");
    }, 600);
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <section className={styles.loginCard}>
        <div className={styles.loginBrand}>
          <span className={styles.loginIcon}>
            <LockKeyhole size={26} />
          </span>
          <div>
            <span className={styles.eyebrow}>Portfolio Admin</span>
            <h1>Sign in to manage your site</h1>
          </div>
        </div>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <label>
            Email address
            <span className={styles.inputWithIcon}>
              <Mail size={17} />
              <input
                type="email"
                defaultValue="admin@acierto.dev"
                autoComplete="email"
                required
              />
            </span>
          </label>

          <label>
            Password
            <span className={styles.inputWithIcon}>
              <LockKeyhole size={17} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </span>
          </label>

          {error && <p className={styles.errorText}>{error}</p>}

          <button className={styles.primaryButton} type="submit" disabled={isSubmitting}>
            <LockKeyhole size={18} />
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className={styles.loginHint}>
          UI preview only. Backend authentication will replace this local session before production.
        </p>
        <a className={styles.backLink} href="/">
          Back to portfolio
        </a>
      </section>
    </main>
  );
}