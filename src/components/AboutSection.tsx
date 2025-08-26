import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Code, Palette, Rocket, Database, Globe, Lightning } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skills = skillsRef.current;

    if (!section || !image || !content || !skills) return;

    gsap.fromTo(section,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    gsap.fromTo(image,
      { opacity: 0, x: -100, rotation: -10 },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(content,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    const skillIcons = skills.querySelectorAll('.skill-icon');
    gsap.fromTo(skillIcons,
      { opacity: 0, y: 50, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skills,
          start: "top 80%",
        }
      }
    );

  }, []);

  const skills = [
    { icon: Lightning, name: 'Python', color: 'text-blue-400' },
    { icon: Code, name: 'Java', color: 'text-orange-400' },
    { icon: Code, name: 'C/C++', color: 'text-blue-600' },
    { icon: Globe, name: 'HTML/CSS', color: 'text-orange-500' },
    { icon: Code, name: 'JavaScript', color: 'text-yellow-400' },
    { icon: Rocket, name: 'React', color: 'text-cyan-400' },
    { icon: Globe, name: 'PHP', color: 'text-purple-400' },
    { icon: Database, name: 'MySQL', color: 'text-blue-500' },
    { icon: Palette, name: 'TensorFlow', color: 'text-orange-400' },
    { icon: User, name: 'Computer Vision', color: 'text-green-400' },
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <div ref={imageRef} className="relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-full glow-purple animate-pulse" />
            <div className="absolute inset-2 glass-card rounded-full overflow-hidden">
              <img 
                src="/images/profile.png"
                alt="Rahul Bisht"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Hi, I’m Rahul Bisht — a Computer Science undergraduate at Graphic Era University, Dehradun, passionate about building impactful software solutions that blend creativity with problem-solving.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I’m always eager to learn, unlearn, and relearn — whether it’s cracking tough DSA problems, 
              experimenting with AI/ML, or polishing my web dev skills. My toolkit includes Python, Java, 
              C++, C, HTML, CSS, JavaScript, PHP, MySQL, and a sprinkle of ReactJS.
              When I’m not debugging (a.k.a. my daily cardio 🏃‍♂️), you’ll probably find me exploring new technologies,
               solving coding challenges, or tinkering with ways to make systems faster, smarter, and more fun.
                I believe in building things that not only work well but also make an impact — and I’m always excited for 
                opportunities that push me outside my comfort zone (while keeping Ctrl+Z handy 😉).
            </p>
          </div>

          {/* Skills & Technologies */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Skills & Technologies</h3>
            <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="skill-icon glass-card p-4 rounded-xl text-center hover:scale-105 hover:glow-soft transition-all duration-300 group"
                >
                  <skill.icon size={24} className={`mx-auto mb-2 ${skill.color} group-hover:scale-125 transition-transform duration-300`} />
                  <p className="font-medium text-foreground/90 text-sm">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;