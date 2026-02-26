import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Templates', 'API'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-space-900 border-t border-white/5 z-[130]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-2xl font-bold text-text-primary tracking-tight">
              NexusAI
            </a>
            <p className="text-text-secondary text-sm mt-4 max-w-xs">
              AI that runs your workflow. Connect, automate, and scale with confidence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-text-primary font-medium text-sm uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-text-secondary text-sm hover:text-text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © By BitLuse {new Date().getFullYear()} - NexusAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-secondary text-sm hover:text-text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary text-sm hover:text-text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
