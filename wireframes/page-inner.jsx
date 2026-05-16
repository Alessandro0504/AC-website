/* Inner pages: Portfolio, Track Record, Network */

function PortfolioPage() {
  const cats = [
    { id: 'CAT-01', name: 'Fresh Produce', items: ['Blueberries', 'Hass Avocados', 'Fresh Ginger', 'Asparagus'] },
    { id: 'CAT-02', name: 'Frozen (IQF)', items: ['IQF Strawberries', 'Tropical Fruits Mix', 'IQF Blueberries', 'Mango Chunks'] },
    { id: 'CAT-03', name: 'Specialty Coffee', items: ['Arabica SCA 85+', 'Organic Fair Trade', 'Green Coffee Beans', 'Single-Estate Lots'] },
  ];

  return (
    <WirePage label="Portfolio">
      <WireNav active="Portfolio" />
      <WireStrip items={['Commodity Markets +1.24%', 'Global Logistics Stable', 'Harvest Status: Peak Season', 'Market Sentiment: Bullish']} />

      <div style={{ padding: '64px 56px 40px' }}>
        <WireEyebrow>Institutional Access</WireEyebrow>
        <WireTitle size={84}>Product <em style={{ fontStyle: 'italic' }}>Portfolio</em></WireTitle>
        <WireBody width={620} style={{ marginTop: 24, fontSize: 15 }}>
          A meticulously curated ledger of premium agricultural commodities, sourced directly from
          verified primary producers across the Americas and Asia-Pacific.
        </WireBody>
      </div>

      {/* 3-col category sections */}
      <div style={{ padding: '24px 56px 56px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {cats.map((c) => (
          <div key={c.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, borderBottom: `1px solid ${WIRE_INK}`, paddingBottom: 10 }}>
              <div style={{ fontFamily: wireFont.serif, fontSize: 28, fontStyle: 'italic', fontWeight: 500 }}>{c.name}</div>
              <span style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', color: WIRE_MUTED }}>{c.id}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {c.items.map((it) => (
                <div key={it}>
                  <WireImage label={it.toLowerCase()} ratio="1/1" />
                  <div style={{ fontFamily: wireFont.serif, fontSize: 15, fontWeight: 500, marginTop: 10 }}>{it}</div>
                  <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 4 }}>MOQ · 5,000 KG →</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom: additional inventory + featured */}
      <div style={{ padding: '32px 56px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
        <WireBox padding={20} style={{ background: '#fff' }}>
          <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 12 }}>Additional Inventory</div>
          <div style={{ fontFamily: wireFont.serif, fontSize: 16 }}>Green Asparagus · Organic Turmeric · Sacha Inchi</div>
        </WireBox>
        <WireBox padding={20} style={{ background: '#fff' }}>
          <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 12 }}>◆ Cold Chain Integrity</div>
          <WireLines count={3} />
        </WireBox>
        <WireBox padding={20} style={{ background: '#fff', borderLeft: `3px solid #e4cf6b` }}>
          <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginBottom: 12 }}>Current Offering</div>
          <div style={{ fontFamily: wireFont.serif, fontSize: 18, fontWeight: 500 }}>Green Coffee Beans</div>
          <div style={{ fontFamily: wireFont.mono, fontSize: 9, color: WIRE_MUTED, marginTop: 4 }}>DIRECT FROM ORIGIN · AVAIL. LOTS</div>
        </WireBox>
      </div>

      {/* Inquiry band */}
      <div style={{ background: WIRE_DARK, color: '#fff', padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: wireFont.serif, fontSize: 28, fontStyle: 'italic' }}>Custom Procurement Requests</div>
          <WireLines count={1} style={{ marginTop: 12, width: 480 }} />
        </div>
        <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '12px 20px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Inquiry Desk ✉</span>
      </div>

      <WireFooter />
    </WirePage>
  );
}

