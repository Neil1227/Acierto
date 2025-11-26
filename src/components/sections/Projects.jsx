import styles from "@/styles/Projects.module.css";

import { FaCode, FaClock, FaUsers, FaUser, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";



const Projects = () => {
const projects = [
  {
    id: 1,
    title: "Knowledge Management Unit Website",
    description:
      "A public-facing website for the Knowledge Management Unit, built with Laravel and MySQL to provide information access and organizational resources.",
    image: "/img/projects/km.jpg",
    technologies: ["Laravel PHP", "MySQL","Bootstrap"],
    category: "Web Development",
    status: "Inprogress",
    duration: "6 months",
    team: "Solo",
    demoUrl: "#",
    githubUrl: "#", // replace if you have repo
    featured: true,
  },
  {
    id: 2,
    title: "Knowledge Management Unit Admin",
    description:
      "Admin dashboard for managing KMU content and data. Includes authentication, content management, and reporting features.",
    image: "/img/projects/admin-km.jpg",
    technologies: ["Laravel PHP", "MySQL","Bootstrap"],
    category: "Web Development",
    status: "Completed",
    duration: "6 months",
    team: "Solo",
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Angeles City Vet Adoption System",
    description:
      "An adoption system for Angeles City Veterinary Office to help streamline the pet adoption process. Built with PHP and MySQL.",
    image: "/img/projects/acv.png",
    technologies: ["PHP", "MySQL","Bootstrap", "JavaScript"],
    category: "Web Application",
    status: "Completed",
    duration: "1 Year",
    team: "Solo",
    demoUrl: "https://acv.free.nf",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Angeles City Vet Adoption System Admin",
    description:
      "Admin panel for managing adoption applications, pet data, and user information. Provides secure login and data management.",
    image: "/img/projects/acv-admin.png",
    technologies: ["PHP", "MySQL","Bootstrap", "JavaScript"],
    category: "Web Application",
    status: "Completed",
    duration: "1 Year",
    team: "Solo",
    demoUrl: "https://acv.free.nf/adminLogin.php",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Internship Portfolio",
    description:
      "A personal internship portfolio showcasing internship experiences, projects, and skills. Built using static HTML, CSS, and JavaScript.",
    image: "/img/projects/intern.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Portfolio",
    status: "Completed",
    duration: "<1 month",
    team: "Solo",
    demoUrl: "https://neil1227.github.io/IT-Internship/",
    githubUrl: "#",
    featured: false,
  },
{
  id: 6,
  title: "Portfolio Version 1",
  description:
    "My first personal portfolio, created to showcase my projects, skills, and internship experiences. Built using static HTML, CSS, and JavaScript as a foundation for future development.",
  image: "/img/projects/portfoliov1.png",
  technologies: ["HTML", "CSS", "JavaScript"],
  category: "Portfolio",
  status: "Completed",
  duration: "<1 month",
  team: "Solo",
  demoUrl: "https://neil1227.github.io/Portfolio/",
  githubUrl: "#",
  featured: false,
}

];

  return (
    <div id="projects" className={styles.projectsPage}>
    <div className={styles.title}>
<h1
  className="mb-3 gradientText"
  style={{ textAlign: "center" }}
>
  Featured Projects:
</h1>

    </div>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`${styles.projectCard} ${
              project.featured ? styles.featured : ""
            }`}
          >
          <div className={styles.projectImageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
          </div>

            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h2 className={styles.projectTitle}>
                   {project.title}
                </h2>
                <span
                  className={`${styles.statusBadge} ${
                    project.status === "Completed"
                      ? styles.statusCompleted
                      : styles.statusProgress
                  }`}
                >
                  {project.status}
                </span>
              </div>


              <p className={styles.projectDescription}>{project.description}</p>

              <div className={styles.projectTags}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>

          <div className={styles.projectMeta}>
            <span className="flex items-center gap-1">
              <FaClock /> {project.duration}
            </span>
            <span className="flex items-center gap-1">
              {project.team === "Solo" ? <FaUser /> : <FaUsers />} {project.team}
            </span>
          </div>

          <div className={styles.projectLinks}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.demoBtn}`} // custom class for wider button
                >
                    <FiExternalLink style={{ marginRight: '0.5rem' }} />
                  Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles.secondary}`}
                >
                  <FaGithub/>
                  
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
