/* Case Studies + About/Contact pages */

function CaseStudiesPage() {
  const cases = [
    {
      id: 'Case #024',
      year: 'Q4 2025',
      title: 'Arabica Colombia → Seoul Roastery',
      origin: 'Huila, Colombia',
      destination: 'Seoul, KR',
      volume: '18 MT',
      duration: '47 Days',
      summary: 'Single-estate microlots placed with an award-winning Korean roastery seeking SCA 87+ traceable origin.',
    },
    {
      id: 'Case #023',
      year: 'Q3 2025',
      title: 'IQF Berry Mix Chile → Frankfurt',
      origin: 'Curicó, Chile',
      destination: 'Frankfurt, DE',
      volume: '320 MT',
      duration: '62 Days',
      summary: 'Counter-seasonal IQF supply executed under cold-chain SLA across the Pacific and Atlantic corridors.',
    },
    {
      id: 'Case #022',
      year: 'Q2 2025',
      title: 'Hass Avocados Peru → Hamburg',
      origin: 'La Libertad, Peru',
      destination: 'Hamburg, DE',
      volume: '210 MT',
      duration: '38 Days',
      summary: 'Controlled-atmosphere shipping for a Tier-1 European importer, with end-to-end ESG documentation.',
    },
    {
      id: 'Case #021',
      year: 'Q1 2025',
      title: 'Cacao Andes → EU Confectioner',
      origin: 'Piura, Peru',
      destination: 'Brussels, BE',
      volume: '85 MT',
      duration: '54 Days',
      summary: 'Fair-trade single-origin beans for a heritage Belgian confectioner; lot fully audited against EUDR.',
    },
  ];

  return (
    <WirePage label="Case Studies">
      <WireNav active="About" />
      <WireStrip items={['Selected Casework', 'Confidentiality Honored', 'Counterparty Details Redacted']} />

      <div style={{ padding: '64px 56px 32px' }}>
        <WireEyebrow>Selected Casework · By Permission</WireEyebrow>
        <WireTitle size={84}>Trades, on the <em style={{ fontStyle: 'italic' }}>record.</em></WireTitle>
        <WireBody width={620} style={{ marginTop: 24, fontSize: 15 }}>
          A redacted sample of recent transactions. Counterparty names are shared in private dossiers
          after a counterparty review.
        </WireBody>
      </div>

      {/* List view */}
      <div style={{ padding: '24px 56px 64px' }}>
        {cases.map((c, i) => (
          <div key={c.id} style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr 280px',
            gap: 32,
            padding: '36px 0',
            borderTop: i === 0 ? `1px solid ${WIRE_INK}` : `1px solid ${WIRE_BORDER}`,
            alignItems: 'flex-start',
          }}>
            <WireImage label={c.title.toLowerCase()} height={180} />
            <div>
              <div style={{ display: 'flex', gap: 16, fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 12 }}>
                <span>{c.id}</span><span>·</span><span>{c.year}</span>
              </div>
              <WireTitle size={28} style={{ marginBottom: 14 }}>{c.title}</WireTitle>
              <WireBody>{c.summary}</WireBody>
              <div style={{ marginTop: 20, fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', borderBottom: `1px solid ${WIRE_INK}`, display: 'inline-block', paddingBottom: 2 }}>
                Read trade brief →
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, borderLeft: `1px solid ${WIRE_BORDER}`, paddingLeft: 20 }}>
              {[['Origin', c.origin], ['Destination', c.destination], ['Volume', c.volume], ['Cycle', c.duration]].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED }}>{k}</div>
                  <div style={{ fontFamily: wireFont.serif, fontSize: 16, fontWeight: 500, marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: WIRE_DARK, color: '#fff', padding: '56px 56px', textAlign: 'center' }}>
        <div style={{ fontFamily: wireFont.serif, fontSize: 32, fontStyle: 'italic' }}>Discuss a similar trade structure.</div>
        <div style={{ marginTop: 24 }}>
          <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Book a Call</span>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

function AboutContactPage() {
  return (
    <WirePage label="About & Contact">
      <WireNav active="About" />

      {/* About hero — portrait + bio */}
      <div style={{ padding: '64px 56px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'flex-start' }}>
        <WireImage label="portrait · alessandro cordano" ratio="3/4" />
        <div>
          <WireEyebrow>Principal</WireEyebrow>
          <WireTitle size={72} style={{ marginBottom: 8 }}>Alessandro</WireTitle>
          <WireTitle size={72} italic style={{ marginBottom: 28 }}>Cordano</WireTitle>
          <WireBody width={520} style={{ fontSize: 15, marginBottom: 18 }}>
            Sourcing manager for agro commodities. A decade of moving coffee, cacao, frozen fruit and specialty
            produce between verified origins and institutional buyers — under audited contracts, with full
            traceability of every lot.
          </WireBody>
          <WireBody width={520} style={{ fontSize: 15 }}>
            AC works exclusively with counterparties who pass an internal compliance review. Every transaction
            is documented; every claim, resolved.
          </WireBody>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40, paddingTop: 24, borderTop: `1px solid ${WIRE_BORDER}` }}>
            {[['10+', 'Years in trade'], ['14', 'Jurisdictions'], ['40+', 'Active counterparties']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: wireFont.serif, fontSize: 32 }}>{n}</div>
                <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WireStrip items={['Compliance · KYC / AML', 'Insurance · Marine Cargo', 'Banking · Tier-1 Swiss', 'Counsel · Geneva']} />

      {/* Principles */}
      <div style={{ padding: '72px 56px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 56 }}>
        <div>
          <WireEyebrow>How we work</WireEyebrow>
          <WireTitle size={40}>Four <em style={{ fontStyle: 'italic' }}>principles.</em></WireTitle>
        </div>
        <div>
          {[
            ['Origin-First', 'Every lot tied to a named cooperative, farm or estate. No anonymous tonnage.'],
            ['Audited Contracts', 'Bilateral agreements with independent compliance review on every transaction.'],
            ['Settled, in Full', 'No partial deliveries. No outstanding claims.'],
            ['Quiet Operation', 'Counterparty details remain confidential unless permission is granted.'],
          ].map(([t, d], i) => (
            <div key={t} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 24, padding: '20px 0', borderTop: i === 0 ? `1px solid ${WIRE_INK}` : `1px solid ${WIRE_BORDER}` }}>
              <div style={{ fontFamily: wireFont.mono, fontSize: 11, color: WIRE_MUTED }}>0{i + 1}</div>
              <div>
                <div style={{ fontFamily: wireFont.serif, fontSize: 22, fontWeight: 500, marginBottom: 6 }}>{t}</div>
                <WireBody>{d}</WireBody>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact / Book a call */}
      <div style={{ padding: '24px 56px 80px' }}>
        <div style={{ background: '#fff', border: `1px solid ${WIRE_BORDER}`, padding: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <WireEyebrow>Begin a Relationship</WireEyebrow>
            <WireTitle size={48} style={{ marginBottom: 16 }}>Book a <em style={{ fontStyle: 'italic' }}>private</em> call.</WireTitle>
            <WireBody>
              A 30-minute conversation to scope your sourcing requirements, jurisdictions and timing.
              No fee. No obligation. Calendar opens upon initial review.
            </WireBody>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[['Geneva HQ', 'Rue du Rhône 00 · 1204 GE'], ['Email', 'desk@alessandrocordano.com'], ['Direct', '+41 22 000 00 00']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 16 }}>
                  <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED, width: 80 }}>{k}</div>
                  <div style={{ fontFamily: wireFont.serif, fontSize: 16 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {[
              ['Full Name', 'text'],
              ['Organization', 'text'],
              ['Role / Title', 'text'],
              ['Sourcing Interest', 'select'],
              ['Brief Description', 'textarea'],
            ].map(([label, kind]) => (
              <div key={label} style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 6 }}>{label}</div>
                <div style={{ height: kind === 'textarea' ? 100 : 40, border: `1px solid ${WIRE_BORDER}`, background: WIRE_BG }} />
              </div>
            ))}
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: wireFont.mono, fontSize: 9, color: WIRE_MUTED, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Confidential · Reviewed within 48h</span>
              <span style={{ background: WIRE_DARK, color: '#fff', padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Request Call →</span>
            </div>
          </div>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

Object.assign(window, { CaseStudiesPage, AboutContactPage });
