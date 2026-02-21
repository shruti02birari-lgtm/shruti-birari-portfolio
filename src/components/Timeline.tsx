import React from "react";
import { Calendar, Building2 } from "lucide-react";
import "./Timeline.css";

const Timeline = ({ experiences }) => {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {/* Vertical Line */}
        <div className="timeline-line"></div>

        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            {/* Dot */}
            <div className="timeline-dot"></div>

            {/* Card */}
            <div className="timeline-card">
              {/* Period */}
              <div className="timeline-period">
                <Calendar size={14} />
                <span>{exp.period}</span>
              </div>

              {/* Title */}
              <h3 className="timeline-title">{exp.title}</h3>

              {/* Company */}
              <div className="timeline-company">
                <Building2 size={16} />
                <span>{exp.company}</span>
              </div>

              {/* Description */}
              <p className="timeline-description">{exp.description}</p>

              {/* Achievements */}
              <div className="timeline-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {exp.achievements.map((achievement, achIdx) => (
                    <li key={achIdx}>
                      <span className="bullet">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
