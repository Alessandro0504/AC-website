/* Hi-Fi Network page */

function NetworkHiFi() {
  const origins = [
    { country: 'Peru',  hub: 'Strategic Hub · Lima',         tone: 'bronze', desc: 'Direct partnerships with high-altitude cooperatives. Specializing in specialized grains and superfoods with full traceability.', tags: ['Certified Organic', 'Export Tier 1'] },
    { country: 'Chile', hub: 'Strategic Hub · Valparaíso',   tone: 'dark',   desc: 'Utilizing off-season harvest cycles to ensure year-round availability for northern hemisphere markets.', tags: ['Climate Controlled', 'Cold-Chain Logistics'] },
    { country: 'Egypt', hub: 'Strategic Hub · Alexandria',   tone: 'warm',   desc: 'Strategic gateway for aromatic crops and botanical exports to the EU and Asian markets.', tags: ['Suez Access', 'Quality Audited'] },
  ];
  const markets = [
    { country: 'Taiwan',     hub: 'Premium Segment Access',  tone: 'sand',   desc: 'High-demand market for specialty produce and functional ingredients. Navigating complex import regulations with local expertise.', tags: ['High Growth', 'Customs Cleared'] },
    { country: 'EU Markets', hub: 'Compliance & Standards',  tone: 'dark',   desc: 'Direct supply chains into major European retail networks. Full alignment with EUDR and ESG sustainability reporting requirements.', tags: ['ESG Aligned', 'Single-Sale Ready'] },
    { country: 'MENA',       hub: 'Emerging Economies',      tone: 'bronze', desc: 'Strategic presence in UAE and Saudi Arabia. Capturing the rapid expansion of food security initiatives and urban developments.', tags: ['Key Partner', 'Gov-Contracts'] },
  ];

  return (
    <div style={{ width: 1280, background: AC.paper, color: AC.ink, fontFamily: AC.sans }} data-screen-label="Network — Hi-Fi">
      <div style={{ background: AC.forest }}>
        <HiFiNav active="Network" onDark />
      </div>

      <MarqueeStrip items={['Agri-Index +1.24% Stable', 'LATAM-Origin Stable', 'APAC-Demand Rising', 'EU-Compliance Updated', 'MENA-Logistics Optimized']} variant="forest" />

      {/* Hero */}
      <div style={{ padding: '80px 56px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
          <Tag variant="outline">§ IV · The Network</Tag>
          <Eyebrow>The Agrarian Ledger / Page 04</Eyebrow>
        </div>
        <Display size={92}>Global <I color={AC.gold}>Network.</I></Display>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, marginTop: 36, alignItems: 'end' }}>
          <Body size={16} width={620}>
            A cross-continental infrastructure connecting premier agricultural supply origins with high-yield
            buyer markets through verified procurement channels. Every node on this map has been audited,
            sealed and brought into the AC ledger.
          </Body>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right' }}>
              <Eyebrow>Network Status</Eyebrow>
              <div style={{ fontFamily: AC.serifItalic, fontStyle: 'italic', fontSize: 22, marginTop: 4 }}>Active & Verified</div>
            </div>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: `1px solid ${AC.ink}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: AC.gold, boxShadow: `0 0 0 4px ${AC.gold}33` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero map */}
      <div style={{ padding: '32px 56px 56px' }}>
        <div style={{ position: 'relative', height: 360, background: AC.forest, border: `1px solid ${AC.forestLine}` }}>
          <NetworkMap />
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            {/* legend overlay re-styled for dark */}
          </div>
        </div>
      </div>

      {/* Origins / Markets two-column */}
      <div style={{ padding: '0 56px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 96px 1fr', gap: 24, alignItems: 'flex-start' }}>
          {/* ORIGINS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, paddingBottom: 14, borderBottom: `1px solid ${AC.ink}` }}>
              <div style={{ fontFamily: AC.serifItalic, fontStyle: 'italic', fontSize: 36 }}>Supply Origins</div>
              <Eyebrow>03 jurisdictions</Eyebrow>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {origins.map((o) => (
                <div key={o.country} style={{ background: AC.cream, border: `1px solid ${AC.rule}`, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
                    <HiFiImage subject={o.country.toLowerCase()} tone={o.tone} height={140} />
                    <div style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontFamily: AC.serif, fontSize: 24, fontWeight: 500 }}>{o.country}</div>
                          <Eyebrow style={{ marginTop: 4, fontSize: 9 }}>{o.hub}</Eyebrow>
                        </div>
                        <div style={{ width: 22, height: 22, border: `1px solid ${AC.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <div style={{ width: 6, height: 6, background: AC.gold }} />
                        </div>
                      </div>
                      <Body size={12.5} color={AC.muted} style={{ marginTop: 12, lineHeight: 1.55 }}>{o.desc}</Body>
                      <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap' }}>
                        {o.tags.map((t) => <Tag key={t} variant="outline">{t}</Tag>)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTOR */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80 }}>
            <div style={{ width: 1, flex: 1, background: AC.rule, minHeight: 60 }} />
            <div style={{ width: 44, height: 44, border: `1px solid ${AC.ink}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: AC.paper, fontFamily: AC.serif, fontSize: 20 }}>⇄</div>
            <div style={{ width: 1, flex: 1, background: AC.rule, minHeight: 60 }} />
            <div style={{ width: 44, height: 44, background: AC.forest, color: AC.gold, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: AC.serif, fontSize: 16 }}>◆</div>
            <div style={{ width: 1, flex: 1, background: AC.rule, minHeight: 60 }} />
            <div style={{ width: 44, height: 44, border: `1px solid ${AC.ink}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: AC.paper, fontFamily: AC.serif, fontSize: 20 }}>⇄</div>
            <div style={{ width: 1, flex: 1, background: AC.rule, minHeight: 60 }} />
          </div>

          {/* MARKETS */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 24, paddingBottom: 14, borderBottom: `1px solid ${AC.ink}` }}>
              <Eyebrow>03 markets</Eyebrow>
              <div style={{ fontFamily: AC.serifItalic, fontStyle: 'italic', fontSize: 36 }}>Buyer Markets</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {markets.map((m) => (
                <div key={m.country} style={{ background: AC.forest, color: AC.paper, overflow: 'hidden' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px' }}>
                    <div style={{ padding: '18px 20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ width: 22, height: 22, border: `1px solid ${AC.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <div style={{ width: 6, height: 6, background: AC.gold }} />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontFamily: AC.serif, fontSize: 24, fontWeight: 500, color: AC.paper }}>{m.country}</div>
                          <Eyebrow color="rgba(244,239,228,0.55)" style={{ marginTop: 4, fontSize: 9 }}>{m.hub}</Eyebrow>
                        </div>
                      </div>
                      <Body size={12.5} color="rgba(244,239,228,0.7)" style={{ marginTop: 12, lineHeight: 1.55, textAlign: 'right' }}>{m.desc}</Body>
                      <div style={{ display: 'flex', gap: 6, marginTop: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                        {m.tags.map((t) => <Tag key={t} variant="outlineLight">{t}</Tag>)}
                      </div>
                    </div>
                    <HiFiImage subject={m.country.toLowerCase()} tone={m.tone} height={140} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic reach */}
      <div style={{ padding: '0 56px 80px' }}>
        <div style={{ background: AC.gold, color: AC.ink, padding: '48px 40px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Eyebrow color="rgba(15,20,16,0.6)" style={{ marginBottom: 14 }}>§ V · Strategic Reach</Eyebrow>
            <Display size={44}>An <I>ecosystem,</I> not a list.</Display>
            <Body size={14} color="rgba(15,20,16,0.78)" style={{ marginTop: 18 }}>
              Our network is more than a list of countries; it's a living ecosystem of trusted brokers,
              logistics experts and financial institutions operating in unison.
            </Body>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[
              ['12+',   'Countries Reached'],
              ['250k+', 'Metric Tons Moved'],
              ['40+',   'Active Counterparties'],
              ['14',    'Jurisdictions'],
            ].map(([n, l]) => (
              <div key={l} style={{ borderTop: `1px solid rgba(15,20,16,0.25)`, paddingTop: 14 }}>
                <div style={{ fontFamily: AC.serif, fontSize: 52, lineHeight: 1, letterSpacing: '-0.03em' }}>{n}</div>
                <Eyebrow color="rgba(15,20,16,0.65)" style={{ marginTop: 8 }}>{l}</Eyebrow>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HiFiFooter />
    </div>
  );
}

Object.assign(window, { NetworkHiFi });
