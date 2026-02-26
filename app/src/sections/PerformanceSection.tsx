import { useRef } from 'react';
import { ArrowRight, Zap, Gauge } from 'lucide-react';

const PerformanceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gaugeRef = useRef<HTMLDivElement>(null);
  const hexagonRef = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-[80]"
    >
      {/* Bright Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(79, 109, 255, 0.22), rgba(7, 10, 18, 0) 55%)',
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
              FAST AT SCALE
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Optimized infra that keeps up with your growth.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Read the benchmark
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Gauge Graphic */}
          <div
            ref={gaugeRef}
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
              {/* Outer Ring */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="2"
                strokeDasharray="12 8"
                opacity="0.6"
              />

              {/* Inner Ring */}
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="rgba(79, 109, 255, 0.2)"
                strokeWidth="1"
              />

              {/* Progress Arc */}
              <path
                d="M 80 200 A 120 120 0 1 1 320 200"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Speed Markers */}
              {[0, 45, 90, 135, 180].map((angle, i) => {
                const rad = ((angle - 90) * Math.PI) / 180;
                const x1 = 200 + 130 * Math.cos(rad);
                const y1 = 200 + 130 * Math.sin(rad);
                const x2 = 200 + 140 * Math.cos(rad);
                const y2 = 200 + 140 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#4F6DFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              })}

              <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7C5CFF" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F6DFF" />
                  <stop offset="100%" stopColor="#7C5CFF" />
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
                  <Gauge size={28} className="text-white" />
                </div>
              </div>
            </div>

            {/* Small Node */}
            <div
              ref={nodeRef}
              className="absolute"
              style={{ right: '10%', bottom: '20%' }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/30 border border-primary/50 flex items-center justify-center animate-float">
                <Zap size={18} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
