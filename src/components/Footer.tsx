import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    gsap.fromTo(footer,
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        }
      }
    );

    // Animate floating particles
    const particles = footer.querySelectorAll('.floating-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    });

  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 glass-card border-t border-glass-border/30 overflow-hidden"
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle absolute top-8 left-8 w-2 h-2 bg-neon-cyan rounded-full glow-cyan opacity-40" />
        <div className="floating-particle absolute top-16 right-16 w-3 h-3 bg-neon-purple rounded-full glow-purple opacity-30" />
        <div className="floating-particle absolute bottom-16 left-16 w-1 h-1 bg-neon-pink rounded-full opacity-50" />
        <div className="floating-particle absolute bottom-8 right-8 w-2 h-2 bg-neon-blue rounded-full opacity-40" />
        <div className="floating-particle absolute top-1/2 left-1/4 w-1 h-1 bg-neon-cyan rounded-full opacity-30" />
        <div className="floating-particle absolute top-1/3 right-1/3 w-2 h-2 bg-neon-purple rounded-full opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Rahul Bisht
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Full-Stack Developer passionate about creating immersive digital experiences 
              with modern web technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-neon-cyan transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card border border-glass-border/30 rounded-lg hover:scale-110 hover:text-neon-cyan hover:glow-soft transition-all duration-300"
              >
                <GithubLogo size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-card border border-glass-border/30 rounded-lg hover:scale-110 hover:text-neon-blue hover:glow-soft transition-all duration-300"
              >
                <LinkedinLogo size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-glass-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm flex items-center gap-2">
            <span>© 2024 Made with</span>
            <Heart size={16} className="text-neon-pink animate-pulse" />
            <span>by Rahul Bisht</span>
          </p>
          
          <div className="flex items-center gap-4 text-foreground/60 text-sm">
            <span>Built with GSAP, React & Spline</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;