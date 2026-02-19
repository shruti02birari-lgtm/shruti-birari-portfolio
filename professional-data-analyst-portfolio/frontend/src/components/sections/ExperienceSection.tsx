import Timeline from '../Timeline';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Aug 2023 - Present',
      title: 'Data Engineering Analyst',
      company: ' Accenture',
      description:
        'Leading data analysis initiatives for enterprise clients, focusing on business intelligence and predictive analytics.',
      achievements: [
        'Developed 12+ Power BI dashboards serving 500+ users, improving decision-making speed by 45%',
        'Led A/B testing program that increased product conversion rates by 28% across 3 major features',
        'Automated ETL pipelines reducing data processing time from 6 hours to 45 minutes',
        'Mentored 3 junior analysts in statistical analysis and data visualization best practices',
      ],
    },
    {
      period: 'Jun 2023 - Aug 2023',
      title: 'Data Analyst Intern',
      company: 'MedTour Easy',
      description:
        'Performed comprehensive data analysis and created actionable insights for retail and e-commerce clients.',
      achievements: [
        'Built customer segmentation models using R and Python, identifying $3.2M revenue opportunity',
        'Created SQL-based reporting system reducing manual reporting effort by 80%',
        'Conducted statistical analysis on 50M+ records to optimize marketing campaign performance',
        'Designed interactive Tableau dashboards tracking KPIs across 15 business units',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-gradient-to-b from-accent/5 to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            2+ years of transforming data into strategic business value
          </p>
        </div>

        {/* Timeline */}
        <Timeline experiences={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection;
