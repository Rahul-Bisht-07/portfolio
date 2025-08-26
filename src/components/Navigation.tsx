import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 3, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { x: '100%', opacity: 0 },
          { x: '0%', opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current,
          { x: '100%', opacity: 0, duration: 0.3, ease: "power2.in" }
        );
      }
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 glass-card border-b border-glass-border/30"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RB
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-neon-cyan transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a 
                href="#contact"
                className="px-6 py-2 bg-gradient-primary text-white rounded-lg glow-soft hover:scale-105 transition-transform duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed top-0 right-0 w-full h-screen bg-background/95 backdrop-blur-xl z-50 md:hidden"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 bg-gradient-primary text-white rounded-lg glow-soft text-xl"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;