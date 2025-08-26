import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;

    if (!section || !form) return;

    // Animate section
    gsap.fromTo(section,
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

    // Animate form inputs
    const inputs = form.querySelectorAll('.form-input');
    gsap.fromTo(inputs,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
        }
      }
    );

    // Animate social icons
    const socialIcons = section.querySelectorAll('.social-icon');
    gsap.fromTo(socialIcons,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    const submitBtn = e.currentTarget.querySelector('.submit-btn');
    if (submitBtn) {
      gsap.to(submitBtn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">
            Get in Touch
          </h3>
          <p className="text-foreground/70 mb-8">
            I'm always open to discussing new opportunities, collaborating on exciting projects, or just having a chat about the latest in web development and design.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3 text-neon-cyan">
              <span className="text-lg">📧</span>
              <span className="text-lg">rahulbisht19@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neon-cyan">
              <span className="text-lg">📱</span>
              <span className="text-lg">+918532893145</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-neon-cyan">
              <span className="text-lg">📍</span>
              <span className="text-lg">Uttarakhand, India</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://github.com/Rahul-Bisht-07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-4 glass-card border border-glass-border/30 rounded-lg hover:scale-110 hover:text-neon-cyan hover:glow-soft transition-all duration-300"
            >
              <GithubLogo size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-bisht-66a9372ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon p-4 glass-card border border-glass-border/30 rounded-lg hover:scale-110 hover:text-neon-blue hover:glow-soft transition-all duration-300"
            >
              <LinkedinLogo size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;