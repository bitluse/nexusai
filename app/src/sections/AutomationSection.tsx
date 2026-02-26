import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AutomationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

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
        starRef.current,
        { scale: 0.75, rotate: -25, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        nodeRef.current,
        { y: '6vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): Hold

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
        starRef.current,
        { scale: 1, opacity: 1 },
        { scale: 1.1, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        nodeRef.current,
        { y: 0, opacity: 1 },
        { y: '-4vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-30"
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(79, 109, 255, 0.16), rgba(7, 10, 18, 0) 60%)',
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
        <div className="relative w-full h-full p-[6%]">
          {/* Left Content */}
          <div ref={contentRef} className="absolute left-[6%] top-[10%] max-w-[34vw]">
            <h2
              className="font-display font-bold text-text-primary uppercase tracking-tight leading-[0.95] mb-6"
              style={{ fontSize: 'clamp(32px, 4.2vw, 64px)' }}
            >
              SMART ACTIONS
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Trigger workflows with natural language.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Explore automation
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Star Graphic */}
          <div
            ref={starRef}
            className="absolute animate-subtle-rotate"
            style={{
              right: '8%',
              top: '22%',
              width: '38vw',
              height: '38vw',
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Four crossing bars forming a star */}
              <rect
                x="190"
                y="40"
                width="20"
                height="320"
                rx="10"
                fill="url(#starGradient1)"
              />
              <rect
                x="40"
                y="190"
                width="320"
                height="20"
                rx="10"
                fill="url(#starGradient2)"
              />
              <rect
                x="85"
                y="85"
                width="20"
                height="230"
                rx="10"
                transform="rotate(45 95 95)"
                fill="url(#starGradient1)"
                opacity="0.7"
              />
              <rect
                x="85"
                y="275"
                width="20"
                height="230"
                rx="10"
                transform="rotate(-45 95 285)"
                fill="url(#starGradient2)"
                opacity="0.7"
              />

              {/* Center glow */}
              <circle
                cx="200"
                cy="200"
                r="40"
                fill="url(#centerGlow)"
              />

              {/* Gradients */}
              <defs>
                <linearGradient id="starGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#4F6DFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4F6DFF" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="starGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C5CFF" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#7C5CFF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="centerGlow">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#4F6DFF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            {/* Small Node */}
            <div
              ref={nodeRef}
              className="absolute"
              style={{ right: '15%', top: '10%' }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center animate-float">
                <Sparkles size={18} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
