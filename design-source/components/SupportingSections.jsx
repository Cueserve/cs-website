// Cueserve — Why Us, Process, Testimonials, Clients sections

// ── CLIENTS STRIP ─────────────────────────────────────────
const ClientsStrip = () => {
  const clients = ['Supermechanic', 'SchoolSaamaan', 'Apollon', 'SuperSmart', 'Yelow', 'Fizyou', 'NewChapter', 'HobbyDistrict'];
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #E8EFF5', borderBottom: '1px solid #E8EFF5', padding: '32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
          color: '#B0C8DB', textTransform: 'uppercase', letterSpacing: '0.09em',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}>Trusted By</div>
        <div style={{ width: 1, height: 28, background: '#E8EFF5', flexShrink: 0 }} />
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', alignItems: 'center' }}>
          {clients.map(c => (
            <span key={c} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14, fontWeight: 600, color: '#C0D5E6',
              letterSpacing: '-0.01em',
            }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── WHY CUESERVE ──────────────────────────────────────────
const WhySection = () => {
  const pillars = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Minimum Supervision',
      desc: 'Once scoped, we execute independently. No daily hand-holding — you get transparent async updates and a team that takes ownership.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Fast, Stable Delivery',
      desc: 'We move quickly without sacrificing quality. Code is reviewed for 100% accuracy — no technical debt shipped to meet a deadline.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: '20+ Expert Engineers',
      desc: 'Cloud, DevOps, AI, Web, and Mobile specialists — a full-stack team so you never need to look elsewhere to scale.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
      title: 'Honest Communication',
      desc: 'We tell you what\'s feasible and what isn\'t. No overselling, no hidden surprises — just clear timelines and real numbers.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
        </svg>
      ),
      title: '24×7 Support',
      desc: 'Round-the-clock availability for maintenance and critical issues — because your product runs 24 hours and so do we.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Cost-Competitive',
      desc: 'India-based expert team means world-class engineering at a fraction of US/EU rates — without compromising on quality or communication.',
    },
  ];

  return (
    <section style={{ background: '#fff', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          {/* Left sticky header */}
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{
              display: 'inline-block', fontFamily: "'DM Sans', sans-serif",
              fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#2384C6', marginBottom: 16,
            }}>Why Cueserve</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 40, fontWeight: 700, color: '#0C385A',
              lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: 20,
            }}>
              A team that<br />delivers, not just<br />promises.
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 17, color: '#5A7A91', lineHeight: 1.7, marginBottom: 32,
            }}>
              We've built software for clients across South Africa, Australia, the US, and India. The same commitment every time.
            </p>
            {/* Stats */}
            <div style={{ display: 'flex', gap: 32 }}>
              {[['50+', 'Projects'], ['$6M+', 'Revenue delivered'], ['20+', 'Engineers']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: '#0C385A' }}>{val}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#8BA4B8', marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pillars grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {pillars.map(p => (
              <WhyCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyCard = ({ icon, title, desc }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#FAFCFE' : '#fff',
        border: `1px solid ${hov ? '#C8DFF0' : '#E8EFF5'}`,
        borderRadius: 12, padding: '22px 20px',
        transition: 'all 220ms ease',
        boxShadow: hov ? '0 4px 16px rgba(12,56,90,0.10)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 10,
        background: '#EEF6FC', display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 14,
      }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 15, fontWeight: 600, color: '#0C385A', marginBottom: 8,
      }}>{title}</h3>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13, color: '#647F93', lineHeight: 1.6,
      }}>{desc}</p>
    </div>
  );
};

