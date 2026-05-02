// Cueserve — Hero Section (Vasitum-style)
// Bold split layout: headline left, animated AI visual right

const HeroSection = ({ onNavigate }) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

  const fadeIn = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section style={{
      background: '#fff',
      padding: '80px 32px 64px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Subtle top-right glow */}
      <div style={{
        position: 'absolute', top: -120, right: -120,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(35,132,198,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -80, left: '30%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(12,56,90,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>

        {/* LEFT — copy */}
        <div>
          {/* Badge */}
          <div style={{
            ...fadeIn(0),
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EEF6FC', border: '1px solid #C8DFF0',
            borderRadius: 9999, padding: '6px 14px',
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
            color: '#2384C6', marginBottom: 28,
          }}>
            <img src="assets/hero-icon-layers.svg" width="14" height="14" alt="" />
            AI-First Technology Partner
          </div>

          {/* Headline */}
          <h1 style={{
            ...fadeIn(80),
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 56, fontWeight: 700, color: '#0C385A',
            lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 22,
          }}>
            Deliver Real<br />
            <span style={{ color: '#2384C6' }}>AI Outcomes</span><br />
            at Enterprise Scale
          </h1>

          {/* Sub */}
          <p style={{
            ...fadeIn(150),
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 18, color: '#5A7A91', lineHeight: 1.7,
            marginBottom: 36, maxWidth: 480,
          }}>
            GenAI, Agentic AI, and workflow automation that boosts efficiency and significantly reduces operational costs — delivered by a team that actually cares.
          </p>

          {/* CTAs */}
          <div style={{ ...fadeIn(220), display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
            <button onClick={() => onNavigate('Contact')}
              style={{
                background: '#0C385A', color: '#fff', border: 'none', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 15,
                padding: '14px 30px', borderRadius: 6, transition: 'background 200ms, transform 120ms',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a4a6b'}
              onMouseLeave={e => e.currentTarget.style.background = '#0C385A'}
              onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Book a Free Call
            </button>
            <button onClick={() => onNavigate('Services')}
              style={{
                background: 'transparent', color: '#0C385A',
                border: '1.5px solid #C8DFF0', cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15,
                padding: '14px 30px', borderRadius: 6, transition: 'border-color 200ms, color 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#2384C6'; e.currentTarget.style.color = '#2384C6'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#C8DFF0'; e.currentTarget.style.color = '#0C385A'; }}
            >
              See Our Services →
            </button>
          </div>

          {/* Stats row */}
          <div style={{
            ...fadeIn(300),
            display: 'flex', gap: 40,
            borderTop: '1px solid #E8EFF5', paddingTop: 28,
          }}>
            {[['50+', 'Projects Delivered'], ['100%', 'Client Satisfaction'], ['24×7', 'Support']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#0C385A', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8BA4B8', marginTop: 5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — AI dashboard visual */}
        <div style={{ ...fadeIn(180), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AIDashboardVisual />
        </div>
      </div>
    </section>
  );
};

// Hero illustration — professional + floating UI cards (inspired by reference image)
const AIDashboardVisual = () => {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setTick(x => (x + 1) % 3), 2200);
    return () => clearInterval(t);
  }, []);

  const tasks = [
    { name: 'Automate Invoicing', status: 'done' },
    { name: 'Deploy RAG Pipeline', status: tick === 0 ? 'active' : 'done' },
    { name: 'Integrate CRM Agent', status: tick <= 1 ? 'pending' : 'active' },
  ];

  return (
    <div style={{
      position: 'relative',
      width: 460, height: 460,
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* ── Background blob shape ── */}
      <img
        src="assets/hero-blob.svg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}
      />

      {/* ── Central person illustration ── */}
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -52%)',
        zIndex: 1,
        width: 220, height: 280,
      }}>
        <img src="assets/hero-person.svg" alt="Professional" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* ── Floating card: Task list (top-left) ── */}
      <div style={{
        position: 'absolute', left: -10, top: 30, zIndex: 3,
        background: '#fff',
        borderRadius: 14, padding: '14px 16px',
        boxShadow: '0 8px 32px rgba(12,56,90,0.16)',
        border: '1px solid #E8EFF5',
        minWidth: 200,
        animation: 'floatA 4s ease-in-out infinite',
      }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#8BA4B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>AI Tasks</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {tasks.map(task => (
            <div key={task.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Avatar circle */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%',
                background: task.status === 'done' ? '#EEF6FC' : task.status === 'active' ? '#0C385A' : '#F4F8FB',
                border: `1.5px solid ${task.status === 'done' ? '#C8DFF0' : task.status === 'active' ? '#0C385A' : '#E8EFF5'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <img src="assets/hero-icon-person.svg" width="12" height="12" alt=""
                  style={{ filter: task.status === 'active' ? 'brightness(0) invert(1)' : 'none' }} />
              </div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                color: task.status === 'active' ? '#0C385A' : '#647F93',
                fontWeight: task.status === 'active' ? 600 : 400,
                flex: 1,
              }}>{task.name}</span>
              {/* Status icon */}
              {task.status === 'done' && (
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#1A9B5C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="assets/hero-icon-checkmark.svg" width="10" height="10" alt="done" />
                </div>
              )}
              {task.status === 'active' && (
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#2384C6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                </div>
              )}
              {task.status === 'pending' && (
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#F4F8FB', border: '1.5px solid #D0DFEC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#B0C8DB' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Floating card: Chatbot (top-right) ── */}
      <div style={{
        position: 'absolute', right: -10, top: 50, zIndex: 3,
        background: '#fff',
        borderRadius: 14, padding: '12px 14px',
        boxShadow: '0 8px 32px rgba(12,56,90,0.14)',
        border: '1px solid #E8EFF5',
        width: 170,
        animation: 'floatB 5s ease-in-out infinite',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2384C6' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 600, color: '#0C385A' }}>AI Chatbot</span>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 3 }}>
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D0DFEC' }} />
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D0DFEC' }} />
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#D0DFEC' }} />
          </div>
        </div>
        {/* Chat bubbles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[80, 60, 90, 50].map((w, i) => (
            <div key={i} style={{
              height: 8, borderRadius: 9999,
              background: i % 2 === 0 ? '#EEF6FC' : '#F4F8FB',
              width: `${w}%`,
              alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
            }} />
          ))}
        </div>
      </div>

      {/* ── Floating card: Dashboard grid (bottom-left) ── */}
      <div style={{
        position: 'absolute', left: 0, bottom: 20, zIndex: 3,
        background: '#fff',
        borderRadius: 14, padding: '12px 14px',
        boxShadow: '0 8px 32px rgba(12,56,90,0.14)',
        border: '1px solid #E8EFF5',
        width: 190,
        animation: 'floatC 4.5s ease-in-out infinite',
      }}>
        {/* Top bar */}
        <div style={{ height: 8, background: '#0C385A', borderRadius: 6, marginBottom: 8, width: '100%' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5, marginBottom: 6 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              background: i === 0 ? '#EEF6FC' : '#F4F8FB',
              border: `1px solid ${i === 0 ? '#C8DFF0' : '#E8EFF5'}`,
              borderRadius: 6, padding: '6px 7px',
            }}>
              <div style={{ height: 5, background: i === 0 ? '#2384C6' : '#D0DFEC', borderRadius: 3, marginBottom: 4, width: '70%' }} />
              <div style={{ height: 4, background: '#E8EFF5', borderRadius: 3, width: '90%' }} />
            </div>
          ))}
        </div>
        {/* Saved tag */}
        <div style={{
          background: '#F4F8FB', borderRadius: 6, padding: '6px 8px',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: i === 0 ? '#2384C6' : '#D0DFEC' }} />
            ))}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ height: 4, background: '#D0DFEC', borderRadius: 3, width: '60%', marginBottom: 3 }} />
            <div style={{ height: 4, background: '#E8EFF5', borderRadius: 3, width: '80%', marginBottom: 3 }} />
            <div style={{ height: 4, background: '#E8EFF5', borderRadius: 3, width: '50%' }} />
          </div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#2384C6', whiteSpace: 'nowrap' }}>Saved</div>
        </div>
      </div>

      {/* ── Floating pill: stat (bottom-right) ── */}
      <div style={{
        position: 'absolute', right: 10, bottom: 60, zIndex: 3,
        background: '#0C385A',
        borderRadius: 12, padding: '10px 16px',
        boxShadow: '0 6px 24px rgba(12,56,90,0.22)',
        animation: 'floatB 6s ease-in-out infinite',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(35,132,198,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="assets/hero-icon-pulse.svg" width="16" height="16" alt="" />
        </div>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1 }}>68%</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Cost Reduced</div>
        </div>
      </div>

      {/* Float keyframes */}
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-10px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
      `}</style>
    </div>
  );
};

Object.assign(window, { HeroSection });
