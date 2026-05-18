/* Hi-Fi Home — refinement of Home A (editorial magazine direction).
   Structure unchanged. Palette + typography + photographic placeholders applied.
   Live copy is fully exposed via the tweaks panel. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroTag": "◆ Institutional Sourcing",
  "heroEyebrow": "Est. 2018 · Geneva",
  "heroLine1": "Sourcing",
  "heroLine2Italic": "integrity,",
  "heroLine3": "at origin.",
  "heroBody": "AC brokers premium agricultural commodities for institutional buyers — coffee, cacao, frozen fruit and specialty produce — sourced directly from verified origins across the Americas, MENA and Asia-Pacific.",
  "heroCta1": "Book a Call",
  "heroCta2": "View Portfolio",
  "heroLotValue": "AR-X · Verified",
  "heroOriginValue": "Huila, Colombia",
  "heroPlateLabel": "Plate I · Cherries",
  "heroPlateNote": "Photographed under contract",

  "stripItem1": "Agri-Index +1.24% Stable",
  "stripItem2": "LATAM-Origin Stable",
  "stripItem3": "APAC-Demand Rising",
  "stripItem4": "EU-Compliance Updated",
  "stripItem5": "MENA-Logistics Optimized",

  "proofTitle1": "A record kept in",
  "proofTitle2Italic": "plain figures.",
  "proofAside": "Four numbers. Recorded, verified, available for review by any institutional counterparty.",
  "proofS1Value": "100%",
  "proofS1Label": "Settlement Rate",
  "proofS1Note": "Full settlement on every trade since inception.",
  "proofS2Value": "98%",
  "proofS2Label": "On-Time Delivery",
  "proofS2Note": "Maritime and overland precision, audited quarterly.",
  "proofS3Value": "200+",
  "proofS3Label": "Verified Trades",
  "proofS3Note": "Executed across 14 sovereign jurisdictions.",
  "proofS4Value": "Zero",
  "proofS4Label": "Open Claims",
  "proofS4Note": "A flawless dispute-resolution record.",

  "portTitle1": "What we",
  "portTitle2Italic": "source.",
  "portLink": "View full portfolio →",
  "portC1Name": "Specialty Coffee",
  "portC1Origins": "AR · CO · ET",
  "portC1Cert": "SCA 85+",
  "portC2Name": "Cacao & Cocoa",
  "portC2Origins": "PE · EC · GH",
  "portC2Cert": "Fair Trade",
  "portC3Name": "Frozen Fruit (IQF)",
  "portC3Origins": "CL · PE · EG",
  "portC3Cert": "BRC Grade A",

  "netTitlePre": "From",
  "netTitleItalic1": "origin",
  "netTitleMid": "to",
  "netTitleItalic2": "obligation.",
  "netBody": "A cross-continental infrastructure connecting premier agricultural origins with high-yield buyer markets through verified procurement channels.",
  "netS1Value": "12",
  "netS1Label": "Countries",
  "netS2Value": "250k",
  "netS2Label": "Metric Tons Moved",
  "netCta": "Explore the Network →",

  "manifestoQ1": "Commodity trade has always traveled on trust. ",
  "manifestoItalic": "We chose to write it down.",
  "manifestoQ2": " Every lot we handle is bound to a named origin, a compliance trail and a counterparty review — so the next buyer never has to guess what they are paying for.",
  "manifestoSig": "Alessandro Cordano",
  "manifestoRole": "Founder · Principal",

  "ctaTitle1Pre": "Book a",
  "ctaTitle1Italic": "private",
  "ctaTitle1Post": "consultation",
  "ctaTitle2": "to scope your requirements.",
  "ctaBody": "A thirty-minute conversation. No fee. No obligation. Calendar opens upon initial review.",
  "ctaCta1": "Book a Call →",
  "ctaCta2": "Download Capabilities"
}/*EDITMODE-END*/;

