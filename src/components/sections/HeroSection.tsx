import { ArrowRight, BarChart3, Database } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        {/* <img
          src="/assets/generated/hero-dataviz-bg.dim_1920x1080.png"
          alt="Data visualization background"
        /> */}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <BarChart3 size={16} />
              <span>Data Analyst Portfolio</span>
            </div>

            <h1 className="hero-title">
              Transforming Data Into{" "}
              <span className="hero-gradient-text">Actionable Insights</span>
            </h1>

            <p className="hero-description">
              Data Analyst with <strong>2+ years of experience</strong>{" "}
              specializing in <span className="highlight">R programming</span>,{" "}
              <span className="highlight">Power BI</span>,{" "}
              <span className="highlight">SQL</span>, and{" "}
              <span className="highlight">Python</span>. Expert in data
              visualization and statistical analysis.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("#projects")}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-secondary"
              >
                <Database size={20} />
                Get In Touch
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3>4</h3>
                <p>Core Tools</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img src="src\assets\generatedImage.png" alt="Dashboard" />
            <div className="glow-top"></div>
            <div className="glow-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
