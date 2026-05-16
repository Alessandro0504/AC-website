/* AC Hi-Fi Design System
   ===========================================================
   Palette, typography, and shared primitives for hi-fi pages.
   Pulled from the reference screens you shared:
     - Deep forest/teal background (dark mode editorial)
     - Mustard / saffron accent
     - Cream paper for light sections
     - Ink black
     - Source Serif 4 + Instrument Serif italic for display
     - Geist for sans body
     - JetBrains Mono for labels
*/

/* Inject shared keyframes + transitions once */
(function() {
  if (document.getElementById('ac-kit-styles')) return;
  const s = document.createElement('style');
  s.id = 'ac-kit-styles';
  s.textContent = '@keyframes ac-marquee { 0% { transform:translateX(0); } 100% { transform:translateX(-50%); } }';
  document.head.appendChild(s);
})();

const AC = {
  // Color
  ink:     '#0f1410',
  paper:   '#f4efe4',
  paperWarm: '#ebe3d2',
  forest:  '#1d2b25',   // hero dark
  forestDeep: '#121a16',
  forestLine: '#2a3a32',
  gold:    '#c9a23a',
  goldLight: '#e4cf6b',
  cream:   '#f9f5ec',
  rule:    '#d8d1bf',
  muted:   '#6b6555',
  mutedOnDark: 'rgba(244, 239, 228, 0.55)',
  ruleDark: 'rgba(244, 239, 228, 0.14)',

  // Type
  serif:   '"Source Serif 4", "Source Serif Pro", Georgia, serif',
  serifItalic: '"Instrument Serif", "Source Serif 4", Georgia, serif',
  sans:    '"Geist", "Söhne", system-ui, -apple-system, sans-serif',
  mono:    '"JetBrains Mono", ui-monospace, monospace',
};

/* Eyebrow — small uppercase mono label */
function Eyebrow({ children, color, style = {} }) {
  return (
    <div style={{
      fontFamily: AC.mono,
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: color || AC.muted,
      ...style,
    }}>{children}</div>
  );
}

/* Display title — Source Serif with optional italic spans */
function Display({ children, size = 96, color, style = {} }) {
  return (
    <h1 style={{
      fontFamily: AC.serif,
      fontWeight: 400,
      fontSize: size,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      color: color || AC.ink,
      margin: 0,
      ...style,
    }}>{children}</h1>
  );
}

/* Italic word — Instrument Serif italic for soft phrases */
function I({ children, color, style = {} }) {
  return (
    <em style={{
      fontFamily: AC.serifItalic,
      fontStyle: 'italic',
      fontWeight: 400,
      color: color,
      ...style,
    }}>{children}</em>
  );
}

/* Body text */
function Body({ children, size = 15, color, width, style = {} }) {
  return (
    <p style={{
      fontFamily: AC.sans,
      fontSize: size,
      lineHeight: 1.65,
      fontWeight: 400,
      letterSpacing: '-0.005em',
      color: color || '#3a3934',
      maxWidth: width,
      margin: 0,
      ...style,
    }}>{children}</p>
  );
}

/* Primary button — solid gold pill */
function GoldButton({ children, style = {} }) {
  return (
    <button style={{
      background: AC.gold,
      color: AC.ink,
      border: 'none',
      padding: '14px 22px 14px 24px',
      fontFamily: AC.sans,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      ...style,
    }}>
      {children}
    </button>
  );
}

/* Outline / ghost button */
function GhostButton({ children, onDark = false, style = {} }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? AC.gold : 'transparent',
        color: hovered ? AC.ink : (onDark ? AC.paper : AC.ink),
        border: `1px solid ${hovered ? AC.gold : (onDark ? 'rgba(244,239,228,0.4)' : AC.ink)}`,
        padding: '14px 22px',
        fontFamily: AC.sans,
        fontSize: 12,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        fontWeight: 500,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        transition: 'background 0.18s, border-color 0.18s, color 0.18s',
        ...style,
      }}>{children}</button>
  );
}

