import React from "react";
import Home from "./pages/Home";
import DottedBackground from "./components/DottedBackground"

function App() {
  return (
    <>
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background dots */}
      <DottedBackground />

      {/* Main content with higher z-index */}
      <div style={{ position: "relative", zIndex: 1, backgroundColor: "rgba(0,0,0,0.8)", minHeight: "100vh" }}>
        <Home />
      </div>
    </div>
    </>
  );
}

export default App;
