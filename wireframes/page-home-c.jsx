/* HOME — Variation C: Atlas / Centered
   Centered editorial headline with full-bleed imagery, almost magazine-cover feel.
   Pairs commodity poetry with global atlas iconography. */

function HomeC() {
  return (
    <WirePage label="Home C — Atlas Cover">
      <WireNav active="Home" />

      {/* Hero — centered, almost like a book cover */}
      <div style={{ padding: '64px 56px 24px', textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 18 }}>
          ◆ The Agrarian Ledger · MMXXVI ◆
        </div>
        <WireTitle size={108} style={{ marginBottom: 4 }}>The harvest,</WireTitle>
        <WireTitle size={108} italic style={{ marginBottom: 36 }}>brokered with proof.</WireTitle>
        <WireBody width={620} style={{ margin: '0 auto', fontSize: 16, textAlign: 'center' }}>
          AC is an institutional sourcing house for premium agricultural commodities. Coffee, cacao,
          frozen fruit and specialty produce — traded on verified origin, audited contracts and zero unresolved claims.
        </WireBody>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center' }}>
          <WireButton variant="dark">Book a Call →</WireButton>
          <WireButton variant="outline">View Casework</WireButton>
        </div>
      </div>

      {/* Full-bleed hero image */}
      <div style={{ padding: '32px 56px 0' }}>
        <WireImage label="full-bleed editorial · commodity still life" height={520} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontFamily: wireFont.mono, fontSize: 10, color: WIRE_MUTED, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <span>Plate I · Cacao, Andean Highlands</span>
          <span>Photographed under contract · 2025</span>
        </div>
      </div>

      <div style={{ height: 64 }} />
      <WireStrip items={['Verified Origin', 'Audited Contracts', 'Settled in Full', 'Zero Claims', 'Chain-of-Custody Logged']} />

      {/* Manifesto block — single column, generous */}
      <div style={{ padding: '96px 56px', display: 'grid', gridTemplateColumns: '160px 1fr 220px', gap: 56, borderBottom: `1px solid ${WIRE_BORDER}` }}>
        <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED }}>
          A note on method
        </div>
        <div>
          <p style={{ fontFamily: wireFont.serif, fontSize: 32, lineHeight: 1.35, fontWeight: 400, margin: 0, color: WIRE_INK }}>
            Commodity trade has always traveled on trust. <em style={{ color: '#6a5a1a' }}>We chose to write it down.</em>
            Every lot AC handles is bound to a named origin, a compliance trail, and a counterparty review —
            so the next buyer never has to guess what they are paying for.
          </p>
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 14, fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED }}>
            <span style={{ width: 32, height: 1, background: WIRE_MUTED }} />
            Alessandro Cordano · Founder
          </div>
        </div>
        <div style={{ borderLeft: `1px solid ${WIRE_BORDER}`, paddingLeft: 24 }}>
          <div style={{ fontFamily: wireFont.serif, fontSize: 56, lineHeight: 1 }}>200+</div>
          <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 6 }}>Verified Trades</div>
          <div style={{ fontFamily: wireFont.serif, fontSize: 56, lineHeight: 1, marginTop: 28 }}>Zero</div>
          <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 6 }}>Open Claims</div>
        </div>
      </div>

      {/* Plates — three image-led category teasers, alternating */}
      <div style={{ padding: '80px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <WireEyebrow>Plates · Categories</WireEyebrow>
          <WireTitle size={56}>What we <em style={{ fontStyle: 'italic' }}>source.</em></WireTitle>
        </div>
        {[
          ['I', 'Specialty Coffee', 'SCA 85+ single-origin lots from Ethiopia, Colombia, Brazil.'],
          ['II', 'Frozen Fruit (IQF)', 'Counter-seasonal supply from Chile, Peru, Egypt.'],
          ['III', 'Cacao & Cocoa', 'Single-estate beans, fair-trade and volcanic highlands.'],
        ].map(([num, title, desc], i) => (
          <div key={num} style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
            gap: 56,
            alignItems: 'center',
            padding: '48px 0',
            borderTop: `1px solid ${WIRE_BORDER}`,
          }}>
            {i % 2 === 0 ? (
              <>
                <div>
                  <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', color: WIRE_MUTED, marginBottom: 14 }}>PLATE {num}</div>
                  <WireTitle size={48}>{title}</WireTitle>
                  <WireBody style={{ marginTop: 20 }}>{desc}</WireBody>
                  <div style={{ marginTop: 24, fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', borderBottom: `1px solid ${WIRE_INK}`, display: 'inline-block', paddingBottom: 2 }}>
                    Read the brief →
                  </div>
                </div>
                <WireImage label={title.toLowerCase()} ratio="4/3" />
              </>
            ) : (
              <>
                <WireImage label={title.toLowerCase()} ratio="4/3" />
                <div>
                  <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', color: WIRE_MUTED, marginBottom: 14 }}>PLATE {num}</div>
                  <WireTitle size={48}>{title}</WireTitle>
                  <WireBody style={{ marginTop: 20 }}>{desc}</WireBody>
                  <div style={{ marginTop: 24, fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', borderBottom: `1px solid ${WIRE_INK}`, display: 'inline-block', paddingBottom: 2 }}>
                    Read the brief →
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* CTA — closer */}
      <div style={{ background: WIRE_DARK, color: '#fff', padding: '96px 56px', textAlign: 'center' }}>
        <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 24 }}>
          ◆ End of Issue ◆
        </div>
        <div style={{ fontFamily: wireFont.serif, fontSize: 56, fontWeight: 400, lineHeight: 1.1, maxWidth: 820, margin: '0 auto', fontStyle: 'italic' }}>
          Quietly, we'd like to broker something for you.
        </div>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Book a Call</span>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

Object.assign(window, { HomeC });
