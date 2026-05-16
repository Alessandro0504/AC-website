/* Hi-Fi Portfolio — product catalogue page.
   Translates wireframe PortfolioPage using established kit.
   Tweaks expose all editorial copy. */

const PORTFOLIO_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "eyebrow": "◆ Institutional Access",
  "titleMain": "Product",
  "titleItalic": "Portfolio.",
  "body": "A meticulously curated ledger of premium agricultural commodities, sourced directly from verified primary producers across the Americas and Asia-Pacific.",

  "stripItem1": "Commodity Markets +1.24%",
  "stripItem2": "Global Logistics Stable",
  "stripItem3": "Harvest Status: Peak Season",
  "stripItem4": "Market Sentiment: Bullish",
  "stripItem5": "MENA Demand Rising",

  "cat1Name": "Fresh Produce",
  "cat1P1": "Blueberries", "cat1P2": "Hass Avocados",
  "cat1P3": "Fresh Ginger", "cat1P4": "Asparagus",

  "cat2Name": "Frozen (IQF)",
  "cat2P1": "IQF Strawberries", "cat2P2": "Tropical Fruits Mix",
  "cat2P3": "IQF Blueberries",  "cat2P4": "Mango Chunks",

  "cat3Name": "Specialty Coffee",
  "cat3P1": "Arabica SCA 85+",  "cat3P2": "Organic Fair Trade",
  "cat3P3": "Green Coffee Beans", "cat3P4": "Single-Estate Lots",

  "moqLabel": "MOQ · 5,000 KG",

  "panel1Title": "Additional Inventory",
  "panel1Body": "Green Asparagus · Organic Turmeric · Sacha Inchi · Purple Corn · Wild Blueberries",
  "panel2Title": "◆ Cold Chain Integrity",
  "panel2Body": "All frozen and fresh categories are handled under continuous cold-chain protocols — from harvest through maritime transit to destination port.",
  "panel3Title": "Current Offering",
  "panel3Item": "Green Coffee Beans",
  "panel3Sub": "Direct from origin · Available lots",

  "inquiryTitle": "Custom Procurement",
  "inquiryTitleItalic": "Requests.",
  "inquiryBody": "Institutional buyers may submit tailored requests for unlisted origins, exclusive lot reservations, or bespoke quality specifications.",
  "inquiryCta1": "Inquiry Desk ✉",
  "inquiryCta2": "Download Catalogue"
}/*EDITMODE-END*/;

