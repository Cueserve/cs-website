// Cueserve — Features / Services Tabs Section (Vasitum-style)
// Tab bar selects a service; left shows description + bullets; right shows visual mockup

const FEATURES = [
  {
    id: 'genai',
    tab: 'GenAI',
    title: 'Large Language Model Integration',
    desc: 'Embed production-grade AI directly into your products and workflows — with custom fine-tuning, retrieval-augmented generation, and enterprise guardrails built in.',
    bullets: [
      'Custom LLM fine-tuning on your domain data',
      'RAG pipelines for accurate, grounded responses',
      'Enterprise guardrails & compliance controls',
      'Streaming APIs, embeddings & vector search',
    ],
    visual: <GenAIVisual />,
    tag: 'GenAI Integration',
    color: '#2384C6',
  },
  {
    id: 'agentic',
    tab: 'Agentic AI',
    title: 'Autonomous Agents for Complex Tasks',
    desc: 'Deploy AI agents that reason, plan, and execute multi-step tasks independently — from research and code generation to data operations and decision-making.',
    bullets: [
      'Multi-agent orchestration frameworks',
      'Tool-use: browse, search, write, execute code',
      'Human-in-the-loop checkpoints',
      'Observability, logging & rollback controls',
    ],
    visual: <AgenticVisual />,
    tag: 'Agentic AI',
    color: '#0C385A',
  },
  {
    id: 'automation',
    tab: 'Automation',
    title: 'End-to-End Workflow Automation',
    desc: 'Connect your systems, eliminate manual bottlenecks, and unlock measurable efficiency gains with AI-driven process automation built for your specific operations.',
    bullets: [
      'Process mapping & intelligent trigger design',
      'Cross-system API integrations',
      'Automated exception handling & escalation',
      'Real-time monitoring dashboards',
    ],
    visual: <AutomationVisual />,
    tag: 'Workflow Automation',
    color: '#1A6B9A',
  },
  {
    id: 'data',
    tab: 'Data Systems',
    title: 'Analytics, Dashboards & Intelligence',
    desc: 'Turn raw data into decisions. We build analytics pipelines, operational dashboards, and intelligence layers that scale with your business and surface what matters.',
    bullets: [
      'Data warehouse design & ETL pipelines',
      'Real-time analytics & BI dashboards',
      'Predictive models & anomaly detection',
      'Self-serve reporting for non-technical teams',
    ],
    visual: <DataVisual />,
    tag: 'Data Systems',
    color: '#0E5075',
  },
  {
    id: 'web',
    tab: 'Web & Mobile',
    title: 'Modern Web & Mobile Applications',
    desc: 'From marketing sites to full SaaS products and cross-platform mobile apps — clean code, great UX, and ongoing maintenance support baked in from day one.',
    bullets: [
      'Responsive web apps & marketing sites',
      'Cross-platform mobile (React Native / Flutter)',
      'Performance-first architecture',
      '24×7 maintenance & iteration support',
    ],
    visual: <WebVisual />,
    tag: 'Web & Mobile',
    color: '#2384C6',
  },
];

// ── Mini visuals for each tab ──────────────────────────────

function GenAIVisual() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 1600);
    return () => clearInterval(t);
  }, []);
  const msgs = [
    { role: 'user', text: 'Summarise Q3 revenue by region' },
    { role: 'ai', text: 'Analysing your data warehouse…' },
    { role: 'ai', text: 'APAC: ₹4.2Cr ↑18% | EU: €1.8M ↑6% | US: $3.1M ↑22%' },
    { role: 'user', text: 'Which region needs attention?' },
  ];
  return (
    <div style={{ background: '#F4F8FB', borderRadius: 12, border: '1px solid #E8EFF5', padding: 20, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#8BA4B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 14 }}>AI Chat Interface</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {msgs.slice(0, step + 1).map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '80%', padding: '9px 13px', borderRadius: m.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
              background: m.role === 'user' ? '#0C385A' : '#fff',
              color: m.role === 'user' ? '#fff' : '#1E2E3D',
              fontSize: 13, lineHeight: 1.5,
              border: m.role === 'ai' ? '1px solid #E8EFF5' : 'none',
              boxShadow: m.role === 'ai' ? '0 2px 8px rgba(12,56,90,0.06)' : 'none',
            }}>{m.text}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, background: '#fff', border: '1px solid #D0DFEC', borderRadius: 8, padding: '8px 12px', fontSize: 13, color: '#B0C8DB' }}>Ask anything about your data…</div>
        <div style={{ width: 34, height: 34, background: '#2384C6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </div>
      </div>
    </div>
  );
}

