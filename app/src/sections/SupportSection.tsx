import { useRef } from 'react';
import { ArrowRight, HelpCircle, MessageCircle, BookOpen, LifeBuoy } from 'lucide-react';

const SupportSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const hexagonRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-[90]"
    >
      {/* Diagonal Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(225deg, rgba(79, 109, 255, 0.12) 0%, transparent 50%)',
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
              style={{ fontSize: 'clamp(28px, 3.6vw, 52px)' }}
            >
              HELP THAT ACTUALLY HELPS
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Docs, chat, and a community that ships.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Visit help center
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Support Graphic */}
          <div
            ref={circleRef}
            className="absolute"
            style={{
              right: '8%',
              top: '20%',
              width: '38vw',
              height: '38vw',
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Main Circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="url(#supportGradient)"
                strokeWidth="2"
                opacity="0.6"
              />

              {/* Inner Circle */}
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="rgba(79, 109, 255, 0.15)"
                strokeWidth="1"
              />

              {/* Support Icons Ring */}
              {[0, 90, 180, 270].map((angle, i) => {
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = 200 + 160 * Math.cos(rad);
                const y = 200 + 160 * Math.sin(rad);
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="8"
                    fill="#4F6DFF"
                    opacity="0.5"
                  />
                );
              })}

              <defs>
                <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Hexagon */}
            <div
              ref={hexagonRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-24 h-24 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center animate-pulse-glow">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <HelpCircle size={28} className="text-white" />
                </div>
              </div>
            </div>

            {/* Floating Support Icons */}
            <div
              ref={nodeRef}
              className="absolute"
              style={{ right: '5%', bottom: '15%' }}
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center animate-float">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-indigo-light/30 border border-indigo-light/50 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <BookOpen size={18} className="text-indigo-light" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <LifeBuoy size={18} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
