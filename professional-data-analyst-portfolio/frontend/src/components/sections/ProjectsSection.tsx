import ProjectCard from '../ProjectCard';
import { Briefcase } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Sales Performance Analytics Dashboard',
      problem:
        'Regional sales team lacked visibility into performance metrics, leading to missed opportunities and inefficient resource allocation across territories.',
      approach:
        'Designed and implemented an interactive Power BI dashboard integrating data from CRM, ERP, and marketing platforms. Applied statistical analysis to identify trends and created predictive models for sales forecasting.',
      tools: ['Power BI', 'SQL', 'Python', 'DAX'],
      outcomes: [
        'Increased sales visibility by 85% across all regions',
        'Identified $2.3M in untapped revenue opportunities',
        'Reduced reporting time from 3 days to real-time',
        'Improved forecast accuracy by 32%',
      ],
      image: '/assets/generated/project-sales-thumb.dim_800x600.png',
    },
    {
      title: 'Customer Churn Prediction Model',
      problem:
        'High customer attrition rate (28% annually) with no clear understanding of churn drivers, resulting in significant revenue loss and ineffective retention strategies.',
      approach:
        'Conducted comprehensive exploratory data analysis using R and Python. Built logistic regression and random forest models to predict churn probability. Performed cohort analysis and survival analysis to identify at-risk customer segments.',
      tools: ['R', 'Python', 'SQL', 'ggplot2', 'Scikit-learn'],
      outcomes: [
        'Achieved 89% accuracy in churn prediction',
        'Identified top 5 churn drivers with statistical significance',
        'Enabled proactive retention campaigns reducing churn by 18%',
        'Generated $1.8M in retained annual revenue',
      ],
      image: '/assets/generated/project-churn-thumb.dim_800x600.png',
    },
    {
      title: 'A/B Testing Framework for Product Features',
      problem:
        'Product team made feature decisions based on intuition rather than data, leading to suboptimal user experience and wasted development resources.',
      approach:
        'Established end-to-end A/B testing framework including experiment design, sample size calculation, and statistical significance testing. Automated data collection and analysis pipeline using SQL and Python.',
      tools: ['Python', 'SQL', 'R', 'Tableau', 'Statistical Analysis'],
      outcomes: [
        'Conducted 15+ successful A/B tests in 6 months',
        'Improved conversion rate by 24% through data-driven decisions',
        'Prevented 3 feature launches that tested negatively, saving $500K',
        'Reduced experiment analysis time by 70% through automation',
      ],
      image: '/assets/generated/project-abtest-thumb.dim_800x600.png',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-sm text-amber-400 mb-4">
            <Briefcase className="h-4 w-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-amber-400">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real-world data analysis projects demonstrating impact and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
