import "../Style/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Left Side */}
          <div className="about-text">
            <p>
              Hello! I'm{" "}
              <span className="highlight">Nitish Kumar Prajapati</span>, a
              passionate Computer Science student pursuing B.Tech at NIET,
              Greater Noida.
            </p>

            <p>
              I enjoy building modern web applications and solving real-world
              problems through technology. My interests span across Full Stack
              Development, Machine Learning, Generative AI, and Data Science.
            </p>

            <p>
              I am continuously learning new technologies, improving my coding
              skills, and working on projects that help me grow as a developer.
              My goal is to create impactful software solutions and contribute
              to innovative technology-driven products.
            </p>

            {/* <div className="stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Projects</p>
              </div>

              <div className="stat-card">
                <h3>3+</h3>
                <p>Years Learning</p>
              </div>

              <div className="stat-card">
                <h3>100+</h3>
                <p>DSA Problems</p>
              </div>
            </div> */}
            <div className="info-card">
              <h3>📊 Quick Stats</h3>

              <div className="stats-grid">
                <div className="mini-stat">
                  <h4>10+</h4>
                  <span>Projects</span>
                </div>

                <div className="mini-stat">
                  <h4>400+</h4>
                  <span>DSA Problems</span>
                </div>

                <div className="mini-stat">
                  <h4>3+</h4>
                  <span>Years Learning</span>
                </div>

                <div className="mini-stat">
                  <h4>10+</h4>
                  <span>Core Skills</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="about-info">
            <div className="info-card">
              <h3>🎓 Education</h3>
              <p>B.Tech in Computer Science & Engineering</p>
              <p>NIET, Greater Noida</p>
            </div>

            {/* <div className="info-card">
              <h3>🚀 Interests</h3>
              <p>Full Stack Development</p>
              <p>Machine Learning</p>
              <p>Generative AI</p>
              <p>Data Science</p>
            </div>

            <div className="info-card">
              <h3>💻 Tech Stack</h3>
              <p>React.js</p>
              <p>Java</p>
              <p>Python</p>
              <p>JavaScript</p>
            </div> */}
            <div className="info-card">
              <h3>🚀 Interests</h3>

              <div className="info-card-content">
                <p>Full Stack Development</p>
                <p>Machine Learning</p>
                <p>Generative AI</p>
                <p>Data Science</p>
              </div>
            </div>

            <div className="info-card">
              <h3>💻 Tech Stack</h3>

              <div className="info-card-content">
                <p>React.js</p>
                <p>Java</p>
                <p>Python</p>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
