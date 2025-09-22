import React, { useEffect, useState, useMemo } from "react";
import "./WaveBackground.css"; // Import CSS for styling

const WaveBackground = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dots = useMemo(() => {
    const cols = Math.floor(dimensions.width / 15);
    const rows = Math.floor(dimensions.height / 15);
    return Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      return { id: `${row}-${col}`, delay: (col + row) * 0.05 };
    });
  }, [dimensions]);

  return (
    <div className="wave-container">
      {dots.map((dot) => (
        <div key={dot.id} className="dot" style={{ animationDelay: `${dot.delay}s` }} />
      ))}
    </div>
  );
};

export default WaveBackground;
