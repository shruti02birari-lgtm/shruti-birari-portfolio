import React from "react";
import { Briefcase } from "lucide-react";
import Timeline from "../Timeline";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "Jun 2023- Aug 2023",
      title: "Data Analyst Intern",
      company: "MedTour Easy",
      description:
        "Performed comprehensive data analysis and created actionable insights for retail and e-commerce clients.",
      achievements: [
        "Performed data cleaning, preprocessing, and transformation on large, structured datasets to ensure data integrity and analytical readiness.",
        "Wrote optimized SQL queries for data extraction, aggregation, and exploratory data analysis .",
        "Developed data visualizations and interactive dashboards to communicate insights and support client decision-making.",
      ],
    },
    {
      period: "Aug 2023- Present",
      title: "Data Engineering Analyst",
      company: "Accenture",
      description:
        "Leading data analysis initiatives for enterprise clients, focusing on business intelligence and predictive analytics.",
      achievements: [
        "Analyzed large-scale incident and log data using SQL to identify failure patterns and root causes, reducing critical incidents by 20%.",
        "Built automated dashboards to track SLA compliance and operational KPIs, improving SLAadherence by 20% and cutting repeat issues by 15%.",
        "Performed trend and performance analysis to optimize system load and resource allocation, driving a 30% productivity gain.",
        "Recognized with the Dashing Debut Award and promoted within 18 months for data-driven impact.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Header */}
        <div className="experience-header">
          <div className="experience-badge">
            <Briefcase size={16} />
            <span>Career Journey</span>
          </div>

          <h2>
            Professional <span>Experience</span>
          </h2>

          <p>2+ years of transforming data into strategic business value</p>
        </div>

        {/* Timeline Component */}
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
