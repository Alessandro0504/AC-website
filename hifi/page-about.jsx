/* Hi-Fi About & Contact page */

function AboutContactHiFi() {
  return (
    <div style={{ width: 1280, background: AC.paper, color: AC.ink, fontFamily: AC.sans }} data-screen-label="About & Contact — Hi-Fi">
      <div style={{ background: AC.forest }}>
        <HiFiNav active="About" onDark />
      </div>

      {/* About hero */}
      <div style={{ padding: '80px 56px', background: AC.paper }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 36 }}>
          <Tag variant="outline">§ VI · The Principal</Tag>
          <Eyebrow>The Agrarian Ledger / Page 06</Eyebrow>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.3fr', gap: 64, alignItems: 'flex-start' }}>
          <div style={{ position: 'relative' }}>
            <HiFiImage subject="alessandro cordano" tone="warm" ratio="3/4" />
            <div style={{
              position: 'absolute', bottom: -16, left: -16,
              background: AC.gold, color: AC.ink,
              padding: '12px 16px',
              fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700,
            }}>◆ Geneva · 2026</div>
          </div>
          <div>
            <Display size={80} style={{ marginBottom: 6 }}>Alessandro</Display>
            <Display size={80}><I color={AC.gold}>Cordano.</I></Display>
            <Eyebrow style={{ marginTop: 18 }}>Founder · Principal · Sourcing Manager</Eyebrow>

            <Body size={16} width={540} style={{ marginTop: 32 }}>
              Sourcing manager for agro commodities. A decade of moving coffee, cacao, frozen fruit and
              specialty produce between verified origins and institutional buyers — under audited contracts,
              with full traceability of every lot.
            </Body>
            <Body size={16} width={540} style={{ marginTop: 18 }}>
              AC works exclusively with counterparties who pass an internal compliance review. Every
              transaction is documented; every claim, resolved.
            </Body>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 48, paddingTop: 28, borderTop: `1px solid ${AC.rule}` }}>
              {[['10+', 'Years in trade'], ['14', 'Jurisdictions'], ['40+', 'Active counterparties']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: AC.serif, fontSize: 44, lineHeight: 1, letterSpacing: '-0.03em' }}>{n}</div>
                  <Eyebrow style={{ marginTop: 10 }}>{l}</Eyebrow>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <MarqueeStrip items={['Compliance · KYC / AML', 'Insurance · Marine Cargo', 'Banking · Tier-1 Swiss', 'Counsel · Geneva', 'Audit · PwC Annual']} variant="forest" />

      {/* Principles */}
      <div style={{ padding: '96px 56px', background: AC.paperWarm, borderTop: `1px solid ${AC.rule}`, borderBottom: `1px solid ${AC.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64 }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>How we work</Eyebrow>
            <Display size={52}>Four <I color={AC.gold}>principles.</I></Display>
            <Body size={14} color={AC.muted} style={{ marginTop: 24 }}>
              Kept absolutely. They are the conditions under which we agree to broker anything.
            </Body>
          </div>
          <div>
            {[
              ['Origin-First',     'Every lot tied to a named cooperative, farm or estate. No anonymous tonnage.'],
              ['Audited Contracts','Bilateral agreements with independent compliance review on every transaction.'],
              ['Settled, in Full', 'No partial deliveries. No outstanding claims. Performance recorded, not promised.'],
              ['Quiet Operation',  'Counterparty details remain confidential unless permission is granted.'],
            ].map(([t, d], i) => (
              <div key={t} style={{
                display: 'grid', gridTemplateColumns: '60px 1fr', gap: 28,
                padding: '24px 0',
                borderTop: i === 0 ? `1px solid ${AC.ink}` : `1px solid ${AC.rule}`,
              }}>
                <div style={{ fontFamily: AC.mono, fontSize: 11, color: AC.gold, letterSpacing: '0.18em', fontWeight: 700 }}>0{i + 1}</div>
                <div>
                  <div style={{ fontFamily: AC.serif, fontSize: 26, fontWeight: 500, marginBottom: 8 }}>{t}</div>
                  <Body size={14} width={520}>{d}</Body>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact / Book a call */}
      <div style={{ padding: '96px 56px', background: AC.paper }}>
        <div style={{ background: AC.forest, color: AC.paper, padding: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, position: 'relative', overflow: 'hidden' }}>
          {/* texture */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          }} />
          <div style={{ position: 'relative' }}>
            <Eyebrow color="rgba(244,239,228,0.55)" style={{ marginBottom: 18 }}>Begin a Relationship</Eyebrow>
            <Display size={56} color={AC.paper}>Book a <I color={AC.goldLight}>private</I></Display>
            <Display size={56} color={AC.paper} style={{ marginTop: 4 }}>call.</Display>
            <Body size={15} color="rgba(244,239,228,0.7)" width={400} style={{ marginTop: 28 }}>
              A 30-minute conversation to scope your sourcing requirements, jurisdictions and timing.
              No fee. No obligation. Calendar opens upon initial review.
            </Body>

            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['Geneva HQ', 'Rue du Rhône 00 · 1204 GE'],
                ['Email',     'desk@ac-sourcing.com'],
                ['Direct',    '+41 22 000 00 00'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 20, paddingTop: 14, borderTop: `1px solid ${AC.ruleDark}` }}>
                  <div style={{ fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.5)', width: 80 }}>{k}</div>
                  <div style={{ fontFamily: AC.serif, fontSize: 17, color: AC.paper }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', background: AC.cream, color: AC.ink, padding: '32px 36px 28px', display: 'flex', flexDirection: 'column' }}>
            {/* Form header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 18, marginBottom: 24, borderBottom: `1px solid ${AC.ink}` }}>
              <div>
                <Eyebrow style={{ marginBottom: 4 }}>Form · No. 01</Eyebrow>
                <div style={{ fontFamily: AC.serifItalic, fontStyle: 'italic', fontSize: 22 }}>Counterparty Intake</div>
              </div>
              <Tag variant="outline">Step 1 / 2</Tag>
            </div>

            <div style={{ flex: 1 }}>
            {[
              ['Full Name', 'text', 'Name as it appears on incorporation documents'],
              ['Organization', 'text', 'Legal entity'],
              ['Role / Title', 'text', null],
              ['Sourcing Interest', 'select', 'Specialty Coffee, Frozen Fruit, …'],
              ['Brief Description', 'textarea', 'Volumes, timing, jurisdictions'],
            ].map(([label, kind, ph]) => (
              <div key={label} style={{ marginBottom: 20 }}>
                <Eyebrow style={{ marginBottom: 8 }}>{label}</Eyebrow>
                <div style={{
                  height: kind === 'textarea' ? 96 : 44,
                  borderBottom: `1px solid ${AC.ink}`,
                  background: 'transparent',
                  padding: '12px 0',
                  fontFamily: AC.serifItalic,
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: AC.muted,
                }}>
                  {ph || ''}
                  {kind === 'select' && <span style={{ float: 'right', fontFamily: AC.sans }}>▾</span>}
                </div>
              </div>
            ))}
            </div>

            {/* Form footer */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${AC.ink}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <Eyebrow style={{ fontSize: 9 }}>◆ Confidential · Reviewed within 48h</Eyebrow>
                <div style={{ fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.14em', color: AC.muted }}>By submitting you accept our intake protocol.</div>
              </div>
              <GoldButton>Request Call →</GoldButton>
            </div>
          </div>
        </div>
      </div>

      <HiFiFooter />
    </div>
  );
}

Object.assign(window, { AboutContactHiFi });
