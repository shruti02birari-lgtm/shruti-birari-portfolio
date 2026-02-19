import { Mail, Linkedin, Github, Send } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shrutiibirari@gmail.com',
      href: 'mailto:shrutiibirari@gmail.com',
      color: 'teal',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shruti-birari',
      href: 'https://www.linkedin.com/in/shruti-birari',
      color: 'cyan',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shrutibirarii',
      href: 'https://github.com/shrutibirarii',
      color: 'amber',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; hover: string }> = {
      teal: {
        bg: 'bg-teal-500/10',
        border: 'border-teal-500/30',
        text: 'text-teal-400',
        hover: 'hover:bg-teal-500/20',
      },
      cyan: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        hover: 'hover:bg-cyan-500/20',
      },
      amber: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        text: 'text-amber-400',
        hover: 'hover:bg-amber-500/20',
      },
    };
    return colors[color] || colors.teal;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-sm text-teal-400 mb-4">
            <Send className="h-4 w-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="text-teal-400">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaborating or discussing data analysis opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => {
            const colors = getColorClasses(method.color);
            const Icon = method.icon;

            return (
              <a
                key={idx}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-6 rounded-2xl border ${colors.border} ${colors.bg} ${colors.hover} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${colors.text}`}>{method.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Open to full-time opportunities, freelance projects, and consulting engagements.
          </p>
          <a
            href="mailto:analyst@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Mail className="h-5 w-5" />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