/* Image placeholder for hi-fi — a black & white commodity still */
function HiFiImage({ subject = 'commodity', tone = 'warm', ratio, height, width = '100%', overlay, style = {} }) {
  // We don't have real photography. Render a stylized B&W "still" via CSS gradients.
  const palettes = {
    warm:   ['#3a3328', '#1a1612', '#2a2218', '#0a0805'],
    dark:   ['#1f2622', '#0a0e0c', '#141a17', '#040605'],
    bronze: ['#4a3a22', '#1a1208', '#2a1f12', '#0a0604'],
    sand:   ['#7a6e58', '#3a3022', '#5a4a32', '#1a1408'],
  };
  const c = palettes[tone] || palettes.warm;
  return (
    <div style={{
      position: 'relative',
      width,
      height: ratio ? undefined : height,
      aspectRatio: ratio,
      overflow: 'hidden',
      background: `
        radial-gradient(ellipse at 30% 25%, ${c[0]} 0%, transparent 55%),
        radial-gradient(ellipse at 70% 60%, ${c[2]} 0%, transparent 60%),
        radial-gradient(ellipse at 50% 90%, ${c[1]} 0%, transparent 70%),
        linear-gradient(160deg, ${c[1]} 0%, ${c[3]} 100%)
      `,
      ...style,
    }}>
      {/* film grain */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.95 0 0 0 0 0.92 0 0 0 0 0.85 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        opacity: 0.55,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />
      {/* vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)',
        pointerEvents: 'none',
      }} />
      {/* subject label — small mono in corner, like a plate caption */}
      <div style={{
        position: 'absolute',
        left: 14, bottom: 12,
        fontFamily: AC.mono,
        fontSize: 9,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(244, 239, 228, 0.85)',
        textShadow: '0 1px 4px rgba(0,0,0,0.6)',
      }}>
        ◆ Plate · {subject}
      </div>
      {overlay}
    </div>
  );
}

/* Tag pill — small uppercase chip */
function Tag({ children, variant = 'cream', style = {} }) {
  const variants = {
    cream:  { bg: 'rgba(244, 239, 228, 0.92)', fg: AC.ink },
    gold:   { bg: AC.gold, fg: AC.ink },
    forest: { bg: AC.forest, fg: AC.paper },
    outline: { bg: 'transparent', fg: AC.ink, border: `1px solid ${AC.ink}` },
    outlineLight: { bg: 'transparent', fg: AC.paper, border: '1px solid rgba(244,239,228,0.4)' },
  };
  const v = variants[variant] || variants.cream;
  return (
    <span style={{
      background: v.bg,
      color: v.fg,
      border: v.border || 'none',
      padding: '5px 11px',
      fontFamily: AC.mono,
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontWeight: 600,
      display: 'inline-block',
      ...style,
    }}>{children}</span>
  );
}

/* NavItem — single nav link with hover underline */
const NAV_HREFS = {
  'Portfolio': 'portfolio.html',
  'Track Record': 'track-record.html',
  'Network': 'network.html',
  'Case Studies': 'case-studies.html',
  'About': 'about.html',
};
function NavItem({ label, active, fg }) {
  const [hovered, setHovered] = React.useState(false);
  const showUnderline = active || hovered;
  return (
    <a
      href={NAV_HREFS[label] || '#'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        opacity: active ? 1 : (hovered ? 1 : 0.75),
        borderBottom: showUnderline ? `1px solid ${fg}` : '1px solid transparent',
        paddingBottom: 4,
        cursor: 'pointer',
        transition: 'opacity 0.15s, border-color 0.15s',
      }}>{label}</a>
  );
}

/* Nav bar — fixed at top of every page */
function HiFiNav({ active = 'Home', onDark = false }) {
  const items = ['Portfolio', 'Track Record', 'Network', 'Case Studies', 'About'];
  const fg = onDark ? AC.paper : AC.ink;
  const ruleColor = onDark ? 'rgba(244,239,228,0.18)' : AC.rule;
  const [btnHovered, setBtnHovered] = React.useState(false);
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 56px',
      borderBottom: `1px solid ${ruleColor}`,
      background: 'transparent',
      position: 'relative',
      zIndex: 10,
    }}>
      <a href="index.html" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="assets/ac-logo.png" alt="AC" style={{
          width: 30, height: 30,
          filter: onDark ? 'brightness(0) invert(1)' : 'none',
        }} />
        <span style={{
          fontFamily: AC.serif,
          fontSize: 19,
          fontWeight: 500,
          color: fg,
          letterSpacing: '-0.01em',
        }}>Alessandro Cordano</span>
      </a>
      <div style={{
        display: 'flex',
        gap: 36,
        fontFamily: AC.sans,
        fontSize: 12,
        color: fg,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: 500,
      }}>
        {items.map((i) => (
          <NavItem key={i} label={i} active={active === i} fg={fg} />
        ))}
      </div>
      <a
        href="about.html"
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          background: btnHovered ? AC.forest : AC.gold,
          color: btnHovered ? AC.gold : AC.ink,
          border: btnHovered ? `1px solid ${AC.gold}` : '1px solid transparent',
          padding: '12px 18px',
          fontFamily: AC.sans,
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'background 0.18s, color 0.18s, border-color 0.18s',
        }}>Book a Call</a>
    </div>
  );
}

