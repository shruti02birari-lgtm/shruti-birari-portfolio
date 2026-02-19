import { Code2, Database, BarChart3, TrendingUp, PieChart, FileSpreadsheet } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming & Tools',
      icon: Code2,
      color: 'teal',
      skills: [
        { name: 'R Programming', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'SQL', level: 'Expert' },
        { name: 'Power BI', level: 'Expert' },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Database,
      color: 'cyan',
      skills: [
        { name: 'Statistical Analysis', level: 'Advanced' },
        { name: 'Data Cleaning', level: 'Expert' },
        { name: 'ETL Processes', level: 'Advanced' },
        { name: 'Data Modeling', level: 'Advanced' },
      ],
    },
    {
      title: 'Visualization',
      icon: BarChart3,
      color: 'amber',
      skills: [
        { name: 'Dashboard Design', level: 'Expert' },
        { name: 'Tableau', level: 'Intermediate' },
        { name: 'ggplot2 (R)', level: 'Advanced' },
        { name: 'Matplotlib/Seaborn', level: 'Advanced' },
      ],
    },
    {
      title: 'Core Competencies',
      icon: TrendingUp,
      color: 'purple',
      skills: [
        { name: 'Predictive Modeling', level: 'Advanced' },
        { name: 'A/B Testing', level: 'Advanced' },
        { name: 'Business Intelligence', level: 'Expert' },
        { name: 'Data Storytelling', level: 'Expert' },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      teal: {
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        icon: 'bg-teal-500/20',
      },
      cyan: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        icon: 'bg-cyan-500/20',
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        text: 'text-amber-400',
        icon: 'bg-amber-500/20',
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'bg-purple-500/20',
      },
    };
    return colors[color] || colors.teal;
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 scroll-mt-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-sm text-teal-400 mb-4">
            <PieChart className="h-4 w-4" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-teal-400">Competencies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for extracting insights and driving data-informed decisions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={idx}
                className={`group p-6 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-xl`}
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.icon} mb-4`}>
                  <Icon className={`h-6 w-6 ${colors.text}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-accent/50">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-center text-lg font-semibold mb-6 text-muted-foreground">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Excel',
              'Git',
              'Jupyter',
              'RStudio',
              'PostgreSQL',
              'MySQL',
              'Pandas',
              'NumPy',
              'Scikit-learn',
              'dplyr',
              'tidyr',
              'DAX',
              'M Query',
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-accent/50 border border-border text-sm text-foreground hover:bg-accent transition-colors"
              >
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
