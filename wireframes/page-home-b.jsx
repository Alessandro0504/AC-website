/* HOME — Variation B: Ledger / Dossier
   Split-screen layout with numbered sections, sidebar metadata, document-like.
   For users who want maximum institutional gravitas. */

function HomeB() {
  return (
    <WirePage label="Home B — Ledger Dossier">
      <WireNav active="Home" />

      {/* Hero — left column metadata, right column headline */}
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', borderBottom: `1px solid ${WIRE_BORDER}`, minHeight: 540 }}>
        {/* Sidebar dossier */}
        <div style={{ background: '#fff', padding: '40px 32px', borderRight: `1px solid ${WIRE_BORDER}`, display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            ['Dossier', 'AC-2026 / 001'],
            ['Issued', 'Geneva · Q1 2026'],
            ['Classification', 'Institutional Access'],
            ['Operating Since', '2018'],
            ['Counterparties', '40+ Active'],
            ['Jurisdiction', 'Swiss Confederation'],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 6 }}>{k}</div>
              <div style={{ fontFamily: wireFont.serif, fontSize: 15, color: WIRE_INK }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Headline */}
        <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 32 }}>
              § I · Statement of Purpose
            </div>
            <WireTitle size={92} style={{ marginBottom: 10 }}>A verified</WireTitle>
            <WireTitle size={92} italic style={{ marginBottom: 10 }}>ledger</WireTitle>
            <WireTitle size={92}>of trade.</WireTitle>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 48 }}>
            <WireBody width={420} style={{ fontSize: 15 }}>
              Alessandro Cordano sources premium agricultural commodities for institutional buyers —
              from verified origins, under audited contracts, with full traceability of every kilogram moved.
            </WireBody>
            <WireButton variant="dark">Book a Call →</WireButton>
          </div>
        </div>
      </div>

      <WireStrip items={['Block #0291 Verified', 'Block #0290 Verified', 'Block #0289 Verified', 'Chain Integrity 100%']} />

      {/* Section II — Mandate (3 principles) */}
      <div style={{ padding: '80px 56px', borderBottom: `1px solid ${WIRE_BORDER}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 14 }}>
              § II · Mandate
            </div>
            <WireTitle size={40}>Three <em style={{ fontStyle: 'italic' }}>principles</em>, kept absolutely.</WireTitle>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              ['Verified Origin', 'Every lot tied to a named cooperative, farm or estate. No anonymous tonnage.'],
              ['Audited Contracts', 'Bilateral agreements with independent compliance review on every transaction.'],
              ['Settled, in Full', 'No partial deliveries. No outstanding claims. Performance recorded, not promised.'],
            ].map(([title, body], i) => (
              <div key={title} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 24, padding: '24px 0', borderTop: i === 0 ? `1px solid ${WIRE_INK}` : `1px solid ${WIRE_BORDER}` }}>
                <div style={{ fontFamily: wireFont.mono, fontSize: 11, color: WIRE_MUTED, letterSpacing: '0.1em' }}>0{i + 1}</div>
                <div>
                  <div style={{ fontFamily: wireFont.serif, fontSize: 24, fontWeight: 500, marginBottom: 8 }}>{title}</div>
                  <WireBody>{body}</WireBody>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section III — Portfolio at a glance (data-table feel) */}
      <div style={{ padding: '80px 56px', borderBottom: `1px solid ${WIRE_BORDER}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 14 }}>
              § III · Portfolio
            </div>
            <WireTitle size={40}>The <em style={{ fontStyle: 'italic' }}>commodity</em> register.</WireTitle>
            <WireBody style={{ marginTop: 18 }}>
              A live index of categories currently under management. Each entry resolves to verified lots,
              certifications and counterparty terms.
            </WireBody>
            <div style={{ marginTop: 28 }}>
              <WireButton variant="outline">Open Full Register →</WireButton>
            </div>
          </div>
          <div>
            {[
              ['CAT-01', 'Specialty Coffee', 'AR, CO, ET', 'SCA 85+'],
              ['CAT-02', 'Cacao & Cocoa', 'PE, EC, GH', 'Fair Trade'],
              ['CAT-03', 'Frozen Fruit (IQF)', 'CL, PE, EG', 'BRC Grade A'],
              ['CAT-04', 'Fresh Produce', 'PE, MX, EG', 'GlobalGAP'],
              ['CAT-05', 'Botanicals & Spices', 'EG, IN', 'EU-Organic'],
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr 120px 120px 20px', gap: 16, alignItems: 'center', padding: '18px 0', borderTop: i === 0 ? `1px solid ${WIRE_INK}` : `1px solid ${WIRE_BORDER}` }}>
                <span style={{ fontFamily: wireFont.mono, fontSize: 10, color: WIRE_MUTED, letterSpacing: '0.14em' }}>{row[0]}</span>
                <span style={{ fontFamily: wireFont.serif, fontSize: 20 }}>{row[1]}</span>
                <span style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', color: WIRE_MUTED }}>{row[2]}</span>
                <span style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', color: WIRE_MUTED }}>{row[3]}</span>
                <span style={{ fontFamily: wireFont.serif, fontSize: 18, color: WIRE_MUTED }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section IV — Selected casework preview */}
      <div style={{ padding: '80px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
          <div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 14 }}>
              § IV · Selected Casework
            </div>
            <WireTitle size={40}><em style={{ fontStyle: 'italic' }}>Past</em> trades, on the record.</WireTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {[1, 2, 3, 4].map((i) => (
              <WireBox key={i} padding={20} style={{ background: '#fff' }}>
                <WireImage label={`case ${i}`} height={140} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED }}>
                  <span>Case #0{20 + i}</span>
                  <span>Q{i} 2025</span>
                </div>
                <div style={{ fontFamily: wireFont.serif, fontSize: 18, fontWeight: 500, marginTop: 8, lineHeight: 1.25 }}>
                  {['Cacao Andes → EU Confectioner', 'IQF Berries Chile → JP Retail', 'Arabica Colombia → KR Roastery', 'Avocado Hass Peru → DE Importer'][i - 1]}
                </div>
                <WireLines count={2} style={{ marginTop: 12 }} />
              </WireBox>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — minimal */}
      <div style={{ background: WIRE_DARK, color: '#fff', padding: '64px 56px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
        <div style={{ fontFamily: wireFont.serif, fontSize: 38, lineHeight: 1.2, maxWidth: 720 }}>
          To open a counterparty review, request a private dossier or schedule a call.
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Book a Call</span>
          <span style={{ border: '1px solid #fff', color: '#fff', padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>Request Dossier</span>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

Object.assign(window, { HomeB });
