import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Zap, Mail, FileText, MessageSquare, Database, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const IntegrationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        panelRef.current,
        { x: '40vw', rotateY: 18, opacity: 0 },
        { x: 0, rotateY: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: '-18vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      scrollTl.fromTo(
        orbitRef.current,
        { scale: 0.85, opacity: 0, rotate: -12 },
        { scale: 1, opacity: 1, rotate: 0, ease: 'none' },
        0
      );

      const icons = iconsRef.current?.querySelectorAll('.orbit-icon');
      if (icons) {
        scrollTl.fromTo(
          icons,
          { scale: 0.7, opacity: 0, y: -10 },
          { scale: 1, opacity: 1, y: 0, stagger: 0.02, ease: 'none' },
          0.1
        );
      }

      scrollTl.fromTo(
        centerRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Hold position

      // EXIT (70-100%)
      scrollTl.fromTo(
        panelRef.current,
        { x: 0, rotateY: 0, opacity: 1 },
        { x: '-28vw', rotateY: -10, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: 0, opacity: 1 },
        { x: '-14vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        orbitRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.08, opacity: 0, ease: 'power2.in' },
        0.7
      );

      if (icons) {
        scrollTl.fromTo(
          icons,
          { scale: 1, opacity: 1 },
          { scale: 0.92, opacity: 0, ease: 'power2.in' },
          0.7
        );
      }

      scrollTl.fromTo(
        centerRef.current,
        { scale: 1, opacity: 1 },
        { scale: 0.85, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const integrations = [
    { icon: Zap, color: '#4F6DFF', angle: 0 },
    { icon: Mail, color: '#7C5CFF', angle: 60 },
    { icon: FileText, color: '#4F6DFF', angle: 120 },
    { icon: MessageSquare, color: '#7C5CFF', angle: 180 },
    { icon: Database, color: '#4F6DFF', angle: 240 },
    { icon: Cloud, color: '#7C5CFF', angle: 300 },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-20"
      id="solutions"
    >
      {/* Aurora Background */}
      <div className="aurora-bg" />

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
        <div className="relative w-full h-full p-[6%]">
          {/* Left Content */}
          <div ref={contentRef} className="absolute left-[6%] top-[10%] max-w-[34vw]">
            <h2
              className="font-display font-bold text-text-primary uppercase tracking-tight leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(32px, 4.2vw, 64px)' }}
            >
              CONNECT EVERYTHING
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Sync your tools, files, and messages in one place.
            </p>
            <button className="btn-primary flex items-center gap-2">
              See integrations
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Orbit Graphic */}
          <div
            ref={orbitRef}
            className="absolute"
            style={{
              right: '6%',
              top: '18%',
              width: '46vw',
              height: '46vw',
            }}
          >
            {/* Orbit Ring */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="rgba(79, 109, 255, 0.25)"
                strokeWidth="1"
                strokeDasharray="8 8"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="rgba(124, 92, 255, 0.15)"
                strokeWidth="1"
              />
            </svg>

            {/* Integration Icons */}
            <div ref={iconsRef} className="absolute inset-0">
              {integrations.map((item, i) => {
                const radius = 180;
                const angleRad = (item.angle * Math.PI) / 180;
                const x = 50 + (radius / 400) * 100 * Math.cos(angleRad);
                const y = 50 + (radius / 400) * 100 * Math.sin(angleRad);
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="orbit-icon absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.color}20`,
                        border: `1px solid ${item.color}50`,
                        boxShadow: `0 4px 20px ${item.color}30`,
                      }}
                    >
                      <Icon size={24} style={{ color: item.color }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center Hexagon */}
            <div
              ref={centerRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse-glow">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
