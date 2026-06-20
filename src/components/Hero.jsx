import "../Style/Hero.css";
import profileImage from "../assets/Nitish.jpeg";
import { ReactTyped } from "react-typed";

function Hero() {
 
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-title">Nitish Kumar Prajapati</h1>

        <h2 className="hero-subtitle">
          <ReactTyped
            strings={[
              "Software Developer",
              "Full Stack Developer",
              "Machine Learning Engineer",
              "Data Scientist",
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            loop
          />
        </h2>

        <p className="hero-description">
          Passionate Full Stack Developer skilled in Java, React, Node.js, and
          MongoDB. I enjoy building responsive web applications and solving
          real-world problems through code.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View Projects</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Contact Me</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profileImage} alt="Nitish" />
      </div>
    </section>
  );
}

export default Hero;