// ── PROCESS ───────────────────────────────────────────────
const ProcessSection = () => {
  const steps = [
    { num: '01', title: 'Discover', desc: 'We uncover your exact requirements, listing every detail and constraint to scope the work precisely.', icon: '🔍' },
    { num: '02', title: 'Plan', desc: 'We map your concept using wireframes — outlining the skeleton before any design or code begins.', icon: '📐' },
    { num: '03', title: 'Execute', desc: 'Design takes final shape, code is reviewed for 100% accuracy, and the idea comes to life.', icon: '⚡' },
    { num: '04', title: 'Deliver', desc: 'We hand over all source files, assets, and resources — and stay on for maintenance and growth.', icon: '🎯' },
  ];

  return (
    <section style={{ background: '#0C385A', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#7DB8D8', marginBottom: 12,
          }}>How We Work</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 40, fontWeight: 700, color: '#fff',
            letterSpacing: '-0.025em',
          }}>Our Project Approach</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', top: 40, left: '12.5%', right: '12.5%',
            height: 1, background: 'rgba(35,132,198,0.25)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <div key={step.num} style={{
              background: i % 2 === 0 ? 'rgba(35,132,198,0.12)' : 'rgba(255,255,255,0.05)',
              border: `1px solid ${i % 2 === 0 ? 'rgba(35,132,198,0.25)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 12, padding: '32px 24px',
              position: 'relative', zIndex: 1,
            }}>
              {/* Number circle */}
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: i % 2 === 0 ? '#2384C6' : 'rgba(255,255,255,0.1)',
                border: `2px solid ${i % 2 === 0 ? '#2384C6' : 'rgba(255,255,255,0.2)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700,
                color: '#fff',
              }}>
                {step.num}
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18, fontWeight: 700, color: '#fff',
                marginBottom: 10,
              }}>{step.title}</h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── TESTIMONIALS ──────────────────────────────────────────
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Lindel Wabhembe',
      role: 'Co-Founder',
      company: 'The New Chapter Book Store',
      location: 'South Africa',
      text: 'If you want your job done professionally and on time, I highly recommend Team Cueserve. Very professional and will hire again in my future projects.',
      initials: 'LW',
    },
    {
      name: 'Michael T.',
      role: 'CTO',
      company: 'FinTech Startup',
      location: 'Australia',
      text: 'The team understood our complex requirements and delivered a world-class mobile app. Their 24×7 availability and honest communication made all the difference.',
      initials: 'MT',
    },
    {
      name: 'Sarah K.',
      role: 'Head of Operations',
      company: 'E-Commerce Platform',
      location: 'United States',
      text: 'Cueserve automated our entire order-processing workflow. What took a team of 6 people now runs in minutes. ROI was clear within the first month.',
      initials: 'SK',
    },
  ];

  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ background: '#F4F8FB', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
            display: 'inline-block', fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#2384C6', marginBottom: 12,
          }}>Client Stories</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 40, fontWeight: 700, color: '#0C385A', letterSpacing: '-0.025em',
          }}>What Clients Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {testimonials.map((t, i) => (
            <div key={t.name}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? '#0C385A' : '#fff',
                border: `1px solid ${active === i ? '#0C385A' : '#E8EFF5'}`,
                borderRadius: 12, padding: '28px 24px',
                cursor: 'pointer',
                boxShadow: active === i ? '0 8px 32px rgba(12,56,90,0.22)' : '0 2px 8px rgba(12,56,90,0.06)',
                transition: 'all 350ms ease',
                transform: active === i ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Quote mark */}
              <svg width="24" height="20" viewBox="0 0 24 20" fill={active === i ? 'rgba(35,132,198,0.5)' : '#D0DFEC'} style={{ marginBottom: 14 }}>
                <path d="M0 20V12.5C0 5.833 3.333 1.667 10 0l1.5 2.5C8.167 3.667 6.333 5.833 6 9h4V20H0zm14 0V12.5C14 5.833 17.333 1.667 24 0l1.5 2.5C22.167 3.667 20.333 5.833 20 9h4V20H14z"/>
              </svg>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15, color: active === i ? 'rgba(255,255,255,0.85)' : '#1E2E3D',
                lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic',
              }}>"{t.text}"</p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: active === i ? 'rgba(35,132,198,0.3)' : '#EEF6FC',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700,
                  color: active === i ? '#fff' : '#2384C6', flexShrink: 0,
                }}>{t.initials}</div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: active === i ? '#fff' : '#0C385A' }}>{t.name}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: active === i ? 'rgba(255,255,255,0.55)' : '#8BA4B8', marginTop: 2 }}>
                    {t.role}, {t.company} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: active === i ? 24 : 8, height: 8,
              borderRadius: 9999, border: 'none', cursor: 'pointer',
              background: active === i ? '#2384C6' : '#D0DFEC',
              transition: 'all 300ms ease', padding: 0,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── CTA BANNER ────────────────────────────────────────────
const CTABanner = ({ onNavigate }) => (
  <section style={{ background: '#fff', padding: '80px 32px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #0C385A 0%, #0E4A73 100%)',
        borderRadius: 20, padding: '64px 80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background circles */}
        <div style={{ position: 'absolute', right: -60, top: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(35,132,198,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 120, bottom: -80, width: 200, height: 200, borderRadius: '50%', background: 'rgba(35,132,198,0.08)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative' }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 38, fontWeight: 700, color: '#fff',
            letterSpacing: '-0.025em', marginBottom: 14, lineHeight: 1.15,
          }}>
            Ready to Build<br />Something Real?
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, maxWidth: 420,
          }}>
            We respond within 24 hours with an honest, feasible plan — no fluff, no over-promising.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0, position: 'relative' }}>
          <button onClick={() => onNavigate('Contact')} style={{
            background: '#2384C6', color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
            padding: '15px 34px', borderRadius: 8, whiteSpace: 'nowrap',
            transition: 'background 200ms',
          }}
            onMouseEnter={e => e.currentTarget.style.background = '#3991cd'}
            onMouseLeave={e => e.currentTarget.style.background = '#2384C6'}
          >
            Talk to Us Now
          </button>
          <button onClick={() => onNavigate('Services')} style={{
            background: 'transparent', color: 'rgba(255,255,255,0.75)',
            border: '1.5px solid rgba(255,255,255,0.25)', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
            padding: '14px 34px', borderRadius: 8, whiteSpace: 'nowrap',
            transition: 'border-color 200ms, color 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)'; }}
          >
            View All Services →
          </button>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { ClientsStrip, WhySection, ProcessSection, TestimonialsSection, CTABanner });