/* Marquee strip — static or animated brand band */
function MarqueeStrip({ items, variant = 'forest', animated = false }) {
  const isForest = variant === 'forest';
  const bg = isForest ? AC.forest : AC.gold;
  const fg = isForest ? AC.paper : AC.ink;
  const duration = `${Math.max(items.length * 4, 16)}s`;

  if (!animated) {
    return (
      <div style={{
        background: bg, color: fg,
        padding: '14px 56px',
        display: 'flex', gap: 40,
        fontFamily: AC.mono, fontSize: 10,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        fontWeight: 500, overflow: 'hidden', whiteSpace: 'nowrap',
      }}>
        {items.map((it, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: 0.92 }}>
            {it}
            {i < items.length - 1 && <span style={{ opacity: 0.4 }}>◆</span>}
          </span>
        ))}
      </div>
    );
  }

  /* Animated: duplicate items so translateX(-50%) loops seamlessly */
  const doubled = [...items, ...items];
  return (
    <div style={{ background: bg, color: fg, padding: '14px 0', overflow: 'hidden' }}>
      <div style={{
        display: 'flex', width: 'max-content',
        animation: `ac-marquee ${duration} linear infinite`,
        fontFamily: AC.mono, fontSize: 10,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        fontWeight: 500, whiteSpace: 'nowrap',
      }}>
        {doubled.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 16, opacity: 0.92, paddingRight: 40 }}>
            {it}
            <span style={{ opacity: 0.4 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* FooterLink — footer nav item with gold hover */
function FooterLink({ children, href }) {
  const [hovered, setHovered] = React.useState(false);
  const Tag = href ? 'a' : 'span';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? AC.gold : 'rgba(244,239,228,0.85)',
        transition: 'color 0.18s',
        cursor: 'pointer',
        textDecoration: 'none',
      }}>
      {children}
    </Tag>
  );
}

/* Footer */
function HiFiFooter() {
  return (
    <footer style={{
      background: AC.forestDeep,
      color: AC.paper,
      padding: '72px 56px 32px',
      fontFamily: AC.sans,
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
        gap: 48,
        paddingBottom: 56,
        borderBottom: `1px solid ${AC.ruleDark}`,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <img src="assets/ac-logo.png" alt="AC" style={{ width: 32, height: 32, filter: 'brightness(0) invert(1)' }} />
            <span style={{ fontFamily: AC.serif, fontSize: 22, fontWeight: 500 }}>Alessandro Cordano</span>
          </div>
          <Body color="rgba(244,239,228,0.6)" width={320} size={13}>
            Institutional sourcing of premium agricultural commodities — from verified origins, under audited contracts.
          </Body>
        </div>
        {[
          ['Navigate', [
            { label: 'Portfolio', href: 'portfolio.html' },
            { label: 'Track Record', href: 'track-record.html' },
            { label: 'Network', href: 'network.html' },
            { label: 'Case Studies', href: 'case-studies.html' },
            { label: 'About', href: 'about.html' },
          ]],
          ['Contact', [
            { label: 'Geneva HQ' },
            { label: 'desk@ac-sourcing.com', href: 'mailto:desk@ac-sourcing.com' },
            { label: '+41 22 000 0000', href: 'tel:+41220000000' },
            { label: 'Calendar', href: 'about.html' },
          ]],
          ['Compliance', [
            { label: 'KYC / AML' },
            { label: 'EUDR Aligned' },
            { label: 'Marine Cargo Insured' },
            { label: 'Geneva Counsel' },
          ]],
        ].map(([title, items]) => (
          <div key={title}>
            <Eyebrow color="rgba(244,239,228,0.5)" style={{ marginBottom: 16 }}>{title}</Eyebrow>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13 }}>
              {items.map((it) => <FooterLink key={it.label} href={it.href}>{it.label}</FooterLink>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 24,
        fontFamily: AC.mono,
        fontSize: 10,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'rgba(244,239,228,0.45)',
      }}>
        <span>© MMXXVI Alessandro Cordano · Geneva</span>
        <span>The Agrarian Ledger · Privacy · Terms</span>
      </div>
    </footer>
  );
}

/* Stat — number with optional gold suffix and uppercase mono label.
   Used for network previews, dashboards, sidebar metrics. */
function Stat({ value, suffix, label, size = 48, color, style = {} }) {
  return (
    <div style={style}>
      <div style={{
        fontFamily: AC.serif,
        fontSize: size,
        lineHeight: 1,
        fontWeight: 400,
        color: color || AC.ink,
      }}>
        {value}
        {suffix && <span style={{ color: AC.gold }}>{suffix}</span>}
      </div>
      <Eyebrow style={{ marginTop: 8 }}>{label}</Eyebrow>
    </div>
  );
}

/* StatTile — proof/audit card with square indicator, index mark, and note.
   Used for performance and credibility grids. */
function StatTile({ value, label, note, index, filled = false, style = {} }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: AC.cream, padding: '32px 28px', position: 'relative', ...style }}>
      {index != null && (
        <div style={{
          position: 'absolute', top: 18, right: 22,
          fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.2em', color: AC.muted,
        }}>{String(index).padStart(2, '0')}</div>
      )}
      <div style={{ width: 18, height: 18, border: `1px solid ${AC.ink}`, marginBottom: 36, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 4,
          background: (filled || hovered) ? AC.gold : 'transparent',
          transition: 'background 0.18s',
        }} />
      </div>
      <div style={{
        fontFamily: AC.serif,
        fontSize: 56,
        lineHeight: 1,
        fontWeight: 400,
        letterSpacing: '-0.03em',
        color: AC.ink,
      }}>{value}</div>
      <div style={{
        fontFamily: AC.mono,
        fontSize: 10,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginTop: 14,
        fontWeight: 700,
        color: AC.ink,
      }}>{label}</div>
      {note && (
        <Body size={12.5} color={AC.muted} style={{ marginTop: 14, lineHeight: 1.6 }}>{note}</Body>
      )}
    </div>
  );
}

