import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const uiMockRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Load animation (auto-play on mount)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background glow fade in
      tl.fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        0
      );

      // Glass panel entrance
      tl.fromTo(
        panelRef.current,
        { y: 24, scale: 0.985, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.9 },
        0.1
      );

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(
          words,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.05 },
          0.3
        );
      }

      // Subheadline + CTA
      tl.fromTo(
        [subheadlineRef.current, ctaRef.current],
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        0.5
      );

      // UI Mock entrance
      tl.fromTo(
        uiMockRef.current,
        { x: '8vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, duration: 1 },
        0.4
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-10"
      id="product"
    >
      {/* Background Glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(79, 109, 255, 0.22), rgba(7, 10, 18, 0) 60%)',
        }}
      />

      {/* Glass Panel */}
      <div
        ref={panelRef}
        className="glass-panel absolute"
        style={{
          width: '84vw',
          height: '78vh',
          left: '50%',
          top: '52%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Content Container */}
        <div className="relative w-full h-full p-[6%]">
          {/* Left Content */}
          <div className="absolute left-[6%] top-[10%] max-w-[38vw]">
            {/* Headline */}
            <div ref={headlineRef} className="mb-6">
              <h1 className="font-display font-bold text-text-primary uppercase tracking-tight leading-[0.95]"
                style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
              >
                <span className="word inline-block">AI</span>{' '}
                <span className="word inline-block">THAT</span>{' '}
                <span className="word inline-block">RUNS</span>{' '}
                <span className="word inline-block">YOUR</span>{' '}
                <span className="word inline-block">WORKFLOW</span>
              </h1>
            </div>

            {/* Subheadline */}
            <div ref={subheadlineRef} className="mb-8">
              <p
                className="text-text-secondary leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.1vw, 18px)', maxWidth: '34vw' }}
              >
                NexusAI connects your tools, automates the busywork, and surfaces
                insights—so your team can focus on what matters.
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <button className="btn-primary flex items-center gap-2">
                Start free trial
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Play size={18} />
                Watch demo
              </button>
            </div>
          </div>

          {/* Right UI Mock */}
          <div
            ref={uiMockRef}
            className="absolute right-[5%] top-[14%] w-[44vw] h-[56vh]"
          >
            {/* Workflow Nodes UI */}
            <div className="relative w-full h-full">
              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(79, 109, 255, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(79, 109, 255, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Central Node */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse-glow">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white"
                    >
                      <path
                        d="M12 2L2 7L12 12L22 7L12 2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 17L12 22L22 17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12L12 17L22 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Satellite Nodes */}
              {[
                { x: '15%', y: '20%', icon: 'Z', color: '#4F6DFF' },
                { x: '75%', y: '15%', icon: 'S', color: '#7C5CFF' },
                { x: '80%', y: '60%', icon: 'M', color: '#4F6DFF' },
                { x: '10%', y: '65%', icon: 'D', color: '#7C5CFF' },
                { x: '50%', y: '85%', icon: 'A', color: '#4F6DFF' },
              ].map((node, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{ left: node.x, top: node.y }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg"
                    style={{
                      background: `${node.color}20`,
                      border: `1px solid ${node.color}60`,
                      boxShadow: `0 4px 20px ${node.color}30`,
                    }}
                  >
                    {node.icon}
                  </div>
                  {/* Connection Line */}
                  <svg
                    className="absolute pointer-events-none"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '200px',
                      height: '200px',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <line
                      x1="28"
                      y1="28"
                      x2={i % 2 === 0 ? '120' : '80'}
                      y2={i % 2 === 0 ? '80' : '120'}
                      stroke={node.color}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      opacity="0.4"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
