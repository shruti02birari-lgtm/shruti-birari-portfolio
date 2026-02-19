import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  outcomes: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className={`group grid lg:grid-cols-2 gap-6 lg:gap-8 items-center p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-amber-400 mb-1">Problem</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-cyan-400 mb-1">Approach</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.approach}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Outcomes</h4>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