function HomeHiFi() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const { isMobile } = useBreakpoint();
  const tx = (k) => (v) => setTweak(k, v);

  const stripItems = [t.stripItem1, t.stripItem2, t.stripItem3, t.stripItem4, t.stripItem5].filter(Boolean);
  const proofStats = [1, 2, 3, 4].map((n) => ({
    value: t[`proofS${n}Value`],
    label: t[`proofS${n}Label`],
    note:  t[`proofS${n}Note`],
  }));
  const portfolio = [
    { tone: 'bronze', code: 'CAT-01', name: t.portC1Name, origins: t.portC1Origins, cert: t.portC1Cert },
    { tone: 'warm',   code: 'CAT-02', name: t.portC2Name, origins: t.portC2Origins, cert: t.portC2Cert },
    { tone: 'dark',   code: 'CAT-03', name: t.portC3Name, origins: t.portC3Origins, cert: t.portC3Cert },
  ];

  return (
    <React.Fragment>
    <TweaksPanel title="Home — Live Copy">
      <TweakSection label="Hero">
        <TweakText label="Tag" value={t.heroTag} onChange={tx('heroTag')} />
        <TweakText label="Eyebrow" value={t.heroEyebrow} onChange={tx('heroEyebrow')} />
        <TweakText label="Line 1" value={t.heroLine1} onChange={tx('heroLine1')} />
        <TweakText label="Line 2 (italic)" value={t.heroLine2Italic} onChange={tx('heroLine2Italic')} />
        <TweakText label="Line 3" value={t.heroLine3} onChange={tx('heroLine3')} />
        <TweakText label="Body" value={t.heroBody} onChange={tx('heroBody')} />
        <TweakText label="Primary CTA" value={t.heroCta1} onChange={tx('heroCta1')} />
        <TweakText label="Ghost CTA" value={t.heroCta2} onChange={tx('heroCta2')} />
        <TweakText label="LOT value" value={t.heroLotValue} onChange={tx('heroLotValue')} />
        <TweakText label="Origin value" value={t.heroOriginValue} onChange={tx('heroOriginValue')} />
        <TweakText label="Plate label" value={t.heroPlateLabel} onChange={tx('heroPlateLabel')} />
        <TweakText label="Plate note" value={t.heroPlateNote} onChange={tx('heroPlateNote')} />
      </TweakSection>

      <TweakSection label="Marquee">
        {[1, 2, 3, 4, 5].map((n) => (
          <TweakText key={n} label={`Item ${n}`} value={t[`stripItem${n}`]} onChange={tx(`stripItem${n}`)} />
        ))}
      </TweakSection>

      <TweakSection label="§ I · Proof">
        <TweakText label="Title — line 1" value={t.proofTitle1} onChange={tx('proofTitle1')} />
        <TweakText label="Title — line 2 (italic)" value={t.proofTitle2Italic} onChange={tx('proofTitle2Italic')} />
        <TweakText label="Aside" value={t.proofAside} onChange={tx('proofAside')} />
        {[1, 2, 3, 4].map((n) => (
          <React.Fragment key={n}>
            <TweakText label={`Stat ${n} — value`} value={t[`proofS${n}Value`]} onChange={tx(`proofS${n}Value`)} />
            <TweakText label={`Stat ${n} — label`} value={t[`proofS${n}Label`]} onChange={tx(`proofS${n}Label`)} />
            <TweakText label={`Stat ${n} — note`} value={t[`proofS${n}Note`]} onChange={tx(`proofS${n}Note`)} />
          </React.Fragment>
        ))}
      </TweakSection>

      <TweakSection label="§ II · Portfolio">
        <TweakText label="Title — line 1" value={t.portTitle1} onChange={tx('portTitle1')} />
        <TweakText label="Title — line 2 (italic)" value={t.portTitle2Italic} onChange={tx('portTitle2Italic')} />
        <TweakText label="Link" value={t.portLink} onChange={tx('portLink')} />
        {[1, 2, 3].map((n) => (
          <React.Fragment key={n}>
            <TweakText label={`Cat ${n} — name`} value={t[`portC${n}Name`]} onChange={tx(`portC${n}Name`)} />
            <TweakText label={`Cat ${n} — origins`} value={t[`portC${n}Origins`]} onChange={tx(`portC${n}Origins`)} />
            <TweakText label={`Cat ${n} — cert`} value={t[`portC${n}Cert`]} onChange={tx(`portC${n}Cert`)} />
          </React.Fragment>
        ))}
      </TweakSection>

      <TweakSection label="§ III · Network">
        <TweakText label="Title — pre" value={t.netTitlePre} onChange={tx('netTitlePre')} />
        <TweakText label="Title — italic 1" value={t.netTitleItalic1} onChange={tx('netTitleItalic1')} />
        <TweakText label="Title — mid" value={t.netTitleMid} onChange={tx('netTitleMid')} />
        <TweakText label="Title — italic 2" value={t.netTitleItalic2} onChange={tx('netTitleItalic2')} />
        <TweakText label="Body" value={t.netBody} onChange={tx('netBody')} />
        <TweakText label="Stat 1 — value" value={t.netS1Value} onChange={tx('netS1Value')} />
        <TweakText label="Stat 1 — label" value={t.netS1Label} onChange={tx('netS1Label')} />
        <TweakText label="Stat 2 — value" value={t.netS2Value} onChange={tx('netS2Value')} />
        <TweakText label="Stat 2 — label" value={t.netS2Label} onChange={tx('netS2Label')} />
        <TweakText label="CTA" value={t.netCta} onChange={tx('netCta')} />
      </TweakSection>

      <TweakSection label="§ IV · Manifesto">
        <TweakText label="Quote — lead" value={t.manifestoQ1} onChange={tx('manifestoQ1')} />
        <TweakText label="Italic accent" value={t.manifestoItalic} onChange={tx('manifestoItalic')} />
        <TweakText label="Quote — trail" value={t.manifestoQ2} onChange={tx('manifestoQ2')} />
        <TweakText label="Signature" value={t.manifestoSig} onChange={tx('manifestoSig')} />
        <TweakText label="Role" value={t.manifestoRole} onChange={tx('manifestoRole')} />
      </TweakSection>

      <TweakSection label="CTA — Dark">
        <TweakText label="Title 1 — pre" value={t.ctaTitle1Pre} onChange={tx('ctaTitle1Pre')} />
        <TweakText label="Title 1 — italic" value={t.ctaTitle1Italic} onChange={tx('ctaTitle1Italic')} />
        <TweakText label="Title 1 — post" value={t.ctaTitle1Post} onChange={tx('ctaTitle1Post')} />
        <TweakText label="Title 2" value={t.ctaTitle2} onChange={tx('ctaTitle2')} />
        <TweakText label="Body" value={t.ctaBody} onChange={tx('ctaBody')} />
        <TweakText label="Primary CTA" value={t.ctaCta1} onChange={tx('ctaCta1')} />
        <TweakText label="Ghost CTA" value={t.ctaCta2} onChange={tx('ctaCta2')} />
      </TweakSection>
    </TweaksPanel>

    <div style={{
      width: '100%',
      background: AC.paper,
      color: AC.ink,
      fontFamily: AC.sans,
    }} data-screen-label="Home — Hi-Fi">

      <HiFiNav active="Home" onDark />

      {/* ============ HERO ============ */}
      <div style={{ background: AC.forest, color: AC.paper, position: 'relative', overflow: 'hidden' }}>

        <div style={{ padding: isMobile ? '48px 24px 56px' : '72px 56px 80px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
              <Tag variant="gold">{t.heroTag}</Tag>
              <Eyebrow color="rgba(244,239,228,0.55)" style={{ fontSize: 10 }}>{t.heroEyebrow}</Eyebrow>
            </div>

            <Display size={isMobile ? 52 : 96} color={AC.paper} style={{ marginBottom: 4 }}>{t.heroLine1}</Display>
            <Display size={isMobile ? 52 : 96} color={AC.paper} style={{ marginBottom: 4 }}>
              <I color={AC.goldLight}>{t.heroLine2Italic}</I>
            </Display>
            <Display size={isMobile ? 52 : 96} color={AC.paper} style={{ marginBottom: 38 }}>{t.heroLine3}</Display>

            <Body size={16} color="rgba(244,239,228,0.78)" width={500}>{t.heroBody}</Body>

            <div style={{ display: 'flex', gap: 12, marginTop: 44 }}>
              <a href="about.html" style={{ textDecoration: 'none' }}>
                <GoldButton>{t.heroCta1} <span style={{ fontFamily: AC.serif, fontSize: 16 }}>→</span></GoldButton>
              </a>
              <a href="portfolio.html" style={{ textDecoration: 'none' }}>
                <GhostButton onDark>{t.heroCta2}</GhostButton>
              </a>
            </div>
          </div>

          {!isMobile && <div>
            <div style={{ position: 'relative' }}>
              <HiFiImage subject="coffee · andean highlands" tone="bronze" ratio="4/5" />
              {/* floating caption card */}
              <div style={{
                position: 'absolute', bottom: 18, right: 18,
                background: 'rgba(15,20,16,0.85)',
                WebkitBackdropFilter: 'blur(6px)',
                backdropFilter: 'blur(6px)',
                color: AC.paper,
                padding: '14px 18px',
                borderLeft: `2px solid ${AC.gold}`,
              }}>
                <div style={{ fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.18em', opacity: 0.55, marginBottom: 4 }}>LOT</div>
                <div style={{ fontFamily: AC.serif, fontSize: 16 }}>{t.heroLotValue}</div>
                <div style={{ fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.18em', opacity: 0.55, marginTop: 8 }}>ORIGIN</div>
                <div style={{ fontFamily: AC.serif, fontSize: 14 }}>{t.heroOriginValue}</div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14, fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,239,228,0.5)' }}>
              <span>{t.heroPlateLabel}</span>
              <span>{t.heroPlateNote}</span>
            </div>
          </div>}
        </div>
      </div>

      <MarqueeStrip items={stripItems} variant="gold" animated />

      {/* ============ PROOF POINTS ============ */}
      <div style={{ padding: isMobile ? '48px 24px 32px' : '96px 56px 48px', background: AC.paper }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? 16 : 0, marginBottom: 48 }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>§ I · Performance, Audited</Eyebrow>
            <Display size={isMobile ? 36 : 56}>{t.proofTitle1} <I>{t.proofTitle2Italic}</I></Display>
          </div>
          <Body width={320} style={{ marginBottom: 8 }}>{t.proofAside}</Body>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: AC.rule, border: `1px solid ${AC.rule}` }}>
          {proofStats.map((s, i) => (
            <StatTile key={i}
              value={s.value}
              label={s.label}
              note={s.note}
              index={i + 1} />
          ))}
        </div>
      </div>

      {/* ============ THE PORTFOLIO — EXCERPT ============ */}
      <div style={{ padding: isMobile ? '40px 24px 56px' : '64px 56px 96px', background: AC.paper }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: isMobile ? 16 : 0, marginBottom: 40 }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>§ II · The Portfolio · Excerpt</Eyebrow>
            <Display size={isMobile ? 36 : 56}>{t.portTitle1} <I>{t.portTitle2Italic}</I></Display>
          </div>
          <TextLink>{t.portLink}</TextLink>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: 24 }}>
          {portfolio.map((p) => (
            <div key={p.code} style={{ cursor: 'pointer' }}>
              <div style={{ position: 'relative' }}>
                <HiFiImage subject={p.name.toLowerCase()} tone={p.tone} ratio="1/1" />
                <div style={{ position: 'absolute', top: 14, left: 14 }}>
                  <Tag variant="cream">{p.code}</Tag>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 18 }}>
                <Subhead>{p.name}</Subhead>
                <span style={{ fontFamily: AC.serif, fontSize: 22, color: AC.muted }}>→</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 10, borderTop: `1px solid ${AC.rule}` }}>
                <div style={{ fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: AC.muted }}>{p.origins}</div>
                <div style={{ fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: AC.ink, fontWeight: 600 }}>{p.cert}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ NETWORK PREVIEW ============ */}
      <div style={{ padding: isMobile ? '56px 24px' : '96px 56px', background: AC.paperWarm, borderTop: `1px solid ${AC.rule}`, borderBottom: `1px solid ${AC.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>§ III · The Network</Eyebrow>
            <Display size={isMobile ? 38 : 64} style={{ marginBottom: 24 }}>
              {t.netTitlePre} <I>{t.netTitleItalic1}</I> {t.netTitleMid} <I>{t.netTitleItalic2}</I>
            </Display>
            <Body size={15} width={420}>{t.netBody}</Body>
            <div style={{ display: 'flex', gap: 56, marginTop: 40, paddingTop: 28, borderTop: `1px solid ${AC.rule}` }}>
              <Stat value={t.netS1Value} suffix="+" label={t.netS1Label} />
              <Stat value={t.netS2Value} suffix="+" label={t.netS2Label} />
            </div>
            <div style={{ marginTop: 36 }}>
              <a href="network.html" style={{ textDecoration: 'none' }}>
                <GhostButton>{t.netCta}</GhostButton>
              </a>
            </div>
          </div>

          {!isMobile && <div style={{ position: 'relative', height: 420 }}>
            <NetworkMap />
          </div>}
        </div>
      </div>

      {/* ============ MANIFESTO / NOTE ============ */}
      <div style={{ padding: isMobile ? '56px 24px' : '96px 56px', background: AC.paper, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '160px 1fr 200px', gap: isMobile ? 24 : 56 }}>
        <Eyebrow>§ IV · A note</Eyebrow>
        <div>
          <p style={{ fontFamily: AC.serif, fontSize: isMobile ? 22 : 36, lineHeight: 1.35, fontWeight: 400, margin: 0, color: AC.ink, letterSpacing: '-0.01em' }}>
            "{t.manifestoQ1}<I color={AC.gold}>{t.manifestoItalic}</I>{t.manifestoQ2}"
          </p>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 1, background: AC.ink }} />
            <div>
              <div style={{ fontFamily: AC.serif, fontSize: 16 }}>{t.manifestoSig}</div>
              <Eyebrow style={{ marginTop: 2, fontSize: 10 }}>{t.manifestoRole}</Eyebrow>
            </div>
          </div>
        </div>
        <div />
      </div>

      {/* ============ CTA — DARK ============ */}
      <div style={{ background: AC.forest, color: AC.paper, padding: isMobile ? '64px 24px' : '112px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }} />
        <div style={{ position: 'relative', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
          <Eyebrow color="rgba(244,239,228,0.5)" style={{ marginBottom: 24 }}>◆ Begin a relationship ◆</Eyebrow>
          <Display size={isMobile ? 36 : 64} color={AC.paper}>
            {t.ctaTitle1Pre} <I color={AC.goldLight}>{t.ctaTitle1Italic}</I> {t.ctaTitle1Post}
          </Display>
          <Display size={isMobile ? 36 : 64} color={AC.paper} style={{ marginTop: 8 }}>
            {t.ctaTitle2}
          </Display>
          <Body size={15} color="rgba(244,239,228,0.7)" width={520} style={{ margin: '36px auto 0' }}>{t.ctaBody}</Body>
          <div style={{ marginTop: 44, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="about.html" style={{ textDecoration: 'none' }}>
              <GoldButton>{t.ctaCta1}</GoldButton>
            </a>
            <GhostButton onDark>{t.ctaCta2}</GhostButton>
          </div>
        </div>
      </div>

      <HiFiFooter />
    </div>
    </React.Fragment>
  );
}

/* Stylized world map for the network preview.
   Hand-positioned dots for origins (gold) and markets (cream),
   thin lines connecting them across a continent silhouette. */
function NetworkMap() {
  const origins = [
    { id: 'PE', x: 28, y: 32, label: 'Peru' },
    { id: 'CL', x: 28, y: 42, label: 'Chile' },
    { id: 'EG', x: 56, y: 22, label: 'Egypt' },
  ];
  const markets = [
    { id: 'EU', x: 50, y: 16, label: 'EU' },
    { id: 'MENA', x: 60, y: 24, label: 'UAE' },
    { id: 'TW', x: 80, y: 26, label: 'Taiwan' },
  ];
  const connections = [
    ['PE', 'EU'], ['PE', 'TW'],
    ['CL', 'EU'], ['CL', 'TW'],
    ['EG', 'EU'], ['EG', 'MENA'], ['EG', 'TW'],
  ];
  const find = (id) => [...origins, ...markets].find((p) => p.id === id);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, ${AC.cream} 0%, ${AC.paperWarm} 100%)`,
      border: `1px solid ${AC.rule}`,
      overflow: 'hidden',
    }}>
      <svg width="100%" height="100%" viewBox="0 0 100 56" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
            <path d="M 5 0 L 0 0 0 5" fill="none" stroke={AC.rule} strokeWidth="0.15" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="56" fill="url(#grid)" />

        {[
          'M 18 18 Q 22 16 24 20 L 26 24 Q 25 30 28 34 L 30 42 Q 28 48 24 46 L 20 38 Q 18 30 18 18 Z',
          'M 46 14 Q 52 12 56 16 L 58 20 Q 56 24 58 28 L 60 36 Q 56 44 52 42 L 48 36 Q 46 28 46 14 Z',
          'M 64 14 Q 72 12 80 14 L 86 18 Q 84 22 82 24 L 80 28 Q 78 32 76 30 L 68 28 Q 64 22 64 14 Z',
        ].map((d, i) => (
          <path key={i} d={d} fill={AC.muted} opacity="0.08" />
        ))}

        {connections.map(([a, b], i) => {
          const p1 = find(a), p2 = find(b);
          const midX = (p1.x + p2.x) / 2;
          const midY = Math.min(p1.y, p2.y) - 6;
          return (
            <path
              key={i}
              d={`M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`}
              fill="none"
              stroke={AC.gold}
              strokeWidth="0.18"
              opacity="0.55"
              strokeDasharray="0.5 0.4"
            />
          );
        })}

        {origins.map((p) => (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r="0.9" fill={AC.gold} />
            <circle cx={p.x} cy={p.y} r="1.6" fill="none" stroke={AC.gold} strokeWidth="0.15" opacity="0.6" />
          </g>
        ))}

        {markets.map((p) => (
          <g key={p.id}>
            <circle cx={p.x} cy={p.y} r="0.7" fill={AC.forest} />
            <circle cx={p.x} cy={p.y} r="1.4" fill="none" stroke={AC.forest} strokeWidth="0.12" opacity="0.5" />
          </g>
        ))}
      </svg>

      {[...origins, ...markets].map((p) => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`,
          top: `${p.y}%`,
          transform: 'translate(8px, -50%)',
          fontFamily: AC.mono,
          fontSize: 9,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: AC.ink,
          whiteSpace: 'nowrap',
        }}>{p.label}</div>
      ))}

      <div style={{
        position: 'absolute', bottom: 16, left: 16,
        background: 'rgba(249,245,236,0.92)',
        padding: '10px 14px',
        display: 'flex', gap: 18,
        fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: AC.gold }} /> Origin
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: AC.forest }} /> Market
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { HomeHiFi });
