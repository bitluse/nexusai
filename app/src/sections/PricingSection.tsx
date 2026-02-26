import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
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
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'For individuals exploring NexusAI.',
      features: [
        'Up to 3 workflows',
        'Basic integrations',
        'Community support',
        '1GB storage',
      ],
      cta: 'Get started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$12',
      period: '/user/month',
      description: 'For teams shipping daily.',
      features: [
        'Unlimited workflows',
        'Advanced integrations',
        'Priority support',
        '100GB storage',
        'Team collaboration',
        'Analytics dashboard',
      ],
      cta: 'Start trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For orgs that need control.',
      features: [
        'Everything in Pro',
        'SSO & SAML',
        'Audit logs',
        'Dedicated support',
        'Unlimited storage',
        'Custom contracts',
      ],
      cta: 'Contact sales',
      highlighted: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-space-900 py-24 z-[100]"
      id="pricing"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(79, 109, 255, 0.12), rgba(7, 10, 18, 0) 50%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2
            className="font-display font-bold text-text-primary uppercase tracking-tight mb-4"
            style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
          >
            SIMPLE PRICING
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Start free. Upgrade when you're ready.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card glass-panel-sm p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-primary/40 shadow-glow scale-105 md:scale-110'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
                    <Zap size={12} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-text-primary text-4xl">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-text-secondary text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-text-secondary text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.highlighted
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
