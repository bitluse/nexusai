import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Mail, Send, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panelRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { x: '6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-space-900 py-24 z-[120]"
      id="contact"
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Panel */}
        <div
          ref={panelRef}
          className="glass-panel p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2
                className="font-display font-bold text-text-primary uppercase tracking-tight leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                READY WHEN YOU ARE
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Get a demo or start building today.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="btn-primary flex items-center gap-2">
                  Start free trial
                  <ArrowRight size={18} />
                </button>
                <button className="btn-secondary flex items-center gap-2">
                  <Mail size={18} />
                  Contact sales
                </button>
              </div>
            </div>

            {/* Form */}
            <div ref={formRef}>
              <div className="glass-panel-sm p-6 lg:p-8">
                <h3 className="text-text-primary font-display font-semibold text-xl mb-6">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-text-secondary text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-text-secondary text-sm mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        Message sent!
                        <Check size={18} />
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
