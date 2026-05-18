/* Hi-Fi Track Record — audited performance page.
   Translates wireframe TrackRecordPage using established kit. */

const TRACK_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tag": "Audited Performance",
  "title1": "Verified",
  "title2Italic": "Track Record.",
  "bodyLeft": "Every transaction is recorded and verified, providing complete transparency for all partners. Our commitment to operational excellence is etched into every executed contract.",
  "captionLabel": "Integrity in Action",

  "stripItem1": "Global Logistics Node Active",
  "stripItem2": "Secure Verification",
  "stripItem3": "Asset Custody Certified",
  "stripItem4": "Compliance Audit Q4-2025",
  "stripItem5": "Settlement Rate: 100%",

  "s1Value": "100%",  "s1Label": "Payment Completion",    "s1Note": "Full settlement on every trade since inception, without default or delay.",
  "s2Value": "98%+",  "s2Label": "On-Time Delivery",      "s2Note": "Exceeding global standards for maritime and overland logistics precision.",
  "s3Value": "200+",  "s3Label": "Verified Transactions",  "s3Note": "Bilateral agreements executed across 14 sovereign jurisdictions.",
  "s4Value": "Zero",  "s4Label": "Unresolved Claims",      "s4Note": "Maintaining a flawless record of professional dispute resolution.",

  "ledgerTitle": "The Ledger of",
  "ledgerTitleItalic": "Assurance.",
  "ledgerBody": "Our proprietary verification process mirrors ledger architecture. Each trade block contains encrypted metadata of origin, quality inspection, and financial clearance — creating an immutable chain of trust.",
  "feat1Label": "Encrypted Chain of Custody",
  "feat1Body": "Every lot is bound to a named origin, a compliance trail and a counterparty review.",
  "feat2Label": "Regulatory Compliance Nodes",
  "feat2Body": "Full alignment with KYC/AML, EUDR, and marine cargo insurance requirements.",

  "block1Id": "#0291", "block1Title": "Soft Commodity Clear: Coffee (AR-X)", "block1Date": "14 OCT 2025",
  "block2Id": "#0290", "block2Title": "Precious Lot: Cacao (CO-Z)",          "block2Date": "13 OCT 2025",
  "block3Id": "#0289", "block3Title": "Frozen Sector: IQF Berries (CL-V)",   "block3Date": "12 OCT 2025",
  "ledgerNote": "History data hidden · Archive available upon partner request",

  "ctaPre": "Request a comprehensive",
  "ctaItalic": "compliance audit report",
  "ctaPost": "of our recent settlements.",
  "ctaCta1": "Download Portfolio",
  "ctaCta2": "Institutional Inquiry"
}/*EDITMODE-END*/;

