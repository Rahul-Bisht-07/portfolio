import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.5 });

    // Animate hero elements
    tl.fromTo(titleRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    // Add floating animation to CTA button
    gsap.to(ctaRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Floating orbs animation
    const orbs = document.querySelectorAll('.floating-orb');
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        y: -30,
        x: Math.sin(index) * 20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });
    });

  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Spline 3D */}
      <div 
        ref={splineRef}
        className="absolute inset-0 w-full h-full opacity-60"
      >
        <iframe 
          src='https://my.spline.design/orb-aXHM1cn20mu4I7pj4ujJUBqe/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb absolute top-20 left-20 w-4 h-4 bg-neon-cyan rounded-full glow-cyan opacity-60" />
        <div className="floating-orb absolute top-40 right-32 w-6 h-6 bg-neon-purple rounded-full glow-purple opacity-40" />
        <div className="floating-orb absolute bottom-40 left-32 w-3 h-3 bg-neon-pink rounded-full opacity-50" />
        <div className="floating-orb absolute bottom-20 right-20 w-5 h-5 bg-neon-blue rounded-full opacity-30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Rahul Bisht
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto"
        >
          Full-Stack Developer crafting digital experiences with cutting-edge technology
        </p>
        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;