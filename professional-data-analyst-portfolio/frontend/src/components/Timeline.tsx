import { Calendar, Building2 } from 'lucide-react';

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500 via-cyan-500 to-transparent"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                <div className="w-4 h-4 rounded-full bg-teal-500 border-4 border-background shadow-lg shadow-teal-500/50"></div>
              </div>

              {/* Content Card */}
              <div
                className={`md:w-[calc(50%-2rem)] ${
                  idx % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}
              >
                <div className="group p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 mb-4">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-teal-400 mt-1 flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
