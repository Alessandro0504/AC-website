/* Shared wireframe primitives — grayscale, structural only */

const WIRE_INK = '#1a1a1a';
const WIRE_BORDER = '#c9c5bd';
const WIRE_MUTED = '#7d7a73';
const WIRE_BG = '#f6f4ef';
const WIRE_PANEL = '#ffffff';
const WIRE_DARK = '#1f2622';

const wireFont = {
  serif: '"Source Serif 4", "Source Serif Pro", Georgia, serif',
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

/* A placeholder image box — dashed cross like a wireframe */
function WireImage({ label = 'image', height = 200, width = '100%', ratio, style = {} }) {
  const finalStyle = {
    width,
    height: ratio ? undefined : height,
    aspectRatio: ratio,
    background: `repeating-linear-gradient(135deg, #efece5 0 6px, #f6f4ef 6px 12px)`,
    border: `1px solid ${WIRE_BORDER}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: WIRE_MUTED,
    fontFamily: wireFont.mono,
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    ...style,
  };
  return (
    <div style={finalStyle}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={WIRE_BORDER} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={WIRE_BORDER} strokeWidth="1" />
      </svg>
      <span style={{ position: 'relative', background: WIRE_BG, padding: '2px 8px' }}>{label}</span>
    </div>
  );
}

/* A text placeholder — gray bars */
function WireLines({ count = 3, width = '100%', lineHeight = 10, gap = 8, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width, ...style }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            height: lineHeight,
            background: '#e4e0d7',
            borderRadius: 2,
            width: i === count - 1 ? '72%' : '100%',
          }}
        />
      ))}
    </div>
  );
}

/* A box you can put anywhere with optional dashed border */
function WireBox({ children, dashed = false, padding = 16, style = {} }) {
  return (
    <div
      style={{
        border: `1px ${dashed ? 'dashed' : 'solid'} ${WIRE_BORDER}`,
        background: WIRE_PANEL,
        padding,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Logo placeholder — uses real AC logo at small size to give scale */
function WireLogo({ size = 28, withName = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src="assets/ac-logo.png" alt="AC" style={{ width: size, height: size, filter: 'grayscale(1) contrast(1.1)' }} />
      {withName && (
        <span style={{ fontFamily: wireFont.serif, fontSize: 18, fontWeight: 500, color: WIRE_INK, letterSpacing: '-0.01em' }}>
          Alessandro Cordano
        </span>
      )}
    </div>
  );
}

/* Top navigation bar — shared by all pages */
function WireNav({ active = 'Home' }) {
  const items = ['Portfolio', 'Track Record', 'Network', 'About', 'Contact'];
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        borderBottom: `1px solid ${WIRE_BORDER}`,
        background: WIRE_BG,
      }}
    >
      <WireLogo />
      <div style={{ display: 'flex', gap: 32, fontFamily: wireFont.sans, fontSize: 13, color: WIRE_INK, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {items.map((i) => (
          <span
            key={i}
            style={{
              borderBottom: active === i ? `1px solid ${WIRE_INK}` : '1px solid transparent',
              paddingBottom: 2,
              fontWeight: active === i ? 600 : 400,
            }}
          >
            {i}
          </span>
        ))}
      </div>
      <div
        style={{
          background: WIRE_DARK,
          color: '#fff',
          padding: '10px 18px',
          fontFamily: wireFont.sans,
          fontSize: 11,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        Book a Call
      </div>
    </div>
  );
}

/* Footer */
function WireFooter() {
  return (
    <div
      style={{
        borderTop: `1px solid ${WIRE_BORDER}`,
        padding: '32px 40px 24px',
        background: WIRE_BG,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        fontFamily: wireFont.sans,
        fontSize: 11,
        color: WIRE_MUTED,
        letterSpacing: '0.04em',
      }}
    >
      <div>
        <div style={{ fontWeight: 700, color: WIRE_INK, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 12, marginBottom: 6 }}>
          Alessandro Cordano
        </div>
        <div>© 2026 AC. Global Sourcing Operations.</div>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Compliance</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

/* Section label / eyebrow */
function WireEyebrow({ children }) {
  return (
    <div
      style={{
        fontFamily: wireFont.mono,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: WIRE_MUTED,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}

/* Section title — serif display */
function WireTitle({ children, size = 56, italic = false, style = {} }) {
  return (
    <h2
      style={{
        fontFamily: wireFont.serif,
        fontSize: size,
        fontWeight: 400,
        fontStyle: italic ? 'italic' : 'normal',
        lineHeight: 1.05,
        letterSpacing: '-0.015em',
        color: WIRE_INK,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

/* Body copy block */
function WireBody({ children, width = 480, style = {} }) {
  return (
    <p
      style={{
        fontFamily: wireFont.sans,
        fontSize: 14,
        lineHeight: 1.6,
        color: '#4a4842',
        maxWidth: width,
        margin: 0,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/* Button */
function WireButton({ children, variant = 'dark', style = {} }) {
  const base = {
    padding: '12px 22px',
    fontFamily: wireFont.sans,
    fontSize: 11,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: 'pointer',
    ...style,
  };
  if (variant === 'dark') return <span style={{ ...base, background: WIRE_DARK, color: '#fff' }}>{children}</span>;
  if (variant === 'outline') return <span style={{ ...base, border: `1px solid ${WIRE_INK}`, color: WIRE_INK }}>{children}</span>;
  return <span style={{ ...base, background: '#e4e0d7', color: WIRE_INK }}>{children}</span>;
}

/* Marquee strip — like the green band in the references */
function WireStrip({ items }) {
  return (
    <div
      style={{
        background: WIRE_DARK,
        color: '#fff',
        padding: '12px 40px',
        display: 'flex',
        gap: 40,
        fontFamily: wireFont.mono,
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      {items.map((it, i) => (
        <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {it}
          {i < items.length - 1 && <span style={{ opacity: 0.4 }}>◆</span>}
        </span>
      ))}
    </div>
  );
}

/* Page frame — wraps content with consistent paper feel */
function WirePage({ children, label }) {
  return (
    <div
      style={{
        width: 1280,
        background: WIRE_BG,
        color: WIRE_INK,
        position: 'relative',
        fontFamily: wireFont.sans,
      }}
      data-screen-label={label}
    >
      {children}
    </div>
  );
}

/* Export all to window */
Object.assign(window, {
  WireImage, WireLines, WireBox, WireLogo, WireNav, WireFooter,
  WireEyebrow, WireTitle, WireBody, WireButton, WireStrip, WirePage,
  WIRE_INK, WIRE_BORDER, WIRE_MUTED, WIRE_BG, WIRE_PANEL, WIRE_DARK, wireFont,
});
