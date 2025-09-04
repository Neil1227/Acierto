// src/components/VantaBackground.jsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
 if (!vantaEffect) {
    const effect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.1,   // keep zoom slightly smaller
      color: 0xffffff,
      backgroundColor: 0x055050,
      points: window.innerWidth < 768 ? 8 : 12,   // fewer points (mobile not too crowded)
      maxDistance: window.innerWidth < 768 ? 18 : 22, // moderate connection length
      spacing: window.innerWidth < 768 ? 16 : 20, // keeps net airy, not clustered
      showDots: true,
    });
    setVantaEffect(effect);
  }


    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#fff",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default VantaBackground;
