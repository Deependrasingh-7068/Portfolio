// src/Home.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/component/ui/Button";
import Image from "@/Image";
import "../css/Home.css"; 


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

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

  return (
    <div className=" home-container">
      {/* Navbar */}
     
     
      {/* Hero Section */}
      <section
        ref={heroRef}
        className=" flex flex-col items-center justify-center h-screen text-center"
      >
        <h1 className="text-5xl font-extrabold main-name">Hi, I'm Deependra</h1>
        <p className="mt-4 text-xl">Frontend Developer | MERN Stack </p>
        <div className="mt-6 space-x-4">
          <Button className="btn-primary">Download Resume</Button>
          <Button variant="outline" className="border-teal-500 text-teal-400 hover:bg-teal-700">Contact Me</Button>
        </div>
      </section>

      {/* About Section */}
      
    </div>
  );
}

export default Home;