/* TextLink — uppercase mono editorial link with bottom rule. */
function TextLink({ children, color, style = {} }) {
  return (
    <span style={{
      fontFamily: AC.mono,
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      borderBottom: `1px solid ${color || AC.ink}`,
      paddingBottom: 4,
      fontWeight: 600,
      color: color || AC.ink,
      cursor: 'pointer',
      ...style,
    }}>{children}</span>
  );
}

/* Subhead — serif heading at category / sub-section scale. */
function Subhead({ children, size = 26, color, style = {} }) {
  return (
    <h2 style={{
      fontFamily: AC.serif,
      fontSize: size,
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: color || AC.ink,
      margin: 0,
      ...style,
    }}>{children}</h2>
  );
}

/* NetworkMap — editorial SVG world map for the Network page. */
function NetworkMap() {
  const W = 1168, H = 360;
  const lonMin = -120, lonMax = 160, latMax = 70, latMin = -50;
  const toX = lon => ((lon - lonMin) / (lonMax - lonMin)) * W;
  const toY = lat => ((latMax - lat) / (latMax - latMin)) * H;

  // Rough landmass polygons — editorial sketch
  const lands = [
    // North America
    [[0,30],[209,15],[271,75],[167,135],[125,165],[0,150]],
    // South America
    [[167,174],[229,195],[292,225],[312,270],[209,360],[167,330],[146,270],[167,174]],
    // Europe
    [[459,0],[626,0],[667,45],[646,105],[605,105],[542,96],[459,90],[459,0]],
    // Africa
    [[417,105],[730,165],[730,210],[709,315],[584,315],[417,165],[417,105]],
    // Asia
    [[750,0],[1084,0],[1104,30],[1104,105],[1000,150],[917,195],[834,186],[750,135],[688,90],[730,15],[750,0]],
    // Australia
    [[980,270],[1147,270],[1147,330],[980,330],[980,270]],
  ];

  const origins = [
    { id: 'peru',  lon: -77, lat: -12, label: 'Peru'  },
    { id: 'chile', lon: -71, lat: -33, label: 'Chile' },
    { id: 'egypt', lon:  30, lat:  31, label: 'Egypt' },
  ];
  const markets = [
    { id: 'eu',     lon:   8, lat:  51, label: 'EU'     },
    { id: 'mena',   lon:  55, lat:  25, label: 'MENA'   },
    { id: 'taiwan', lon: 121, lat:  25, label: 'Taiwan' },
  ];
  const nodeMap = {};
  [...origins, ...markets].forEach(n => { nodeMap[n.id] = n; });

  const connections = [
    ['peru','eu'],['peru','taiwan'],
    ['chile','eu'],['chile','mena'],
    ['egypt','eu'],['egypt','mena'],['egypt','taiwan'],
  ];

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${W} ${H}`}
         preserveAspectRatio="xMidYMid slice"
         style={{ display: 'block', position: 'absolute', inset: 0 }}>
      {lands.map((pts, i) => (
        <polygon key={i}
          points={pts.map(([x,y]) => `${x},${y}`).join(' ')}
          fill="rgba(244,239,228,0.05)" stroke="rgba(244,239,228,0.12)" strokeWidth={0.5} />
      ))}
      {[0,30,60].map(lat => (
        <line key={`lat${lat}`} x1={0} y1={toY(lat)} x2={W} y2={toY(lat)}
          stroke="rgba(244,239,228,0.05)" strokeWidth={0.5} />
      ))}
      {[-90,-60,-30,0,30,60,90,120,150].map(lon => (
        <line key={`lon${lon}`} x1={toX(lon)} y1={0} x2={toX(lon)} y2={H}
          stroke="rgba(244,239,228,0.05)" strokeWidth={0.5} />
      ))}
      {connections.map(([aId,bId]) => {
        const a = nodeMap[aId], b = nodeMap[bId];
        const x1=toX(a.lon), y1=toY(a.lat), x2=toX(b.lon), y2=toY(b.lat);
        const mx=(x1+x2)/2, my=Math.min(y1,y2) - Math.abs(x2-x1)*0.18;
        return (
          <path key={`${aId}-${bId}`}
            d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
            fill="none" stroke="rgba(201,162,58,0.3)" strokeWidth={1} strokeDasharray="3 6" />
        );
      })}
      {origins.map(n => {
        const x=toX(n.lon), y=toY(n.lat);
        return (
          <g key={n.id}>
            <circle cx={x} cy={y} r={20} fill="rgba(201,162,58,0.07)" />
            <circle cx={x} cy={y} r={6}  fill="#c9a23a" />
            <circle cx={x} cy={y} r={3}  fill="#1d2b25" />
            <text x={x} y={y-14} textAnchor="middle"
              fontFamily='"JetBrains Mono",monospace' fontSize={9} letterSpacing="2" fill="#c9a23a">
              {n.label.toUpperCase()}
            </text>
          </g>
        );
      })}
      {markets.map(n => {
        const x=toX(n.lon), y=toY(n.lat);
        return (
          <g key={n.id}>
            <circle cx={x} cy={y} r={16} fill="rgba(244,239,228,0.07)" />
            <circle cx={x} cy={y} r={5}  fill="#f4efe4" />
            <circle cx={x} cy={y} r={2.5} fill="#1d2b25" />
            <text x={x} y={y-12} textAnchor="middle"
              fontFamily='"JetBrains Mono",monospace' fontSize={9} letterSpacing="2" fill="rgba(244,239,228,0.75)">
              {n.label.toUpperCase()}
            </text>
          </g>
        );
      })}
      <g transform={`translate(${W-188},${H-80})`}>
        <rect x={0} y={0} width={178} height={70} fill="rgba(15,20,16,0.75)" />
        <line x1={0} y1={0} x2={178} y2={0} stroke="rgba(244,239,228,0.15)" strokeWidth={0.5} />
        <circle cx={14} cy={20} r={4} fill="#c9a23a" />
        <text x={26} y={24} fontFamily='"JetBrains Mono",monospace' fontSize={8.5} letterSpacing="1.5" fill="rgba(244,239,228,0.7)">SUPPLY ORIGIN</text>
        <circle cx={14} cy={46} r={4} fill="#f4efe4" />
        <text x={26} y={50} fontFamily='"JetBrains Mono",monospace' fontSize={8.5} letterSpacing="1.5" fill="rgba(244,239,228,0.7)">BUYER MARKET</text>
      </g>
    </svg>
  );
}

Object.assign(window, {
  AC, Eyebrow, Display, I, Body, GoldButton, GhostButton, HiFiImage,
  Tag, HiFiNav, MarqueeStrip, HiFiFooter,
  Stat, StatTile, TextLink, Subhead, NetworkMap,
});
