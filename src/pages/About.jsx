import { useEffect, useState } from "react";
import "../css/About.css";
import Adobe from "../assets/Adobe.png";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add a short delay before starting animation
    const timeout = setTimeout(() => setAnimate(true), 100);

    return () => clearTimeout(timeout); // cleanup
  }, []);

  return (
    <>
      <span className={`img1 ${animate ? "animate-img" : ""}`}>
        <img src={Adobe} alt="img1" />
      </span>

      <div className="about-container">
         <span className="stroke-text">About</span> <span className="filled-text">me</span>

         
      </div>
    </>
  );
}

export default About;
