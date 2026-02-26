import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sliders, Palette, Layout, Bell } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CustomizationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const slidersRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

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
        cardRef.current,
        { x: '18vw', opacity: 0, scale: 0.98 },
        { x: 0, opacity: 1, scale: 1, ease: 'none' },
        0
      );

      const sliders = slidersRef.current?.querySelectorAll('.slider-row');
      if (sliders) {
        scrollTl.fromTo(
          sliders,
          { x: '6vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.14
        );
      }

      scrollTl.fromTo(
        profileRef.current,
        { scale: 0.8, opacity: 0 },
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
        cardRef.current,
        { x: 0, rotateY: 0, opacity: 1 },
        { x: '18vw', rotateY: 8, opacity: 0, ease: 'power2.in' },
        0.7
      );

      if (sliders) {
        scrollTl.fromTo(
          sliders,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in' },
          0.7
        );
      }

      scrollTl.fromTo(
        profileRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const settings = [
    { icon: Palette, label: 'Theme', value: 'Dark mode', color: '#4F6DFF' },
    { icon: Layout, label: 'Layout', value: 'Compact', color: '#7C5CFF' },
    { icon: Bell, label: 'Notifications', value: 'Enabled', color: '#4F6DFF' },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-pinned bg-space-900 z-[70]"
    >
      {/* Gradient Wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, rgba(79, 109, 255, 0.1) 0%, transparent 60%)',
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
              MAKE IT YOURS
            </h2>
            <p
              className="text-text-secondary leading-relaxed mb-8"
              style={{ fontSize: 'clamp(14px, 1.1vw, 18px)' }}
            >
              Themes, rules, and layouts—without code.
            </p>
            <button className="btn-primary flex items-center gap-2">
              See customization
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Settings Card */}
          <div
            ref={cardRef}
            className="absolute glass-panel-sm overflow-hidden"
            style={{
              right: '6%',
              top: '18%',
              width: '44vw',
              height: '56vh',
            }}
          >
            <div className="p-6 h-full flex">
              {/* Profile Circle */}
              <div className="w-24 flex flex-col items-center pt-4">
                <div
                  ref={profileRef}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-indigo-light flex items-center justify-center animate-pulse-glow"
                >
                  <Sliders size={24} className="text-white" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-text-primary text-sm font-medium">Settings</div>
                  <div className="text-text-secondary text-xs">Personalize</div>
                </div>
              </div>

              {/* Slider Rows */}
              <div ref={slidersRef} className="flex-1 pl-6 space-y-4">
                {settings.map((setting, i) => {
                  const Icon = setting.icon;
                  return (
                    <div
                      key={i}
                      className="slider-row p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{
                              background: `${setting.color}20`,
                            }}
                          >
                            <Icon size={16} style={{ color: setting.color }} />
                          </div>
                          <span className="text-text-primary text-sm font-medium">
                            {setting.label}
                          </span>
                        </div>
                        <span className="text-text-secondary text-xs">{setting.value}</span>
                      </div>

                      {/* Slider Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full rounded-full"
                          style={{
                            width: `${60 + i * 15}%`,
                            background: `linear-gradient(90deg, ${setting.color}80, ${setting.color})`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Additional Options */}
                <div className="slider-row pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-text-secondary text-sm">Auto-save</span>
                    <div className="w-10 h-5 rounded-full bg-primary relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-text-secondary text-sm">Sync across devices</span>
                    <div className="w-10 h-5 rounded-full bg-primary relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizationSection;