function TrackRecordPage() {
  return (
    <WirePage label="Track Record">
      <WireNav active="Track Record" />

      <div style={{ padding: '64px 56px 40px' }}>
        <div style={{ display: 'inline-block', background: '#e4cf6b', color: WIRE_INK, padding: '5px 10px', fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 22 }}>
          Audited Performance
        </div>
        <WireTitle size={84}>Verified</WireTitle>
        <WireTitle size={84} italic>Track Record</WireTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, marginTop: 28 }}>
          <WireBody width={560} style={{ fontSize: 15 }}>
            Every transaction is recorded and verified, providing complete transparency for all partners.
            Our commitment to operational excellence is etched into every executed contract.
          </WireBody>
          <div style={{ alignSelf: 'end', display: 'flex', alignItems: 'center', gap: 12, fontFamily: wireFont.serif, fontSize: 16, fontStyle: 'italic', color: WIRE_MUTED }}>
            <div style={{ width: 24, height: 24, border: `1px solid ${WIRE_INK}` }} /> Integrity in Action
          </div>
        </div>
      </div>

      <WireStrip items={['Global Logistics Node Active', 'Secure Verification', 'Asset Custody Certified', 'Compliance Audit Q4-2025']} />

      {/* 4 stat cards */}
      <div style={{ padding: '48px 56px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          ['100%', 'Payment Completion Rate', 'Full settlement on every trade since inception, without default or delay.'],
          ['98%+', 'On-Time Delivery', 'Exceeding global standards for maritime and overland logistics precision.'],
          ['200+', 'Verified Transactions', 'Bilateral agreements executed across 14 sovereign jurisdictions.'],
          ['Zero', 'Unresolved Claims', 'Maintaining a flawless record of professional dispute resolution.'],
        ].map(([n, l, t]) => (
          <WireBox key={l} padding={22} style={{ background: '#fff' }}>
            <div style={{ width: 18, height: 18, border: `1px solid ${WIRE_MUTED}`, marginBottom: 24 }} />
            <div style={{ fontFamily: wireFont.serif, fontSize: 36, lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 10, fontWeight: 700 }}>{l}</div>
            <div style={{ fontSize: 11.5, color: WIRE_MUTED, marginTop: 12, lineHeight: 1.55 }}>{t}</div>
          </WireBox>
        ))}
      </div>

      {/* Ledger of assurance */}
      <div style={{ padding: '64px 56px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
        <div>
          <WireTitle size={36} italic>The Ledger of Assurance</WireTitle>
          <WireBody style={{ marginTop: 18 }}>
            Our proprietary verification process mirrors ledger architecture. Each trade block contains encrypted
            metadata of origin, quality inspection, and financial clearance — creating an immutable chain of trust.
          </WireBody>
          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {['Encrypted Chain of Custody', 'Regulatory Compliance Nodes'].map((l) => (
              <div key={l} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 28, height: 28, background: '#e4e0d7', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: wireFont.sans, fontWeight: 600, fontSize: 13 }}>{l}</div>
                  <WireLines count={2} style={{ marginTop: 6, width: 280 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <WireBox padding={20} style={{ background: '#e4e0d7' }}>
          {['#0291', '#0290', '#0289'].map((id, i) => (
            <div key={id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', background: '#fff', marginBottom: 10, borderLeft: `3px solid ${i === 0 ? WIRE_DARK : i === 1 ? '#e4cf6b' : WIRE_MUTED}` }}>
              <span style={{ fontFamily: wireFont.mono, fontSize: 10, letterSpacing: '0.14em', color: WIRE_MUTED, width: 80 }}>BLOCK {id}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: wireFont.serif, fontSize: 14, fontWeight: 500 }}>
                  {['Soft Commodity Clear: Coffee (AR-X)', 'Precious Lot: Cacao (CO-Z)', 'Frozen Sector: IQF Berries (CL-V)'][i]}
                </div>
                <div style={{ fontFamily: wireFont.mono, fontSize: 9, color: WIRE_MUTED, marginTop: 2 }}>
                  VERIFIED · {14 - i} OCT 2025
                </div>
              </div>
              <div style={{ width: 18, height: 18, border: `1px solid ${WIRE_INK}`, borderRadius: '50%' }} />
            </div>
          ))}
          <div style={{ marginTop: 16, fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: WIRE_MUTED, textAlign: 'center', padding: 8 }}>
            History data hidden · Archive available upon partner request
          </div>
        </WireBox>
      </div>

      <div style={{ background: WIRE_DARK, color: '#fff', padding: '72px 56px', textAlign: 'center' }}>
        <div style={{ fontFamily: wireFont.serif, fontSize: 36, lineHeight: 1.25, maxWidth: 720, margin: '0 auto' }}>
          Request a comprehensive <span style={{ color: '#e4cf6b' }}>compliance audit report</span> of our recent settlements.
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <span style={{ background: '#e4cf6b', color: WIRE_INK, padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700 }}>Download Portfolio</span>
          <span style={{ border: '1px solid #fff', color: '#fff', padding: '14px 22px', fontFamily: wireFont.sans, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>Institutional Inquiry</span>
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

function NetworkPage() {
  const origins = [
    ['Peru', 'Strategic Hub: Lima', 'Direct partnerships with high-altitude cooperatives. Specializing in specialized grains and superfoods with full traceability.', ['Certified Organic', 'Export Tier 1']],
    ['Chile', 'Strategic Hub: Valparaíso', 'Utilizing off-season harvest cycles to ensure year-round availability for northern hemisphere markets.', ['Climate Controlled', 'Cold-Chain Logistics']],
    ['Egypt', 'Strategic Hub: Alexandria', 'Strategic gateway for aromatic crops and botanical exports to the EU and Asian markets.', ['Suez Access', 'Quality Audited']],
  ];
  const markets = [
    ['Taiwan', 'Premium Segment Access', 'High-demand market for specialty produce and functional ingredients. Navigating complex import regulations with local expertise.', ['High Growth', 'Customs Cleared']],
    ['EU Markets', 'Compliance & Standards', 'Direct supply chains into major European retail networks. Full alignment with EUDR and ESG sustainability reporting requirements.', ['ESG Aligned', 'Single-Sale Ready']],
    ['MENA Region', 'Emerging Economies', 'Strategic presence in UAE and Saudi Arabia. Capturing the rapid expansion of food security initiatives and urban developments.', ['Key Partner', 'Gov-Contracts']],
  ];

  return (
    <WirePage label="Network">
      <WireNav active="Network" />
      <WireStrip items={['Agri-Index +1.24% Stable', 'LATAM-Origin Stable', 'APAC-Demand Rising', 'EU-Compliance Updated', 'MENA-Logistics Optimized']} />

      <div style={{ padding: '64px 56px 24px' }}>
        <WireEyebrow>The Agrarian Ledger / Page 05</WireEyebrow>
        <WireTitle size={84}>Global <em style={{ fontStyle: 'italic' }}>Network</em></WireTitle>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, marginTop: 24, alignItems: 'end' }}>
          <WireBody width={620} style={{ fontSize: 15 }}>
            A cross-continental infrastructure connecting premier agricultural supply origins with high-yield
            buyer markets through verified procurement channels.
          </WireBody>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED }}>Network Status</div>
              <div style={{ fontFamily: wireFont.serif, fontStyle: 'italic', fontSize: 18 }}>Active & Verified</div>
            </div>
            <div style={{ width: 32, height: 32, border: `1px solid ${WIRE_INK}`, borderRadius: '50%' }} />
          </div>
        </div>
      </div>

      {/* Origins / Markets two-column */}
      <div style={{ padding: '48px 56px', display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 24 }}>
        <div>
          <WireTitle size={32} italic style={{ marginBottom: 24 }}>Supply Origins</WireTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {origins.map(([country, hub, desc, tags]) => (
              <WireBox key={country} padding={20} style={{ background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 20, background: '#e4e0d7', border: `1px solid ${WIRE_BORDER}` }} />
                    <div>
                      <div style={{ fontFamily: wireFont.serif, fontSize: 22, fontWeight: 500 }}>{country}</div>
                      <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 2 }}>{hub}</div>
                    </div>
                  </div>
                  <div style={{ width: 18, height: 18, border: `1px solid ${WIRE_MUTED}` }} />
                </div>
                <div style={{ fontSize: 12, color: '#4a4842', marginTop: 14, lineHeight: 1.55 }}>{desc}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {tags.map((t) => (
                    <span key={t} style={{ background: '#e4e0d7', padding: '4px 10px', fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </WireBox>
            ))}
          </div>
        </div>

        {/* Center connector */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, paddingTop: 100 }}>
          <div style={{ width: 1, flex: 1, background: WIRE_BORDER }} />
          <div style={{ width: 36, height: 36, border: `1px solid ${WIRE_INK}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: WIRE_BG }}>⇄</div>
          <div style={{ width: 1, flex: 1, background: WIRE_BORDER }} />
          <div style={{ width: 36, height: 36, background: WIRE_DARK, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>◆</div>
          <div style={{ width: 1, flex: 1, background: WIRE_BORDER }} />
        </div>

        <div>
          <WireTitle size={32} italic style={{ marginBottom: 24 }}>Buyer Markets</WireTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {markets.map(([country, hub, desc, tags]) => (
              <WireBox key={country} padding={20} style={{ background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: 18, height: 18, border: `1px solid ${WIRE_MUTED}` }} />
                  <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textAlign: 'right' }}>
                    <div>
                      <div style={{ fontFamily: wireFont.serif, fontSize: 22, fontWeight: 500 }}>{country}</div>
                      <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: WIRE_MUTED, marginTop: 2 }}>{hub}</div>
                    </div>
                    <div style={{ width: 28, height: 20, background: '#e4e0d7', border: `1px solid ${WIRE_BORDER}` }} />
                  </div>
                </div>
                <div style={{ fontSize: 12, color: '#4a4842', marginTop: 14, lineHeight: 1.55, textAlign: 'right' }}>{desc}</div>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {tags.map((t) => (
                    <span key={t} style={{ background: '#f3e8a8', padding: '4px 10px', fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </WireBox>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic reach band */}
      <div style={{ padding: '24px 56px 80px' }}>
        <div style={{ background: WIRE_DARK, color: '#fff', padding: 36, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'center' }}>
          <div>
            <WireTitle size={36} italic style={{ color: '#fff' }}>Strategic Global Reach</WireTitle>
            <WireBody style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, fontSize: 13 }}>
              Our network is more than a list of countries; it's a living ecosystem of trusted brokers,
              logistics experts, and financial institutions operating in unison.
            </WireBody>
            <div style={{ display: 'flex', gap: 40, marginTop: 28 }}>
              <div>
                <div style={{ fontFamily: wireFont.serif, fontSize: 40, color: '#e4cf6b' }}>12+</div>
                <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Countries Reached</div>
              </div>
              <div>
                <div style={{ fontFamily: wireFont.serif, fontSize: 40, color: '#e4cf6b' }}>250k+</div>
                <div style={{ fontFamily: wireFont.mono, fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>Metric Tons Moved</div>
              </div>
            </div>
          </div>
          <WireImage label="world map · dark" height={260} style={{ background: 'repeating-linear-gradient(135deg, #0f1614 0 6px, #1f2622 6px 12px)', borderColor: '#3a4842', color: 'rgba(255,255,255,0.4)' }} />
        </div>
      </div>

      <WireFooter />
    </WirePage>
  );
}

Object.assign(window, { PortfolioPage, TrackRecordPage, NetworkPage });
