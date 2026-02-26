import { useRef, useState } from 'react';
import { ArrowRight, Mail, Send, Check } from 'lucide-react';

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
      className="relative bg-space-900 py-20 md:py-24 z-[120]"
      id="contact"
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glass Panel */}
        <div
          ref={panelRef}
          className="glass-panel p-5 sm:p-7 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
              <h2
                className="font-display font-bold text-text-primary uppercase tracking-tight leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                READY WHEN YOU ARE
              </h2>
              <p className="text-text-secondary text-base sm:text-lg">
                Get a demo or start building today.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
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
            <div ref={formRef} className="mt-8 lg:mt-0">
              <div className="glass-panel-sm p-5 sm:p-6 lg:p-8">
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
