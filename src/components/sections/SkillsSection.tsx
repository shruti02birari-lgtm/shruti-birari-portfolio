import React from "react";
import { Code2, Database, BarChart3, TrendingUp, PieChart } from "lucide-react";
import "./SkillsSection.css";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Tools",
      icon: Code2,
      color: "card-blue",
      skills: [
        { name: "R Programming", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Expert" },
        { name: "Power BI", level: "Expert" },
      ],
    },
    {
      title: "Data Analysis",
      icon: Database,
      color: "card-green",
      skills: [
        { name: "Statistical Analysis", level: "Advanced" },
        { name: "Data Cleaning", level: "Expert" },
        { name: "ETL Processes", level: "Advanced" },
        { name: "Data Modeling", level: "Advanced" },
      ],
    },
    {
      title: "Visualization",
      icon: BarChart3,
      color: "card-purple",
      skills: [
        { name: "Dashboard Design", level: "Expert" },
        { name: "Tableau", level: "Intermediate" },
        { name: "ggplot2 (R)", level: "Advanced" },
        { name: "Matplotlib / Seaborn", level: "Advanced" },
      ],
    },
    {
      title: "Core Competencies",
      icon: TrendingUp,
      color: "card-orange",
      skills: [
        { name: "Predictive Modeling", level: "Advanced" },
        { name: "A/B Testing", level: "Advanced" },
        { name: "Business Intelligence", level: "Expert" },
        { name: "Data Storytelling", level: "Expert" },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <div className="skills-badge">
            <PieChart size={16} />
            <span>Technical Expertise</span>
          </div>

          <h2>
            Skills & <span>Competencies</span>
          </h2>

          <p>
            A comprehensive toolkit for extracting insights and driving
            data-informed decisions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <div key={idx} className={`skill-card ${category.color}`}>
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{category.title}</h3>

                <ul>
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx}>
                      <span>{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="additional-skills">
          <h3>Additional Technologies</h3>

          <div className="tech-tags">
            {[
              "Excel",
              "Git",
              "Jupyter",
              "RStudio",
              "MySQL",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "dplyr",
              "tidyr",
              "DAX",
              "M Query",
            ].map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
