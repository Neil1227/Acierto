import React, { useEffect, useRef, useState } from "react";

const SELECTORS_TO_HIDE = "a, button, [role='button'], input, textarea, select, .cursor-hide";

const SmoothCursor = ({
  size = 60,
  ease = 0.15,
  border = 3,
  borderColor = "#004643",
  blendMode = "normal",
}) => {
  const dotRef = useRef(null);
  const rafRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);

    // Hide cursor smoothly on hover
    const hideTargets = document.querySelectorAll(SELECTORS_TO_HIDE);
    const enterHide = () => setOpacity(0);
    const leaveHide = () => setOpacity(1);
    hideTargets.forEach((el) => {
      el.addEventListener("mouseenter", enterHide);
      el.addEventListener("mouseleave", leaveHide);
    });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * ease;
      pos.current.y += (target.current.y - pos.current.y) * ease;

      if (dotRef.current) {
        const x = pos.current.x - size / 2;
        const y = pos.current.y - size / 2;
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        dotRef.current.style.opacity = visible ? opacity : 0;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
      hideTargets.forEach((el) => {
        el.removeEventListener("mouseenter", enterHide);
        el.removeEventListener("mouseleave", leaveHide);
      });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ease, size, opacity]);

  return (
    <div
      ref={dotRef}
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: "50%",
        pointerEvents: "none",
        transform: `translate3d(${pos.current.x - size / 2}px, ${
          pos.current.y - size / 2
        }px, 0)`,
        transition: "opacity 0.25s ease-out, transform 0.16s ease",
        mixBlendMode: blendMode,
        zIndex: 9999,
        border: `${border}px solid ${borderColor}`,
      }}
    />
  );
};

export default SmoothCursor;
