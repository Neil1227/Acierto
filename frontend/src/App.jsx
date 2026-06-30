import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Timeline from "./components/sections/Timeline";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import VantaBackground from "./components/VantaBackground";
import Projects from "./components/sections/Projects";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import SkillsBanner from "./components/SkillsBanner";
import SmoothCursor from "./components/SmoothCursor";
import "./App.css";

function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div>
      <SmoothCursor size={60} ease={0.16} />

      {loading && (
        <div id="preloader">
          <div className="chart-container">
            <div className="semi-circle-ring outer-ring"></div>
            <div className="semi-circle-ring inner-ring"></div>
          </div>
        </div>
      )}

      <Navbar />
      <VantaBackground>
        <Hero />
      </VantaBackground>
      <About />
      <Timeline />
      <div className="projectTitle mt-5" style={{ textAlign: "center" }}>
        <h1 className="gradientText">Professional Skill Sets</h1>
        <p style={{ color: "var(--subtitle-color)", fontSize: "1.125rem", padding: "1rem" }}>
          A blend of technical skills and creative problem-solving, shaped by real projects and hands-on experience.
        </p>
      </div>
      <SkillsBanner />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;