import React from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shrutiibirari@gmail.com",
      href: "mailto:shrutiibirari@gmail.com",
      color: "teal",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/shruti-birari/",
      href: "https://www.linkedin.com/in/shruti-birari/",
      color: "cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "https://github.com/shrutibirarii",
      href: "https://github.com/shrutibirarii",
      color: "amber",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-badge">
            <Send size={16} />
            <span>Get In Touch</span>
          </div>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Interested in collaborating or discussing data analysis
            opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;

            return (
              <a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-card ${method.color}`}
              >
                <div className="card-icon">
                  <Icon size={26} />
                </div>

                <h3>{method.label}</h3>
                <p>{method.value}</p>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="contact-cta">
          <p>
            Open to full-time opportunities, freelance projects, and consulting
            engagements.
          </p>

          <a href="mailto:shrutiibirari@gmail.com" className="cta-button">
            <Mail size={18} />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
