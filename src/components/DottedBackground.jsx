import React, { useEffect, useState } from "react";
import "./DottedBackground.css"; // Make sure you have this CSS file

const DottedBackground = () => {
  const rows = 80; // More rows for a full-screen effect
  const cols = 40; // More columns for a full-screen effect
  const totalDots = rows * cols;
  const chunkSize = 4; // Chunk size for fading effect

  const [particles, setParticles] = useState(Array(totalDots).fill(false));

  useEffect(() => {
    const fadeOutParticles = () => {
      setParticles((prev) => {
        let newParticles = [...prev];

        // Random chunk to fade out
        const chunkStartIndex = Math.floor(
          Math.random() * (totalDots - chunkSize * chunkSize)
        );

        for (let i = 0; i < chunkSize; i++) {
          for (let j = 0; j < chunkSize; j++) {
            const index = chunkStartIndex + i * cols + j;
            if (index < totalDots) {
              newParticles[index] = true; // Mark as faded
            }
          }
        }
        return newParticles;
      });
    };

    // Start animation loop
    const fadeInterval = setInterval(() => {
      fadeOutParticles();
    }, 100);

    // Reset all particles after some time
    const resetInterval = setInterval(() => {
      setParticles(Array(totalDots).fill(false));
    }, 5000);

    return () => {
      clearInterval(fadeInterval);
      clearInterval(resetInterval);
    };
  }, []);

  return (
    <div className="particle-container">
      {particles.map((isFaded, index) => (
        <div key={index} className={`particle ${isFaded ? "fadeOut" : ""}`} />
      ))}
    </div>
  );
};

export default DottedBackground;
