// Cueserve — Footer Component

const Footer = ({ onNavigate }) => {
  const col = { display: 'flex', flexDirection: 'column', gap: 10 };
  const link = {
    fontFamily: "'DM Sans', sans-serif", fontSize: 14,
    color: 'rgba(255,255,255,0.55)', background: 'none',
    border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
    transition: 'color 200ms',
  };
  const heading = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 13, fontWeight: 600, color: '#fff',
    textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6,
  };

  return (
    <footer style={{ background: '#0F1920', padding: '56px 32px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand col */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="assets/cs-logo-full-horizontal.svg"
                alt="Cueserve"
                style={{ height: 36, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, maxWidth: 280 }}>
              Your AI-first tech partner delivering real outcomes through GenAI, Agentic AI, and workflow automation.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['LinkedIn', 'Facebook', 'Skype'].map(s => (
                <span key={s} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={heading}>Quick Links</div>
            <div style={col}>
              {['Home', 'About', 'Approach', 'Career', 'Contact'].map(l => (
                <button key={l} style={link} onClick={() => onNavigate(l)}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >{l}</button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={heading}>Services</div>
            <div style={col}>
              {['Website Development', 'Software Development', 'Mobile App Dev', 'Graphics Design', 'AI Automation'].map(l => (
                <span key={l} style={{ ...link, cursor: 'default' }}>{l}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={heading}>Contact Us</div>
            <div style={col}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                5, Punit Colony, Sindhwaimata Road,<br />Pratapnagar, Vadodara — Gujarat
              </span>
              <a href="mailto:hello@cueserve.com" style={{ ...link, color: '#2384C6', textDecoration: 'none' }}>hello@cueserve.com</a>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>+91 80002 99993</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Cueserve. All rights reserved.
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            Privacy Policy · Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
