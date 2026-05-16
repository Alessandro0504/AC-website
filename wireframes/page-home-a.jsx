/* HOME — Variation A: Editorial / Magazine
   Big serif headline left, hero image right, proof strip below, modular content blocks.
   Closest to the reference aesthetic. */

function HomeA() {
  return (
    <WirePage label="Home A — Editorial">
      <WireNav active="Home" />

      {/* Hero */}
      <div style={{ padding: '72px 56px 56px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-block', background: '#e4cf6b', color: WIRE_INK, padding: '5px 10px', fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 24 }}>
            Institutional Sourcing · Est. 2018
          </div>
          <WireTitle size={84} style={{ marginBottom: 6 }}>Sourcing</WireTitle>
          <WireTitle size={84} italic>integrity,</WireTitle>
          <WireTitle size={84} style={{ marginBottom: 28 }}>at origin.</WireTitle>
          <WireBody width={460} style={{ fontSize: 15 }}>
            AC brokers premium agricultural commodities for institutional buyers — coffee, cacao, frozen fruit,
            specialty produce — sourced directly from verified origins across the Americas, MENA and Asia-Pacific.
          </WireBody>
          <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
            <WireButton variant="dark">Book a Call →</WireButton>
            <WireButton variant="outline">View Portfolio</WireButton>
          </div>
        </div>
        <div>
          <WireImage label="hero · coffee cherries B&W" ratio="4/5" />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: wireFont.mono, fontSize: 10, color: WIRE_MUTED, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            <span>Lot AR-X · Verified</span>
            <span>Origin: Huila, CO</span>
          </div>
        </div>
      </div>

      <WireStrip items={['Agri-Index +1.24%', 'LATAM-Origin Stable', 'APAC-Demand Rising', 'EU-Compliance Updated', 'MENA-Logistics Optimized']} />

      {/* Proof points — 4 stat cards */}
      <div style={{ padding: '64px 56px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          { stat: '100%', label: 'Settlement Rate', note: 'Full settlement on every trade since inception.' },
          { stat: '98%+', label: 'On-Time Delivery', note: 'Maritime and overland logistics precision.' },
          { stat: '200+', label: 'Verified Trades', note: 'Executed across 14 sovereign jurisdictions.' },
          { stat: 'Zero', label: 'Unresolved Claims', note: 'A flawless dispute resolution record.' },
        ].map((s, i) => (
          <WireBox key={i} padding={24} style={{ background: '#fff' }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${WIRE_MUTED}`, marginBottom: 28 }} />
            <div style={{ fontFamily: wireFont.serif, fontSize: 40, fontWeight: 400, lineHeight: 1 }}>{s.stat}</div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 10, color: WIRE_INK, fontWeight: 700 }}>{s.label}</div>
            <div style={{ fontSize: 12, color: WIRE_MUTED, marginTop: 12, lineHeight: 1.55 }}>{s.note}</div>
          </WireBox>
        ))}
      </div>

      {/* What we source — 3-column commodity preview */}
      <div style={{ padding: '24px 56px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <WireEyebrow>The Portfolio · Excerpt</WireEyebrow>
            <WireTitle size={44}>What we <em style={{ fontStyle: 'italic' }}>source</em></WireTitle>
          </div>
          <span style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: `1px solid ${WIRE_INK}`, paddingBottom: 2 }}>View full portfolio →</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {['Specialty Coffee', 'Cacao & Cocoa', 'Frozen Fruit (IQF)'].map((cat) => (
            <div key={cat}>
              <WireImage label={cat.toLowerCase()} ratio="1/1" />
              <div style={{ fontFamily: wireFont.serif, fontSize: 22, fontWeight: 500, marginTop: 16 }}>{cat}</div>
              <WireLines count={2} style={{ marginTop: 12 }} />
            </div>
          ))}
        </div>
      </div>

      {/* Network preview */}
      <div style={{ padding: '0 56px 80px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 56, alignItems: 'center' }}>
        <div>
          <WireEyebrow>The Network</WireEyebrow>
          <WireTitle size={44} style={{ marginBottom: 20 }}>From <em style={{ fontStyle: 'italic' }}>origin</em> to <em style={{ fontStyle: 'italic' }}>obligation.</em></WireTitle>
          <WireBody>
            A cross-continental infrastructure connecting premier agricultural origins
            with high-yield buyer markets through verified procurement channels.
          </WireBody>
          <div style={{ display: 'flex', gap: 40, marginTop: 32 }}>
            <div>
              <div style={{ fontFamily: wireFont.serif, fontSize: 36 }}>12+</div>
              <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 4 }}>Countries</div>
            </div>
            <div>
              <div style={{ fontFamily: wireFont.serif, fontSize: 36 }}>250k+</div>
              <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 4 }}>Metric Tons Moved</div>
            </div>
          </div>
        </div>
        <WireImage label="world map · origins ↔ markets" height={360} />
      </div>

      {/* CTA band — dark */}
      <div style={{ background: WIRE_DARK, color: '#fff', padding: '72px 56px', textAlign: 'center' }}>
        <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 18 }}>
          Begin a relationship
        </div>
        <div style={{ fontFamily: wireFont.serif, fontSize: 48, fontWeight: 400, lineHeight: 1.15, maxWidth: 760, margin: '0 auto' }}>
          Book a private consultation to scope your sourcing requirements.
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Book a Call</span>
          <span style={{ border: '1px solid #fff', color: '#fff', padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>Download Capabilities</span>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

Object.assign(window, { HomeA });
