import React from "react";
import { ExternalLink } from "lucide-react";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-card ${index % 2 === 1 ? "reverse" : ""}`}>
      {/* Image */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="image-overlay"></div>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        {/* Tools */}
        <div className="project-tools">
          {project.tools.map((tool, idx) => (
            <span key={idx} className="tool-badge">
              {tool}
            </span>
          ))}
        </div>

        {/* Problem */}
        <div className="project-section">
          <h4 className="section-problem">Overview</h4>
          <p>{project.problem}</p>
        </div>

        {/* Approach */}
        {/* <div className="project-section">
          <h4 className="section-approach">Approach</h4>
          <p>{project.approach}</p>
        </div> */}

        {/* Outcomes */}
        <div className="project-section">
          <h4 className="section-outcomes">Key Outcomes</h4>
          <ul className="outcomes-list">
            {project.outcomes.map((outcome, idx) => (
              <li key={idx}>
                <span className="bullet">•</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
