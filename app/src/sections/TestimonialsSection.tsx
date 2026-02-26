import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 75%',
            end: 'top 55%',
            scrub: 1,
          },
        }
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      quote: "NexusAI cut our weekly reporting time by 70%. It's like having an extra analyst on the team.",
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Inc.',
      avatar: '/images/avatar_01.jpg',
    },
    {
      quote: "The automations feel like magic. I set up a workflow once and it just runs perfectly every time.",
      name: 'Marcus Johnson',
      role: 'Product Manager',
      company: 'ScaleUp Co.',
      avatar: '/images/avatar_02.jpg',
    },
    {
      quote: "Finally, a tool the whole team actually uses. The interface is intuitive and the support is incredible.",
      name: 'Elena Rodriguez',
      role: 'Head of Engineering',
      company: 'DataFirst',
      avatar: '/images/avatar_03.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-space-800 py-24 z-[110]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 100%, rgba(79, 109, 255, 0.08), rgba(7, 10, 18, 0) 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className="font-display font-bold text-text-primary uppercase tracking-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            LOVED BY TEAMS
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Here's what operators say.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card glass-panel-sm p-8 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Quote size={18} className="text-primary" />
              </div>

              {/* Quote Text */}
              <p className="text-text-primary text-lg leading-relaxed mb-8 flex-1">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <div className="text-text-primary font-medium">{testimonial.name}</div>
                  <div className="text-text-secondary text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
