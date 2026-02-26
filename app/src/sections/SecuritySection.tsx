import { useRef } from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const SecuritySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const checkRef = useRef<SVGPathElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-[60]"
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
              style={{ fontSize: 'clamp(28px, 3.8vw, 56px)' }}
            >
              ENTERPRISE-GRADE TRUST
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              SSO, audit logs, and compliance controls.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Security overview
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Shield Graphic */}
          <div
            ref={shieldRef}
            className="absolute animate-float"
            style={{
              right: '10%',
              top: '22%',
              width: '34vw',
              height: '40vh',
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 300 350"
              fill="none"
            >
              {/* Shield Outline */}
              <path
                d="M150 20L30 70V160C30 240 150 320 150 320C150 320 270 240 270 160V70L150 20Z"
                fill="none"
                stroke="url(#shieldGradient)"
                strokeWidth="2"
              />

              {/* Inner Shield Glow */}
              <path
                d="M150 35L45 80V155C45 225 150 295 150 295C150 295 255 225 255 155V80L150 35Z"
                fill="url(#shieldInnerGradient)"
                opacity="0.3"
              />

              {/* Checkmark */}
              <path
                ref={checkRef}
                d="M95 165L135 205L205 125"
                fill="none"
                stroke="#4F6DFF"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <defs>
                <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="shieldInnerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Small Node */}
            <div
              ref={nodeRef}
              className="absolute"
              style={{ right: '5%', bottom: '15%' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Shield size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
