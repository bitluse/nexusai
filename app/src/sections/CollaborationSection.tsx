import { useRef } from 'react';
import { ArrowRight, Users } from 'lucide-react';

const CollaborationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

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
