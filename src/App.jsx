import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import SkillsProjects from "./components/SkillsProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground";
import ChatBot from "./components/ChatBot";

import SmoothCursor from "./components/SmoothCursor"; // 👈 import here
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false); // hide preloader after load
      }, 2000); // small delay for smoother fade-out
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
      {/* 👇 add the cursor at the very top so it overlays everything */}
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
      <Timeline/>
      <SkillsProjects/>
      <Contact/>
      <Footer/>
      <ChatBot />
    </div>
  );
}

export default App;
