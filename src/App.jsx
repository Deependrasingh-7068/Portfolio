import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import clsx from "clsx";
import "./App.css"; //
import Image from "./Image"; // Adjust the import path as necessary

function App() {
  <Image
    src="/src/assets/adobe Express - file (1).png" // Adjust the path as necessary
        alt="Background Image"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundBlendMode: "normal",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
  />;
  return (
    <Router>
      


      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
