import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/MallikaSingh1773',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mallikasingh05',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:Singhmallika1773@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-text-secondary flex items-center gap-2 justify-center">
              Made with <Heart className="w-4 h-4 text-[hsl(355,100%,80%)] fill-current" /> by
              Mallika Singh
            </p>
            <p className="text-sm text-text-secondary mt-2">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-peach-lavender rounded-full px-6 py-3 shadow-soft">
            <p className="text-sm font-medium text-text-primary">
              ✨ Open to entry-level opportunities
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
