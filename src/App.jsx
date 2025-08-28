import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false); // hide preloader after load
      }, 2000); // small delay for smoother fade-out
    };

    // If page already loaded (like with fast refresh)
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div>
      {loading && (
        <div id="preloader">
          <div className="chart-container">
            <div className="semi-circle-ring outer-ring"></div>
            <div className="semi-circle-ring inner-ring"></div>
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
