// src/Home.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { Button } from "@/component/ui/Button";
import Image from "@/Image";
import "../css/Home.css";

// Icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  // Resume download link
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; 
    link.download = "Deependra_Singh_Resume.pdf";
    link.click();
  };

  // Navigate to contact page
  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className="text-5xl font-extrabold main-name">Hi, I'm Deependra</h1>
        <p className="mt-4 text-xl">Frontend Developer | MERN Stack</p>
        <div className="mt-6 space-x-4">
          <Button onClick={handleDownload} className="download-btn">
            Download Resume
          </Button>
          <Button onClick={goToContact} variant="outline" className="contact-btn">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer with Social Media Links */}
      <footer className="social-footer">
        <div className="tooltip">
          <a
            href="https://github.com/Deependrasingh-7068"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <span className="tooltip-text">GitHub</span>
        </div>

        <div className="tooltip">
          <a
            href="https://www.linkedin.com/in/deependra-singh-872414260/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <span className="tooltip-text">LinkedIn</span>
        </div>

        <div className="tooltip">
          <a
            href="https://x.com/bbm_thakur"
            target="_blank"
            rel="noopener noreferrer"
            className="x-icon"
            aria-label="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M20.255 3H23L15.69 10.696 24 21h-7.007l-5.502-6.645L4.824 21H2l7.905-8.43L0 3h7.25l4.976 6.045L20.255 3Zm-2.05 16h2.2L6.02 5H3.68l14.524 14Z" />
            </svg>
          </a>
          <span className="tooltip-text">X</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;
