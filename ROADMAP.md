# Roadmap

## Goal for this round

Hi-fi all six pages using the existing no-build setup. No deployment yet. Tweaks panel scope decided page by page.

## Page status

| # | Page | Wireframe | Hi-Fi | Tweaks | Locked |
|---|------|-----------|-------|--------|--------|
| 1 | Home (Editorial A direction) | ✓ | ✓ refined | full live copy | structure locked; **numbers pending AC sign-off** |
| 2 | Portfolio | ✓ | ✓ drafted | full live copy | review pending |
| 3 | Track Record | ✓ | ✓ drafted | full live copy | review pending |
| 4 | Network | ✓ | ✓ drafted | tbd | review pending |
| 5 | Case Studies | ✓ | ✓ drafted | tbd | review pending |
| 6 | About & Contact | ✓ | ✓ drafted | tbd | review pending |

**Home — pending real figures (placeholder values currently shipped):**
- Proof § I: `100%` Settlement Rate, `98%` On-Time Delivery, `200+` Verified Trades, `Zero` Open Claims, "14 sovereign jurisdictions"
- Network § III: `12+` Countries, `250k+` Metric Tons Moved

## Execution order

1. **Lock Home** — walk through `hifi/page-home.jsx`, freeze copy, decide whether the marquee tweak panel ships.
2. **Portfolio** — highest commercial value after home. Builds the per-category pattern that Network and Case Studies will echo.
3. **Track Record** — credibility lift; reuses Portfolio's card pattern, adds the ledger band.
4. **Network** — depends on the map placeholder approach.
5. **Case Studies** — most editorial effort; benefits from doing the simpler pages first.
6. **About & Contact** — quickest; can finalize once contact details and bio copy are confirmed.

## Decisions log

- **2026-05-13** — Architecture frozen: no-build (React UMD + Babel-in-browser). Reason: tweaks panel relies on global scope; build step is unnecessary for scope.
- **2026-05-13** — Direction locked: Home A (Editorial Magazine). Home B (Ledger Dossier) and Home C (Atlas Cover) remain as wireframes only, not refined.
- **2026-05-13** — Tweaks panel scope: per-page decision. Drafted pages keep the panel; locked pages inline the copy and remove it.
- **2026-05-13** — Kit primitives added to `hifi/hifi-kit.jsx`: `<Stat>`, `<StatTile>`, `<TextLink>`, `<Subhead>`. Refactored Home to use them; Portfolio onwards should reuse the same primitives.
- **2026-05-13** — Home Hi-Fi: tweaks panel expanded from 5 fields (marquee only) to ~50 fields covering all editorial copy. Image subject corrected from `cacao` to `coffee · andean highlands` to match the "Plate I · Cherries" caption.

## Open questions

- Real photography vs `<HiFiImage>` placeholders — when and where?
- Actual transaction figures for Track Record (AC to confirm).
- Contact details — phone, calendar embed source.
- Whether Network map needs a real interactive map or stays editorial-flat.

## After hi-fi lock (out of scope this round)

- Deployment target (Vercel / Netlify / GitHub Pages — likely Vercel)
- Real photography commission
- Form/CRM wiring on inquiry band and contact rail