function PortfolioHiFi() {
  const [t, setTweak] = useTweaks(PORTFOLIO_TWEAK_DEFAULTS);
  const tx = (k) => (v) => setTweak(k, v);

  const stripItems = [t.stripItem1, t.stripItem2, t.stripItem3, t.stripItem4, t.stripItem5].filter(Boolean);

  const categories = [
    {
      name: t.cat1Name, code: 'CAT-01', tone: 'sand',
      products: [
        { key: 'cat1P1', name: t.cat1P1, origin: 'patagonia' },
        { key: 'cat1P2', name: t.cat1P2, origin: 'michoacán' },
        { key: 'cat1P3', name: t.cat1P3, origin: 'perú' },
        { key: 'cat1P4', name: t.cat1P4, origin: 'ica valley' },
      ],
    },
    {
      name: t.cat2Name, code: 'CAT-02', tone: 'dark',
      products: [
        { key: 'cat2P1', name: t.cat2P1, origin: 'chile' },
        { key: 'cat2P2', name: t.cat2P2, origin: 'ecuador' },
        { key: 'cat2P3', name: t.cat2P3, origin: 'patagonia' },
        { key: 'cat2P4', name: t.cat2P4, origin: 'egypt' },
      ],
    },
    {
      name: t.cat3Name, code: 'CAT-03', tone: 'bronze',
      products: [
        { key: 'cat3P1', name: t.cat3P1, origin: 'huila' },
        { key: 'cat3P2', name: t.cat3P2, origin: 'colombia' },
        { key: 'cat3P3', name: t.cat3P3, origin: 'colombia' },
        { key: 'cat3P4', name: t.cat3P4, origin: 'single estate' },
      ],
    },
  ];

  return (
    <React.Fragment>
    <TweaksPanel title="Portfolio — Live Copy">
      <TweakSection title="Header">
        <TweakText label="Eyebrow"          value={t.eyebrow}    onChange={tx('eyebrow')} />
        <TweakText label="Title — main"     value={t.titleMain}  onChange={tx('titleMain')} />
        <TweakText label="Title — italic"   value={t.titleItalic} onChange={tx('titleItalic')} />
        <TweakText label="Body"             value={t.body}       onChange={tx('body')} />
      </TweakSection>

      <TweakSection title="Marquee">
        {[1,2,3,4,5].map((n) => (
          <TweakText key={n} label={`Item ${n}`} value={t[`stripItem${n}`]} onChange={tx(`stripItem${n}`)} />
        ))}
      </TweakSection>

      {[
        { section: 'Fresh Produce',   prefix: 'cat1' },
        { section: 'Frozen (IQF)',    prefix: 'cat2' },
        { section: 'Specialty Coffee',prefix: 'cat3' },
      ].map(({ section, prefix }) => (
        <TweakSection key={prefix} title={section}>
          <TweakText label="Category name" value={t[`${prefix}Name`]} onChange={tx(`${prefix}Name`)} />
          {[1,2,3,4].map((n) => (
            <TweakText key={n} label={`Product ${n}`} value={t[`${prefix}P${n}`]} onChange={tx(`${prefix}P${n}`)} />
          ))}
        </TweakSection>
      ))}

      <TweakSection title="MOQ">
        <TweakText label="MOQ label" value={t.moqLabel} onChange={tx('moqLabel')} />
      </TweakSection>

      <TweakSection title="Side panels">
        <TweakText label="Panel 1 — title" value={t.panel1Title} onChange={tx('panel1Title')} />
        <TweakText label="Panel 1 — body"  value={t.panel1Body}  onChange={tx('panel1Body')} />
        <TweakText label="Panel 2 — title" value={t.panel2Title} onChange={tx('panel2Title')} />
        <TweakText label="Panel 2 — body"  value={t.panel2Body}  onChange={tx('panel2Body')} />
        <TweakText label="Panel 3 — title" value={t.panel3Title} onChange={tx('panel3Title')} />
        <TweakText label="Panel 3 — item"  value={t.panel3Item}  onChange={tx('panel3Item')} />
        <TweakText label="Panel 3 — sub"   value={t.panel3Sub}   onChange={tx('panel3Sub')} />
      </TweakSection>

      <TweakSection title="Inquiry">
        <TweakText label="Title — main"   value={t.inquiryTitle}       onChange={tx('inquiryTitle')} />
        <TweakText label="Title — italic" value={t.inquiryTitleItalic} onChange={tx('inquiryTitleItalic')} />
        <TweakText label="Body"           value={t.inquiryBody}        onChange={tx('inquiryBody')} />
        <TweakText label="Primary CTA"    value={t.inquiryCta1}        onChange={tx('inquiryCta1')} />
        <TweakText label="Ghost CTA"      value={t.inquiryCta2}        onChange={tx('inquiryCta2')} />
      </TweakSection>
    </TweaksPanel>

    <div style={{ width: 1280, background: AC.paper, color: AC.ink, fontFamily: AC.sans }}
         data-screen-label="Portfolio — Hi-Fi">

      <HiFiNav active="Portfolio" />
      <MarqueeStrip items={stripItems} variant="forest" />

      {/* ============ HEADER ============ */}
      <div style={{ padding: '72px 56px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <Eyebrow style={{ marginBottom: 18 }}>{t.eyebrow}</Eyebrow>
            <Display size={84}>{t.titleMain} <I>{t.titleItalic}</I></Display>
          </div>
          <div style={{ fontFamily: AC.mono, fontSize: 9, letterSpacing: '0.2em', color: AC.muted, paddingBottom: 8 }}>
            CAT. MMXXVI · № 02
          </div>
        </div>
        <Body size={15} width={620} style={{ marginTop: 28 }}>{t.body}</Body>
      </div>

      {/* ============ CATEGORY GRID ============ */}
      <div style={{ padding: '8px 56px 64px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {categories.map((cat) => (
          <div key={cat.code}>
            {/* Category header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: `1px solid ${AC.rule}`,
            }}>
              <Subhead size={28} style={{ fontStyle: 'italic' }}>{cat.name}</Subhead>
              <span style={{ fontFamily: AC.mono, fontSize: 10, letterSpacing: '0.18em', color: AC.muted }}>{cat.code}</span>
            </div>

            {/* Product cards — 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {cat.products.map((p) => (
                <div key={p.key}>
                  <HiFiImage
                    subject={`${p.name.toLowerCase()} · ${p.origin}`}
                    tone={cat.tone}
                    ratio="1/1"
                  />
                  <div style={{
                    fontFamily: AC.serif,
                    fontSize: 15,
                    fontWeight: 500,
                    color: AC.ink,
                    marginTop: 10,
                  }}>{p.name}</div>
                  <div style={{
                    fontFamily: AC.mono,
                    fontSize: 9,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: AC.muted,
                    marginTop: 4,
                  }}>{t.moqLabel} →</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ============ SIDE PANELS ============ */}
      <div style={{ padding: '0 56px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
        {/* Additional inventory */}
        <div style={{ background: AC.cream, padding: '24px 20px', border: `1px solid ${AC.rule}` }}>
          <Eyebrow style={{ marginBottom: 14 }}>{t.panel1Title}</Eyebrow>
          <p style={{ fontFamily: AC.serif, fontStyle: 'italic', fontSize: 16, lineHeight: 1.55, color: AC.ink, margin: 0 }}>
            {t.panel1Body}
          </p>
        </div>

        {/* Cold chain */}
        <div style={{ background: AC.cream, padding: '24px 20px', border: `1px solid ${AC.rule}` }}>
          <Eyebrow style={{ marginBottom: 14 }}>{t.panel2Title}</Eyebrow>
          <Body size={13} color={AC.muted}>{t.panel2Body}</Body>
        </div>

        {/* Current offering — gold accent */}
        <div style={{ background: AC.cream, padding: '24px 20px', border: `1px solid ${AC.rule}`, borderLeft: `3px solid ${AC.gold}` }}>
          <Eyebrow style={{ marginBottom: 14 }}>{t.panel3Title}</Eyebrow>
          <Subhead size={20}>{t.panel3Item}</Subhead>
          <div style={{
            fontFamily: AC.mono,
            fontSize: 9,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: AC.muted,
            marginTop: 6,
          }}>{t.panel3Sub}</div>
        </div>
      </div>

      {/* ============ INQUIRY BAND ============ */}
      <div style={{
        background: AC.forest,
        color: AC.paper,
        padding: '64px 56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 64,
      }}>
        <div>
          <Display size={48} color={AC.paper}>
            {t.inquiryTitle} <I color={AC.goldLight}>{t.inquiryTitleItalic}</I>
          </Display>
          <Body size={14} color="rgba(244,239,228,0.7)" width={520} style={{ marginTop: 20 }}>
            {t.inquiryBody}
          </Body>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flexShrink: 0 }}>
          <GoldButton>{t.inquiryCta1}</GoldButton>
          <GhostButton onDark>{t.inquiryCta2}</GhostButton>
        </div>
      </div>

      <HiFiFooter />
    </div>
    </React.Fragment>
  );
}

Object.assign(window, { PortfolioHiFi });
