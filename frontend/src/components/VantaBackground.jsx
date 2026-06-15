// src/components/VantaBackground.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = ({ children, height }) => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!effectRef.current) {
      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.1,
        color: 0xffffff,
        backgroundColor: 0x0A7A7A,
        points: window.innerWidth < 768 ? 8 : 12,
        maxDistance: window.innerWidth < 768 ? 18 : 22,
        spacing: window.innerWidth < 768 ? 16 : 20,
        showDots: true,
      });
    }

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "relative",
        width: "100%",
        height: height || "auto", // ✅ allow dynamic height
        minHeight: "100vh",       // ✅ ensures full screen on big view
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
          flexDirection: "column", // ✅ avoids compacting
          width: "100%",
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
