import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!section || !cardsContainer) return;

    // Animate section title
    gsap.fromTo(section.querySelector('h2'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        }
      }
    );

    // Animate project cards
    const cards = cardsContainer.querySelectorAll('.project-card');
    gsap.fromTo(cards,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsContainer,
          start: "top 80%",
        }
      }
    );

  }, []);

  const projects = [
    {
      id: 1,
      title: "VibeScript Programming Language",
      description: "A beginner-focused programming language with Gen-Z inspired syntax designed to improve engagement among first-time coders. Features a web-based smart IDE with intuitive Python backend for compilation, achieving 43% reduction in beginner implementation errors during peer testing with 20+ students.",
      image: "/images/project-1.png",
      tech: ["Python", "HTML", "CSS", "JavaScript", "Compiler Design"],
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      id: 2,
      title: "Traffic OS Scheduler Simulation",
      description: "Real-time traffic signal simulator implementing Round Robin, SJF, and Priority Scheduling algorithms. Reduced average vehicle wait time by 40% across 100+ scenarios through an interactive HTML/CSS/JavaScript web application with advanced scheduling optimizations.",
      image: "/images/project-2.png",
      tech: ["JavaScript", "HTML", "CSS", "Algorithms", "Simulation"],
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      id: 3,
      title: "AI Virtual Mouse",
      description: "Python-based AI Virtual Mouse using OpenCV and MediaPipe, delivering 95% gesture recognition accuracy within a 5-meter range. Demonstrates core expertise in real-time computer vision and human-computer interaction with advanced hand tracking",
      image: "/images/project-3.png",
      tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "AI"],
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      id: 4,
      title: "Traffic Sign Detection YOLOv8",
      description: "Deep learning model with 92% mAP performance for accurate traffic sign detection and classification in real-time scenarios.",
      image: "/images/project-4.png",
      tech: ["Python", "YOLOv8", "Deep Learning", "Computer Vision", "AI"],
      gradient: "from-neon-blue to-neon-cyan"
    }
  ];

  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div 
        ref={cardsContainerRef}
        className="space-y-16"
      >
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`project-card flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="lg:w-1/2">
              <div className="relative overflow-hidden rounded-2xl group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h3 className="text-3xl font-bold text-foreground hover:text-neon-cyan transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-foreground/80 leading-relaxed text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 text-sm bg-glass-bg/50 border border-glass-border/30 rounded-lg text-foreground/80 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4">
                <button className="p-3 glass-card border border-glass-border/30 rounded-lg hover:scale-105 hover:text-neon-cyan transition-all duration-300">
                  <GithubLogo size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