function TrackRecordHiFi() {
  const [t, setTweak] = useTweaks(TRACK_TWEAK_DEFAULTS);
  const { isMobile } = useBreakpoint();
  const tx = (k) => (v) => setTweak(k, v);

  const stripItems = [t.stripItem1, t.stripItem2, t.stripItem3, t.stripItem4, t.stripItem5].filter(Boolean);
  const stats = [1, 2, 3, 4].map((n) => ({
    value: t[`s${n}Value`], label: t[`s${n}Label`], note: t[`s${n}Note`],
  }));
  const blocks = [
    { n: 1, accent: AC.forest },
    { n: 2, accent: AC.gold },
    { n: 3, accent: AC.muted },
  ];

  return (
    <React.Fragment>
    <TweaksPanel title="Track Record — Live Copy">
      <TweakSection label="Header">
        <TweakText label="Gold tag"          value={t.tag}          onChange={tx('tag')} />
        <TweakText label="Title — main"      value={t.title1}       onChange={tx('title1')} />
        <TweakText label="Title — italic"    value={t.title2Italic} onChange={tx('title2Italic')} />
        <TweakText label="Body"              value={t.bodyLeft}     onChange={tx('bodyLeft')} />
        <TweakText label="Caption"           value={t.captionLabel} onChange={tx('captionLabel')} />
      </TweakSection>
      <TweakSection label="Marquee">
        {[1,2,3,4,5].map((n) => (
          <TweakText key={n} label={`Item ${n}`} value={t[`stripItem${n}`]} onChange={tx(`stripItem${n}`)} />
        ))}
      </TweakSection>
      <TweakSection label="Stats">
        {[1,2,3,4].map((n) => (
          <React.Fragment key={n}>
            <TweakText label={`Stat ${n} — value`} value={t[`s${n}Value`]} onChange={tx(`s${n}Value`)} />
            <TweakText label={`Stat ${n} — label`} value={t[`s${n}Label`]} onChange={tx(`s${n}Label`)} />
            <TweakText label={`Stat ${n} — note`}  value={t[`s${n}Note`]}  onChange={tx(`s${n}Note`)} />
          </React.Fragment>
        ))}
      </TweakSection>
      <TweakSection label="Ledger section">
        <TweakText label="Title — main"   value={t.ledgerTitle}       onChange={tx('ledgerTitle')} />
        <TweakText label="Title — italic" value={t.ledgerTitleItalic} onChange={tx('ledgerTitleItalic')} />
        <TweakText label="Body"           value={t.ledgerBody}        onChange={tx('ledgerBody')} />
        <TweakText label="Feature 1 — label" value={t.feat1Label} onChange={tx('feat1Label')} />
        <TweakText label="Feature 1 — body"  value={t.feat1Body}  onChange={tx('feat1Body')} />
        <TweakText label="Feature 2 — label" value={t.feat2Label} onChange={tx('feat2Label')} />
        <TweakText label="Feature 2 — body"  value={t.feat2Body}  onChange={tx('feat2Body')} />
      </TweakSection>
      <TweakSection label="Ledger blocks">
        {[1,2,3].map((n) => (
          <React.Fragment key={n}>
            <TweakText label={`Block ${n} — id`}    value={t[`block${n}Id`]}    onChange={tx(`block${n}Id`)} />
            <TweakText label={`Block ${n} — title`} value={t[`block${n}Title`]} onChange={tx(`block${n}Title`)} />
            <TweakText label={`Block ${n} — date`}  value={t[`block${n}Date`]}  onChange={tx(`block${n}Date`)} />
          </React.Fragment>
        ))}
        <TweakText label="Archive note" value={t.ledgerNote} onChange={tx('ledgerNote')} />
      </TweakSection>
      <TweakSection label="CTA">
        <TweakText label="Headline — pre"    value={t.ctaPre}    onChange={tx('ctaPre')} />
        <TweakText label="Headline — italic" value={t.ctaItalic} onChange={tx('ctaItalic')} />
        <TweakText label="Headline — post"   value={t.ctaPost}   onChange={tx('ctaPost')} />
        <TweakText label="Primary CTA"       value={t.ctaCta1}   onChange={tx('ctaCta1')} />
        <TweakText label="Ghost CTA"         value={t.ctaCta2}   onChange={tx('ctaCta2')} />
      </TweakSection>
    </TweaksPanel>

    <div style={{ width: '100%', background: AC.paper, color: AC.ink, fontFamily: AC.sans }}
         data-screen-label="Track Record — Hi-Fi">

      <HiFiNav active="Track Record" />

      {/* ============ HEADER ============ */}
      <div style={{ padding: isMobile ? '48px 24px 32px' : '72px 56px 48px' }}>
        <Tag variant="gold" style={{ marginBottom: 22 }}>{t.tag}</Tag>
        <Display size={isMobile ? 44 : 84}>{t.title1}</Display>
        <Display size={isMobile ? 44 : 84}><I>{t.title2Italic}</I></Display>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr', gap: 56, marginTop: 28, alignItems: 'end' }}>
          <Body size={15} width={560}>{t.bodyLeft}</Body>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: AC.serif, fontStyle: 'italic', fontSize: 16, color: AC.muted }}>
                {t.captionLabel}
              </div>
            </div>
            <div style={{ width: 24, height: 24, border: `1px solid ${AC.rule}`, flexShrink: 0 }} />
          </div>
        </div>
      </div>

      <MarqueeStrip items={stripItems} variant="forest" animated />

      {/* ============ STAT TILES ============ */}
      <div style={{ padding: isMobile ? '24px 24px 16px' : '48px 56px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: 1, background: AC.rule, border: `1px solid ${AC.rule}` }}>
          {stats.map((s, i) => (
            <StatTile key={i}
              value={s.value}
              label={s.label}
              note={s.note}
              index={i + 1}
              />
          ))}
        </div>
      </div>

      {/* ============ LEDGER OF ASSURANCE ============ */}
      <div style={{ padding: isMobile ? '48px 24px' : '64px 56px 80px', background: AC.paperWarm, borderTop: `1px solid ${AC.rule}`, borderBottom: `1px solid ${AC.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: isMobile ? 32 : 56 }}>

          {/* Left — copy + feature list */}
          <div>
            <Display size={36} style={{ marginBottom: 20 }}>
              {t.ledgerTitle} <I>{t.ledgerTitleItalic}</I>
            </Display>
            <Body size={14} width={480}>{t.ledgerBody}</Body>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: t.feat1Label, body: t.feat1Body },
                { label: t.feat2Label, body: t.feat2Body },
              ].map((f) => (
                <div key={f.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 28, height: 28, background: AC.forest, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: AC.sans, fontWeight: 600, fontSize: 13, color: AC.ink }}>{f.label}</div>
                    <Body size={12.5} color={AC.muted} style={{ marginTop: 4 }}>{f.body}</Body>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — transaction ledger */}
          <div style={{ background: AC.cream, padding: '24px 20px', border: `1px solid ${AC.rule}` }}>
            {blocks.map(({ n, accent }) => (
              <div key={n} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 16px',
                background: AC.paper,
                marginBottom: 10,
                borderLeft: `3px solid ${accent}`,
              }}>
                <span style={{
                  fontFamily: AC.mono,
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: AC.muted,
                  width: 72,
                  flexShrink: 0,
                }}>BLOCK {t[`block${n}Id`]}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: AC.serif, fontSize: 14, fontWeight: 500, color: AC.ink }}>
                    {t[`block${n}Title`]}
                  </div>
                  <div style={{ fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase', color: AC.muted, marginTop: 3 }}>
                    VERIFIED · {t[`block${n}Date`]}
                  </div>
                </div>
                <div style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: accent,
                  flexShrink: 0,
                  opacity: n === 3 ? 0.4 : 1,
                }} />
              </div>
            ))}
            <div style={{
              marginTop: 8,
              fontFamily: AC.mono,
              fontSize: 9,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: AC.muted,
              textAlign: 'center',
              padding: '10px 0 4px',
              borderTop: `1px solid ${AC.rule}`,
            }}>{t.ledgerNote}</div>
          </div>
        </div>
      </div>

      {/* ============ DARK CTA ============ */}
      <div style={{ background: AC.forest, color: AC.paper, padding: isMobile ? '56px 24px' : '80px 56px', textAlign: 'center' }}>
        <Display size={isMobile ? 26 : 40} color={AC.paper} style={{ maxWidth: 720, margin: '0 auto', lineHeight: 1.15 }}>
          {t.ctaPre} <I color={AC.goldLight}>{t.ctaItalic}</I> {t.ctaPost}
        </Display>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href="about.html" style={{ textDecoration: 'none' }}>
            <GoldButton>{t.ctaCta1}</GoldButton>
          </a>
          <a href="about.html" style={{ textDecoration: 'none' }}>
            <GhostButton onDark>{t.ctaCta2}</GhostButton>
          </a>
        </div>
      </div>

      <HiFiFooter />
    </div>
    </React.Fragment>
  );
}

Object.assign(window, { TrackRecordHiFi });
