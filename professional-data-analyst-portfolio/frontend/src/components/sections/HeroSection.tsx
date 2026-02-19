import { ArrowRight, BarChart3, Database } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-dataviz-bg.dim_1920x1080.png"
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 border border-teal-500/30 text-sm text-teal-400">
              <BarChart3 className="h-4 w-4" />
              <span>Data Analyst Portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transforming Data Into{' '}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent">
                Actionable Insights
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Data Analyst with <strong className="text-foreground">2+ years of experience</strong> specializing in{' '}
              <strong className="text-teal-400">R programming</strong>,{' '}
              <strong className="text-teal-400">Power BI</strong>,{' '}
              <strong className="text-teal-400">SQL</strong>, and{' '}
              <strong className="text-teal-400">Python</strong>. Expert in data visualization and statistical
              analysis, turning complex datasets into strategic business decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105"
              >
                View Projects
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent/50 hover:bg-accent border border-border text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Database className="h-5 w-5" />
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-teal-400">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">4</div>
                <div className="text-sm text-muted-foreground">Core Tools</div>
              </div>
            </div>
          </div>

          {/* Dashboard Illustration */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-teal-500/10">
              <img
                src="/assets/generated/dashboard-illustration.dim_1200x800.png"
                alt="Data dashboard illustration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