function AgenticVisual() {
  const nodes = [
    { label: 'Orchestrator', x: 50, y: 10, main: true },
    { label: 'Research Agent', x: 10, y: 55 },
    { label: 'Code Agent', x: 50, y: 55 },
    { label: 'Data Agent', x: 90, y: 55 },
    { label: 'Output', x: 50, y: 90, out: true },
  ];
  const edges = [[0,1],[0,2],[0,3],[1,4],[2,4],[3,4]];
  return (
    <div style={{ background: '#F4F8FB', borderRadius: 12, border: '1px solid #E8EFF5', padding: 20, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#8BA4B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>Agent Topology</div>
      <div style={{ position: 'relative', height: 180 }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line key={i}
              x1={nodes[a].x} y1={nodes[a].y + 5}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="#D0DFEC" strokeWidth="0.8" strokeDasharray="2,2"
            />
          ))}
        </svg>
        {nodes.map(n => (
          <div key={n.label} style={{
            position: 'absolute',
            left: `${n.x}%`, top: `${n.y}%`,
            transform: 'translate(-50%, -50%)',
            background: n.main ? '#0C385A' : n.out ? '#1A9B5C' : '#fff',
            border: `1.5px solid ${n.main ? '#0C385A' : n.out ? '#1A9B5C' : '#D0DFEC'}`,
            borderRadius: 8, padding: '5px 10px',
            fontSize: 11, fontWeight: 600,
            color: n.main || n.out ? '#fff' : '#1E2E3D',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(12,56,90,0.1)',
          }}>{n.label}</div>
        ))}
      </div>
    </div>
  );
}

function AutomationVisual() {
  const steps = ['Trigger', 'Validate', 'Transform', 'Route', 'Notify'];
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % steps.length), 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background: '#F4F8FB', borderRadius: 12, border: '1px solid #E8EFF5', padding: 20, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: '#8BA4B8', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 14 }}>Workflow Pipeline</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 20 }}>
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1,
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                background: i <= active ? '#0C385A' : '#E8EFF5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.4s',
              }}>
                {i < active ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: i === active ? '#2384C6' : '#B0C8DB' }} />
                )}
              </div>
              <span style={{ fontSize: 10, color: i <= active ? '#0C385A' : '#8BA4B8', fontWeight: i === active ? 600 : 400, textAlign: 'center' }}>{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ height: 1, flex: 0.4, background: i < active ? '#0C385A' : '#E8EFF5', marginBottom: 18, transition: 'background 0.4s' }} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #E8EFF5', borderRadius: 8, padding: '12px 14px' }}>
        <div style={{ fontSize: 12, color: '#2384C6', fontWeight: 600, marginBottom: 4 }}>Processing: {steps[active]}</div>
        <div style={{ fontSize: 12, color: '#8BA4B8' }}>12,840 records handled · 0 errors · avg 1.2ms/record</div>
      </div>
    </div>
  );
}

