import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CollaborationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

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
        imageRef.current,
        { x: '18vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        pillRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'none' },
        0.18
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
        imageRef.current,
        { x: 0, rotateY: 0, opacity: 1 },
        { x: '18vw', rotateY: 8, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        pillRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-50"
    >
      {/* Purple Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 60% 50%, rgba(124, 92, 255, 0.14), rgba(7, 10, 18, 0) 55%)',
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
              BUILT FOR TEAMS
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Comments, tasks, and approvals—without the chaos.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Meet the workspace
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Team Image */}
          <div
            ref={imageRef}
            className="absolute overflow-hidden rounded-3xl"
            style={{
              right: '6%',
              top: '18%',
              width: '44vw',
              height: '56vh',
            }}
          >
            <img
              src="/images/team_collab.jpg"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />

            {/* Status Pill Overlay */}
            <div
              ref={pillRef}
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full glass-panel-sm"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-text-primary text-sm font-medium">4 active now</span>
              <Users size={14} className="text-text-secondary ml-1" />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-900/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
