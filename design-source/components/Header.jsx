// Cueserve — Header Component
// Sticky navigation bar with logo, nav links, and CTA

// Inline logo mark — no external file dependency
const LogoMark = ({ height = 34, dark = false }) => (
  <svg height={height} viewBox="-13.4 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <path fill={dark ? '#fff' : '#0C385A'} d="M156.5,113.1c-6.1,32.7-34.8,57.5-69.3,57.5c-38.9,0-70.5-31.5-70.5-70.4s31.6-70.4,70.5-70.4c33.5,0,61.4,23.3,68.7,54.5h27.4C175.8,38,135.5,2.5,87,2.5c-51.7,0-94.1,40.3-97.3,91.2h0v0c-0.1,2.1-0.1,10.4,0,12.4v91.3c0,0,96.8,0,97.3,0c49.4,0,90.2-36.7,96.6-84.4H156.5z"/>
    <path fill="#2384C6" d="M57.8,85.5C63.2,75,74.3,67.8,87,67.8c8.8,0,16.7,3.4,22.6,9l30.8-11.2C129,48.3,109.4,36.9,87,36.9c-35.2,0-63.8,28.3-63.8,63.1c0,5.2,0.7,10.3,1.9,15.2h47.6l0,0h43.4c-5.4,10.4-16.4,17.6-29.1,17.6c-9.8,0-18.6-4.3-24.6-11.1l-30,10.9c11.2,18.3,31.4,30.5,54.6,30.5c35.2,0,63.8-28.3,63.8-63.1c0-5-0.6-9.8-1.7-14.5H57.8z"/>
  </svg>
);

const Header = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['Home', 'Services', 'Approach', 'Portfolio', 'About', 'Contact'];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.97)' : '#fff',
      borderBottom: '1px solid #E8EFF5',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      boxShadow: scrolled ? '0 2px 12px rgba(12,56,90,0.08)' : 'none',
      transition: 'all 250ms ease-out',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div
          onClick={() => onNavigate('Home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="assets/cs-logo-full-horizontal.svg"
            alt="Cueserve"
            style={{ height: 36, width: 'auto', display: 'block' }}
          />
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {links.map(link => (
            <button key={link} onClick={() => onNavigate(link)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0',
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              color: activePage === link ? '#0C385A' : '#647F93',
              borderBottom: activePage === link ? '2px solid #2384C6' : '2px solid transparent',
              transition: 'all 200ms ease-out',
            }}>{link}</button>
          ))}
        </nav>

        {/* CTA */}
        <button onClick={() => onNavigate('Contact')} style={{
          background: '#0C385A', color: '#fff', border: 'none', cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
          padding: '9px 20px', borderRadius: 4, transition: 'background 200ms ease-out',
        }}
          onMouseEnter={e => e.target.style.background = '#1a4a6b'}
          onMouseLeave={e => e.target.style.background = '#0C385A'}
        >
          Talk to Us
        </button>
      </div>
    </header>
  );
};

Object.assign(window, { Header, LogoMark });
