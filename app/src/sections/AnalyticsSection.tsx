import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AnalyticsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<SVGPathElement>(null);
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
        dashboardRef.current,
        { x: '18vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      // Chart draw-on animation
      if (chartRef.current) {
        const pathLength = chartRef.current.getTotalLength();
        gsap.set(chartRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });
        scrollTl.to(
          chartRef.current,
          { strokeDashoffset: 0, ease: 'none' },
          0.18
        );
      }

      scrollTl.fromTo(
        pillRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.22
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
        dashboardRef.current,
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
      className="section-pinned bg-space-900 z-40"
    >
      {/* Diagonal Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(79, 109, 255, 0.12) 0%, transparent 50%)',
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
              INSIGHTS THAT MOVE THE NEEDLE
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Real-time metrics, forecasts, and alerts.
            </p>
            <button className="btn-primary flex items-center gap-2">
              View analytics
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Dashboard Mock */}
          <div
            ref={dashboardRef}
            className="absolute glass-panel-sm overflow-hidden"
            style={{
              right: '6%',
              top: '18%',
              width: '44vw',
              height: '56vh',
            }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-text-secondary text-sm">Analytics Dashboard</div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {/* Stats Row */}
              <div className="flex gap-4 mb-6">
                {[
                  { label: 'Revenue', value: '$124.5K', change: '+12.5%' },
                  { label: 'Users', value: '8,429', change: '+8.2%' },
                  { label: 'Conversion', value: '3.24%', change: '+2.1%' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="text-text-secondary text-xs mb-1">{stat.label}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-primary font-display font-bold text-xl">
                        {stat.value}
                      </span>
                      <span className="text-green-400 text-xs">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="relative h-48">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 150"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={37.5 * i}
                      x2="400"
                      y2={37.5 * i}
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="1"
                    />
                  ))}

                  {/* Chart Line */}
                  <path
                    ref={chartRef}
                    d="M0,120 Q50,100 100,90 T200,60 T300,70 T400,30"
                    fill="none"
                    stroke="#4F6DFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Area under curve */}
                  <path
                    d="M0,120 Q50,100 100,90 T200,60 T300,70 T400,30 L400,150 L0,150 Z"
                    fill="url(#chartGradient)"
                    opacity="0.3"
                  />

                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4F6DFF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#4F6DFF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Insight Pill */}
                <div
                  ref={pillRef}
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40"
                >
                  <TrendingUp size={14} className="text-primary" />
                  <span className="text-primary text-xs font-medium">+24% this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
