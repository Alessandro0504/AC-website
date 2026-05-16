/* Hi-Fi Case Studies page */

function CaseStudiesHiFi() {
  const cases = [
    {
      id: '#024', year: 'Q4 2025',
      title: 'Arabica Colombia → Seoul Roastery',
      tone: 'bronze',
      origin: 'Huila, Colombia', destination: 'Seoul, KR',
      volume: '18 MT', duration: '47 Days',
      tags: ['SCA 87+', 'Single-Estate'],
      summary: 'Single-estate microlots placed with an award-winning Korean roastery seeking SCA 87+ traceable origin. Lot fully audited against EUDR equivalent.',
    },
    {
      id: '#023', year: 'Q3 2025',
      title: 'IQF Berry Mix Chile → Frankfurt',
      tone: 'dark',
      origin: 'Curicó, Chile', destination: 'Frankfurt, DE',
      volume: '320 MT', duration: '62 Days',
      tags: ['Cold-Chain SLA', 'Counter-Seasonal'],
      summary: 'Counter-seasonal IQF supply executed under cold-chain SLA across the Pacific and Atlantic corridors. Continuous temperature monitoring at four checkpoints.',
    },
    {
      id: '#022', year: 'Q2 2025',
      title: 'Hass Avocados Peru → Hamburg',
      tone: 'warm',
      origin: 'La Libertad, Peru', destination: 'Hamburg, DE',
      volume: '210 MT', duration: '38 Days',
      tags: ['ESG Reported', 'Tier-1 Importer'],
      summary: 'Controlled-atmosphere shipping for a Tier-1 European importer, with end-to-end ESG documentation and EUDR alignment.',
    },
    {
      id: '#021', year: 'Q1 2025',
      title: 'Cacao Andes → EU Confectioner',
      tone: 'sand',
      origin: 'Piura, Peru', destination: 'Brussels, BE',
      volume: '85 MT', duration: '54 Days',
      tags: ['Fair Trade', 'Heritage Client'],
      summary: 'Fair-trade single-origin beans for a heritage Belgian confectioner; lot fully audited against EUDR with farm-level GPS traceability.',
    },
  ];

  return (
    <div style={{ width: 1280, background: AC.paper, color: AC.ink, fontFamily: AC.sans }} data-screen-label="Case Studies — Hi-Fi">
      <div style={{ background: AC.forest }}>
        <HiFiNav active="Case Studies" onDark />
      </div>

      <div style={{ padding: '80px 56px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <Tag variant="outline">§ V · Selected Casework</Tag>
          <Eyebrow>By Permission · Counterparty Names Redacted</Eyebrow>
        </div>
        <Display size={92} style={{ marginBottom: 6 }}>Trades,</Display>
        <Display size={92}>on the <I color={AC.gold}>record.</I></Display>
        <Body size={16} width={620} style={{ marginTop: 32 }}>
          A redacted sample of recent transactions. Counterparty names are shared in private dossiers
          after a counterparty review. Every case below has been independently audited.
        </Body>
      </div>

      <MarqueeStrip items={['Confidentiality Honored', 'Audit Trail Preserved', 'Counterparty Details Redacted', 'Available on Request']} variant="forest" />

      {/* Case list */}
      <div style={{ padding: '24px 56px 64px' }}>
        {cases.map((c, i) => (
          <div key={c.id} style={{
            padding: '48px 0',
            borderTop: i === 0 ? `1px solid ${AC.ink}` : `1px solid ${AC.rule}`,
            display: 'grid',
            gridTemplateColumns: '320px 1fr 260px',
            gap: 40,
            alignItems: 'flex-start',
          }}>
            <HiFiImage subject={c.title.toLowerCase()} tone={c.tone} ratio="4/3" />

            <div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 14 }}>
                <Eyebrow style={{ color: AC.ink, fontWeight: 700 }}>Case {c.id}</Eyebrow>
                <span style={{ fontFamily: AC.mono, fontSize: 10, color: AC.muted }}>·</span>
                <Eyebrow>{c.year}</Eyebrow>
                <div style={{ flex: 1, height: 1, background: AC.rule }} />
                {c.tags.map((t) => <Tag key={t} variant="outline">{t}</Tag>)}
              </div>
              <Display size={32} style={{ marginBottom: 18, lineHeight: 1.1 }}>{c.title}</Display>
              <Body size={14} width={460}>{c.summary}</Body>
              <div style={{ marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: AC.mono, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', borderBottom: `1px solid ${AC.ink}`, paddingBottom: 4, fontWeight: 600 }}>
                Read trade brief <span style={{ fontFamily: AC.serif, fontSize: 16 }}>→</span>
              </div>
            </div>

            <div style={{ background: AC.cream, padding: 22, border: `1px solid ${AC.rule}` }}>
              {[
                ['Origin', c.origin],
                ['Destination', c.destination],
                ['Volume', c.volume],
                ['Cycle', c.duration],
              ].map(([k, v], j) => (
                <div key={k} style={{ paddingBottom: 14, marginBottom: 14, borderBottom: j < 3 ? `1px dashed ${AC.rule}` : 'none' }}>
                  <Eyebrow style={{ marginBottom: 6, fontSize: 9 }}>{k}</Eyebrow>
                  <div style={{ fontFamily: AC.serif, fontSize: 17, fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: AC.forest, color: AC.paper, padding: '96px 56px', textAlign: 'center' }}>
        <Display size={56} color={AC.paper}>
          Discuss a <I color={AC.goldLight}>similar trade</I> structure.
        </Display>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <GoldButton>Book a Call →</GoldButton>
          <GhostButton onDark>Request Dossier</GhostButton>
        </div>
      </div>

      <HiFiFooter />
    </div>
  );
}

Object.assign(window, { CaseStudiesHiFi });
