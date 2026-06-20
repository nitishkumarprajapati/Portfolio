import "../Style/Skills.css";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "AI / Machine Learning",
    skills: [
      {
        name: "Machine Learning",
        logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      },
      { name: "Deep Learning", 
        logo: "https://cdn-icons-png.flaticon.com/512/8637/8637098.png", 
      },
       {
        name: "Generative AI",
        logo: "https://cdn-icons-png.flaticon.com/512/4616/4616734.png",
      },
      {
        name: "Data Science",
        logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      },
     
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>

      <p className="section-subtitle">
        Technologies and tools I use to build web applications and AI-powered
        solutions.
      </p>

      {skillCategories.map((group, index) => (
        <div key={index} className="skill-category">
          <h3>{group.category}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <img src={skill.logo} alt={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
