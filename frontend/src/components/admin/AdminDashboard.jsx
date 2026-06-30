import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  FileUp,
  FolderKanban,
  ImagePlus,
  LockKeyhole,
  LogOut,
  Mail,
  Pencil,
  Phone,
  Plus,
  Save,
  Search,
  Settings,
  Trash2,
  Upload,
  UserRound,
} from "lucide-react";
import styles from "@/styles/AdminDashboard.module.css";

const projects = [
  { title: "RIET Website", status: "Deployment", duration: "1 year", stack: "Laravel PHP, MySQL, Bootstrap" },
  { title: "Angeles City Vet Adoption System", status: "Completed", duration: "1 year", stack: "PHP, MySQL, JavaScript" },
  { title: "Document Management System", status: "In progress", duration: "<1 month", stack: "Laravel PHP, MySQL, Bootstrap" },
];

const workHistory = [
  { role: "Networking Support", company: "Internship Experience", duration: "2025" },
  { role: "Full-Stack Developer", company: "Portfolio Projects", duration: "1+ year" },
];

const adminPages = [
  { id: "overview", label: "Overview", icon: FolderKanban },
  { id: "profile", label: "Profile & Resume", icon: UserRound },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "experience", label: "Experience", icon: CalendarClock },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("overview");
  const activePageMeta = adminPages.find((page) => page.id === activePage);

  useEffect(() => {
    const session = localStorage.getItem("portfolioAdminSession");
    if (session !== "active") {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("portfolioAdminSession");
    navigate("/admin");
  };

  const renderOverview = () => (
    <section className={styles.metricsGrid}>
      {[
        { icon: FolderKanban, label: "Total Projects", value: "8" },
        { icon: UserRound, label: "Profile Views", value: "1,234" },
        { icon: Mail, label: "Messages", value: "47" },
        { icon: CalendarClock, label: "Experience", value: "1+ yr" },
      ].map((m, i) => {
        const Icon = m.icon;
        return (
          <div key={i} className={styles.metricCard}>
            <Icon size={24} />
            <div>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          </div>
        );
      })}
    </section>
  );

  const renderProfile = () => (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Profile & Resume</h2>
        <button type="button" className={styles.primaryButton}>
          <Save size={18} /> Save
        </button>
      </div>
      <div className={styles.formGrid}>
        <label>
          Full Name
          <input type="text" defaultValue="Neil Ace Acierto" />
        </label>
        <label>
          Title
          <input type="text" defaultValue="Full-Stack Developer" />
        </label>
        <label>
          Email
          <input type="email" defaultValue="admin@acierto.dev" />
        </label>
        <label>
          Phone
          <input type="tel" defaultValue="+63 912 345 6789" />
        </label>
      </div>
      <label className={styles.textAreaLabel}>
        Bio
        <textarea defaultValue="Full-stack developer with experience in Laravel, React, and modern web technologies." />
      </label>
      <div className={styles.uploadBox}>
        <ImagePlus size={24} />
        <div>
          <strong>Resume PDF</strong>
          <span>Upload a new resume file</span>
        </div>
        <button type="button" className={styles.secondaryButton}>
          <Upload size={18} /> Upload
        </button>
      </div>
    </section>
  );

  const renderProjects = () => (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Projects</h2>
        <button type="button" className={styles.primaryButton}>
          <Plus size={18} /> New Project
        </button>
      </div>
      <div className={styles.projectTable}>
        <div className={styles.tableHeader}>
          <span>Project</span>
          <span>Status</span>
          <span>Duration</span>
          <span>Stack</span>
          <span />
        </div>
        {projects.map((p, i) => (
          <div key={i} className={styles.tableRow}>
            <span>{p.title}</span>
            <span>{p.status}</span>
            <span>{p.duration}</span>
            <span>{p.stack}</span>
            <span className={styles.rowActions}>
              <button type="button" className={styles.iconButton}>
                <Pencil size={16} />
              </button>
              <button type="button" className={styles.iconButton}>
                <Trash2 size={16} />
              </button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  const renderExperience = () => (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Experience</h2>
        <button type="button" className={styles.primaryButton}>
          <Plus size={18} /> Add Entry
        </button>
      </div>
      <div className={styles.listStack}>
        {workHistory.map((w, i) => (
          <div key={i} className={styles.listItem}>
            <div>
              <strong>{w.role}</strong>
              <span>{w.company}</span>
            </div>
            <span>{w.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );

  const renderSettings = () => (
    <section className={styles.panel}>
      <div className={styles.panelHeader}>
        <h2>Settings</h2>
        <button type="button" className={styles.primaryButton}>
          <Save size={18} /> Save
        </button>
      </div>
      <div className={styles.formGrid}>
        <label>
          Site Title
          <input type="text" defaultValue="Neil Ace Acierto" />
        </label>
        <label>
          Admin Email
          <input type="email" defaultValue="admin@acierto.dev" />
        </label>
      </div>
      <label className={styles.textAreaLabel}>
        Footer Text
        <textarea defaultValue="© 2026 Neil Ace Acierto. All rights reserved." />
      </label>
    </section>
  );

  const renderActivePage = () => {
    switch (activePage) {
      case "profile":
        return renderProfile();
      case "projects":
        return renderProjects();
      case "experience":
        return renderExperience();
      case "settings":
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <main className={styles.adminPage}>
      <aside className={styles.sidebar}>
        <a href="/" className={styles.brand}>
          ACIERTO.
        </a>
        <nav className={styles.sideNav} aria-label="Admin sections">
          {adminPages.map((page) => {
            const Icon = page.icon;
            return (
              <button
                type="button"
                key={page.id}
                className={activePage === page.id ? styles.active : ""}
                onClick={() => setActivePage(page.id)}
              >
                <Icon size={18} /> {page.label}
              </button>
            );
          })}
        </nav>

        <button type="button" className={styles.logoutButton} onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      <section className={styles.workspace}>
        <header className={styles.topbar}>
          <div>
            <span className={styles.eyebrow}>Portfolio Admin</span>
            <h1>{activePageMeta?.label || "Website Content Manager"}</h1>
          </div>
          <div className={styles.topbarActions}>
            <div className={styles.searchBox}>
              <Search size={18} />
              <input type="search" placeholder="Search content" />
            </div>
            <button className={styles.primaryButton} type="button">
              <Save size={18} /> Publish Changes
            </button>
          </div>
        </header>

        {renderActivePage()}
      </section>
    </main>
  );
}