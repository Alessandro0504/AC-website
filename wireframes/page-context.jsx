/* Context page: tagline drafts + sitemap + design rationale */

function ContextSheet() {
  const taglines = [
    { line: 'Sourcing integrity, from origin to institution.', note: 'Anchors on trust + the institutional buyer.' },
    { line: 'A verified ledger for global agricultural trade.', note: 'Leans into the "agrarian ledger" voice from the refs.' },
    { line: 'Premium agro commodities, brokered with proof.', note: 'Plainspoken; emphasizes verification.' },
    { line: 'The standard for institutional agro sourcing.', note: 'Confident, category-defining.' },
    { line: 'Where origin meets obligation.', note: 'Poetic; pairs well with serif display type.' },
  ];

  const pages = [
    { name: 'Home', purpose: 'Brand statement, proof points, primary CTA → Book a call', cta: 'Book a call' },
    { name: 'Portfolio', purpose: 'Catalog of sourced commodities, grouped by category', cta: 'Inquire on a SKU' },
    { name: 'Track Record', purpose: 'Audited performance: settlement rate, on-time delivery, claims', cta: 'Request audit report' },
    { name: 'Network', purpose: 'Origins ↔ Buyer markets map, country cards', cta: 'View partner network' },
    { name: 'Case Studies', purpose: 'Selected past trades — origin, volume, outcome', cta: 'Read trade brief' },
    { name: 'About & Contact', purpose: 'Bio, principles, compliance posture, book-a-call form', cta: 'Book a call' },
  ];

  return (
    <div style={{ width: 1280, padding: 56, background: WIRE_BG, fontFamily: wireFont.sans, color: WIRE_INK }} data-screen-label="00 Context">
      <WireEyebrow>AC Website — Wireframe Round 01</WireEyebrow>
      <WireTitle size={64}>Direction & <em style={{ fontStyle: 'italic' }}>structure</em></WireTitle>
      <p style={{ maxWidth: 720, marginTop: 20, fontSize: 15, lineHeight: 1.65, color: '#3a3934' }}>
        Wireframes are intentionally grayscale — we'll layer in the teal/gold palette and editorial photography
        once the structure is locked. Voice draws on the "agrarian ledger" feel from your references: serif display
        type, ledger metaphors, audit-grade proof points.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 64 }}>
        <div>
          <WireEyebrow>Tagline drafts</WireEyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 8 }}>
            {taglines.map((t, i) => (
              <div key={i} style={{ borderTop: `1px solid ${WIRE_BORDER}`, paddingTop: 16 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: wireFont.mono, fontSize: 11, color: WIRE_MUTED }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: wireFont.serif, fontSize: 22, lineHeight: 1.25, fontWeight: 400 }}>"{t.line}"</span>
                </div>
                <div style={{ fontSize: 12, color: WIRE_MUTED, marginTop: 6, marginLeft: 28 }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <WireEyebrow>Sitemap</WireEyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
            {pages.map((p) => (
              <div key={p.name} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 130px', gap: 16, padding: '14px 0', borderTop: `1px solid ${WIRE_BORDER}` }}>
                <div style={{ fontFamily: wireFont.serif, fontSize: 18, fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: '#4a4842', lineHeight: 1.5 }}>{p.purpose}</div>
                <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: WIRE_MUTED, textAlign: 'right' }}>→ {p.cta}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36, padding: 20, background: WIRE_DARK, color: '#fff' }}>
            <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 10 }}>
              Design system (to apply in refinement)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 12, lineHeight: 1.6 }}>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>Palette</strong>
                Deep teal, mustard gold, cream paper, ink black
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>Type</strong>
                Editorial serif display + clean sans body + mono labels
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>Imagery</strong>
                B&W commodity stills, full-bleed
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: 4 }}>Voice</strong>
                Institutional, ledger metaphors, audit-grade
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ContextSheet });
