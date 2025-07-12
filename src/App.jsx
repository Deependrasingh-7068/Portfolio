import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import clsx from "clsx";
import "./App.css"; // 
import Image from "./Image"; // Adjust the import path as necessary


function App() {
  <Image
     src="/src/assets/file_00000000798061f8ac4ebce7a3e700e2.png" 
     alt="Background Image"
     />
  return (
    
    <Router>
      <Image
      style={

        {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, 
        }
      }
      
      />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
