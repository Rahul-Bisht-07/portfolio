import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const progress = progressRef.current;
    const text = textRef.current;

    if (!container || !progress || !text) return;

    // Initial state
    gsap.set(text, { opacity: 0, y: 20 });
    gsap.set(progress, { width: '0%' });

    // Animation timeline
    const tl = gsap.timeline();

    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(progress, {
      width: '100%',
      duration: 2.5,
      ease: "power2.inOut"
    }, "-=0.3")
    .to(text, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in"
    }, "-=0.3")
    .to(container, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        <div ref={textRef} className="space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Rahul Bisht
          </h1>
          <p className="text-xl text-foreground/70">Loading Portfolio...</p>
        </div>
        
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-primary glow-purple rounded-full"
          />
        </div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full glow-cyan animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-neon-purple rounded-full glow-purple animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-pink rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingScreen;