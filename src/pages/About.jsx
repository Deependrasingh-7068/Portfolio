import { useEffect } from "react";
import "../CSS/About.css";
import Adobe from "../assets/Adobe.png";

function About() {
  useEffect(() => {
    // Set new background position on component mount
    document.body.style.setProperty("--bg-pos-x", "right");
    document.body.style.setProperty("--bg-pos-y", "top");

    // Optional: Reset when leaving the component
    return () => {
      document.body.style.setProperty("--bg-pos-x", "left");
      document.body.style.setProperty("--bg-pos-y", "right");
      
    };
  }, []);

  return (

    <>  
    <span className="img1" >
      <img src={Adobe} alt="img1" />

    </span>

    <div className="about-container">
      <h1>About me</h1>
    </div>
  </>
  );
}

export default About;
