import ProjectCard from "../ProjectCard";
import { Briefcase } from "lucide-react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Health trends forecast",
      problem:
        "This project analyzes emerging health-related search trends and forecasts future demand using ARIMA time-series modeling. The forecasted insights are presented through an interactive Power BI dashboard for data-driven decision-making.",
      approach: "Designed and implemented an interactive Power BI dashboard...",
      tools: ["Power BI", "SQL", "Python", "DAX"],
      outcomes: [
        "Wearable fitness trackers show highest projected growth (~118%)",
        "Sleep optimization demonstrates strong upward trajectory",
        "Intermittent fasting shows declining forecast trend",
        "Mental health remains stable long-term segment",
      ],
      image: "src/assets/dashboard.png",
    },
    {
      title: "Ecommerce Product Analytics System",
      problem:
        "This project demonstrates a complete analytics pipeline that bridges data engineering, analysis, machine learning, and dashboard development into a scalable business intelligence solution.",
      approach: "Conducted exploratory data analysis using R and Python...",
      tools: [
        "MySQL",
        "Python",
        "Pandas",
        "Numpy",
        "Scikit-learn",
        "MatplotLib",
      ],
      outcomes: [
        "End-to-End Analytics Pipeline Implementation",
        "Actionable Customer & Revenue Insights",
        "Revenue Forecasting for Business Planning",
      ],
      image: "src/assets/secondDashboard.png",
    },
    {
      title: "Diabetes risk stratification",
      problem:
        "The objective is to demonstrate end-to-end healthcare analytics workflow including EDA, feature scaling, clustering, predictive modeling, and interpretation.",
      approach: "Established full A/B testing framework...",
      tools: ["Python", "SQL", "R", "Tableau"],
      outcomes: [
        "Glucose is the most influential feature in diabetes prediction",
        "Clustering revealed clinically meaningful risk segments",
        "Unsupervised clusters aligned with actual diagnosis rates",
        "Demonstrates real-world healthcare risk stratification logic",
      ],
      image: "src/assets/diabetes.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="projects-badge">
            <Briefcase size={16} />
            <span>Portfolio</span>
          </div>

          <h2 className="projects-title">
            Featured <span className="highlight">Projects</span>
          </h2>

          <p className="projects-subtitle">
            Real-world data analysis projects demonstrating impact and technical
            expertise
          </p>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
