import "../Style/Projects.css";

import plantDiseaseImg from "../assets/plant deases.jpeg";
import diseasePredictionImg from "../assets/prediction.jpeg";
import portfolioImg from "../assets/portfolio.png";
import teamTaskImg from "../assets/TeamTaskManager.png";
import wanderLustImg from "../assets/WanderLust.png";
import AiAssistedImg from "../assets/AiAssited.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "Modern responsive portfolio website built using React and custom CSS.",
      tech: ["React", "JavaScript", "CSS"],
      github: "https://github.com/nitishkumarprajapati/Portfolio",
    },
    {
      title: "AI-Assisted Trading Learning Platform",
      image: AiAssistedImg,
      description:
        "An AI-powered trading simulation platform that helps users learn stock market trading using virtual funds, real-time market data, portfolio tracking, and intelligent buy/sell recommendations based on market trends.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Chart.js",
      ],
      github: "https://github.com/nitishkumarprajapati/AI-Assisted-Trading-Learning-Platform",
    },

    {
      title: "Team Task Manager",
      image: teamTaskImg,
      description:
        "A collaborative project management application that enables teams to create projects, assign tasks, track progress, manage deadlines, and improve productivity through role-based access and real-time updates.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/nitishkumarprajapati/Team-Task-Manager",
    },
     {
      title: "Wanderlust",
      image: wanderLustImg,
      description:
        "A full-stack travel listing and review platform where users can explore destinations, create listings, upload images, write reviews, and manage travel experiences with secure authentication.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js",
        "EJS",
        "JavaScript",
      ],
      github: "https://github.com/nitishkumarprajapati/WanderLust",
    },
    {
      title: "Plant Disease Detection",
      image: plantDiseaseImg,
      description:
        "A deep learning application that identifies plant diseases from leaf images using CNN models.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
      github: "https://github.com/nitishkumarprajapati/plantdiseasedetection",
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-wrapper">
        <div className="projects-slider" >
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