function DataVisual() {
  const bars = [42, 68, 55, 80, 63, 90, 74];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div style={{ background: '#F4F8FB', borderRadius: 12, border: '1px solid #E8EFF5', padding: 20, fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#8BA4B8', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Weekly Performance</div>
        <div style={{ fontSize: 12, color: '#1A9B5C', fontWeight: 600 }}>↑ 18.4%</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 90, marginBottom: 8 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
            <div style={{
              width: '100%', borderRadius: '3px 3px 0 0',
              height: `${h}%`,
              background: i === 5 ? '#2384C6' : '#D0DFEC',
              transition: 'height 0.5s ease',
            }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {labels.map((l, i) => (
          <div key={l} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: i === 5 ? '#2384C6' : '#B0C8DB', fontWeight: i === 5 ? 600 : 400 }}>{l}</div>
        ))}
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div style={{ background: '#F4F8FB', borderRadius: 12, border: '1px solid #E8EFF5', overflow: 'hidden', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ background: '#E8EFF5', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 4, padding: '3px 8px', fontSize: 11, color: '#B0C8DB' }}>https://yourproduct.app</div>
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ background: '#0C385A', borderRadius: 6, padding: '10px 14px', marginBottom: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ width: 50, height: 6, background: 'rgba(255,255,255,0.4)', borderRadius: 3 }} />
          <div style={{ display: 'flex', gap: 6 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 24, height: 6, background: 'rgba(255,255,255,0.25)', borderRadius: 3 }} />)}
          </div>
          <div style={{ background: '#2384C6', borderRadius: 4, padding: '4px 10px', fontSize: 10, color: '#fff', fontWeight: 600 }}>Get Started</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ background: '#fff', border: '1px solid #E8EFF5', borderRadius: 6, padding: '10px 10px' }}>
              <div style={{ width: '60%', height: 5, background: '#D0DFEC', borderRadius: 3, marginBottom: 6 }} />
              <div style={{ width: '80%', height: 4, background: '#E8EFF5', borderRadius: 3, marginBottom: 4 }} />
              <div style={{ width: '50%', height: 4, background: '#E8EFF5', borderRadius: 3 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────

const FeaturesSection = ({ onNavigate }) => {
  const [active, setActive] = React.useState(0);
  const f = FEATURES[active];

  return (
    <section style={{ background: '#F4F8FB', padding: '96px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{
            display: 'inline-block', fontFamily: "'DM Sans', sans-serif",
            fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#2384C6', marginBottom: 12,
          }}>What We Do</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 40, fontWeight: 700, color: '#0C385A',
            letterSpacing: '-0.025em', marginBottom: 14,
          }}>One Partner. Every AI Need.</h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 17, color: '#5A7A91', maxWidth: 520, margin: '0 auto', lineHeight: 1.65,
          }}>
            From language models to agentic pipelines to the web product people use — we ship it all.
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 6,
          background: '#fff', border: '1px solid #E8EFF5',
          borderRadius: 12, padding: 6, marginBottom: 40,
          width: 'fit-content', margin: '0 auto 40px',
          boxShadow: '0 2px 8px rgba(12,56,90,0.06)',
        }}>
          {FEATURES.map((feat, i) => (
            <button key={feat.id} onClick={() => setActive(i)}
              style={{
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                padding: '9px 20px', borderRadius: 8, border: 'none', cursor: 'pointer',
                background: active === i ? '#0C385A' : 'transparent',
                color: active === i ? '#fff' : '#5A7A91',
                transition: 'all 200ms ease',
              }}>
              {feat.tab}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div style={{
          background: '#fff', border: '1px solid #E8EFF5',
          borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(12,56,90,0.08)',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
        }}>
          {/* Left: text */}
          <div style={{ padding: '48px 44px', borderRight: '1px solid #E8EFF5' }}>
            <span style={{
              display: 'inline-block', background: '#EEF6FC', color: '#2384C6',
              borderRadius: 4, padding: '4px 10px', fontSize: 11, fontWeight: 600,
              fontFamily: "'DM Sans', sans-serif", marginBottom: 18, letterSpacing: '0.04em',
            }}>{f.tag}</span>

            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 26, fontWeight: 700, color: '#0C385A',
              lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: 16,
            }}>{f.title}</h3>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16, color: '#5A7A91', lineHeight: 1.7, marginBottom: 28,
            }}>{f.desc}</p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {f.bullets.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%',
                    background: '#EEF6FC', border: '1px solid #C8DFF0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2384C6" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#1E2E3D', lineHeight: 1.55 }}>{b}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => onNavigate('Contact')} style={{
              marginTop: 32,
              background: '#0C385A', color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
              padding: '11px 24px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 6,
              transition: 'background 200ms',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#1a4a6b'}
              onMouseLeave={e => e.currentTarget.style.background = '#0C385A'}
            >
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          {/* Right: visual */}
          <div style={{
            background: '#FAFCFE', padding: '48px 44px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: '100%', maxWidth: 380 }}>
              {f.visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FeaturesSection });
