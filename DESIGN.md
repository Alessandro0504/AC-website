# Design System

Defined in `hifi/hifi-kit.jsx`. This file is the human-readable reference.

## Palette (`AC.*`)

| Token | Hex | Use |
|---|---|---|
| `AC.ink` | `#0f1410` | Body text on light, dark buttons |
| `AC.paper` | `#f4efe4` | Default page background, text on dark |
| `AC.paperWarm` | `#ebe3d2` | Secondary light surface |
| `AC.cream` | `#f9f5ec` | Card surfaces on light |
| `AC.forest` | `#1d2b25` | Hero/section dark background |
| `AC.forestDeep` | `#121a16` | Footer, deepest dark |
| `AC.forestLine` | `#2a3a32` | Rules on forest |
| `AC.gold` | `#c9a23a` | Primary accent — CTAs, brand marks |
| `AC.goldLight` | `#e4cf6b` | Italic display accent |
| `AC.rule` | `#d8d1bf` | Rules on light |
| `AC.muted` | `#6b6555` | Secondary text on light |
| `AC.mutedOnDark` | `rgba(244,239,228,0.55)` | Secondary text on dark |
| `AC.ruleDark` | `rgba(244,239,228,0.14)` | Rules on dark |

## Typography (`AC.serif | serifItalic | sans | mono`)

| Stack | Family | Where |
|---|---|---|
| `AC.serif` | Source Serif 4 | Display headings, editorial titles |
| `AC.serifItalic` | Instrument Serif italic | Soft phrases inside display lines (`<I>`) |
| `AC.sans` | Geist | Body, nav, buttons |
| `AC.mono` | JetBrains Mono | Eyebrows, tags, registration marks |

Display sizes use `AC.serif`, weight 400, line-height ~0.98, letter-spacing −0.02em. Body uses `AC.sans`, line-height 1.65.

## Primitives (registered globals)

From `hifi/hifi-kit.jsx`:

- `<Eyebrow>` — small uppercase mono label
- `<Display size={96}>` — Source Serif title; pair with `<I>` for italic spans
- `<I>` — Instrument Serif italic span
- `<Body size={15} width={...}>` — Geist paragraph
- `<GoldButton>` / `<GhostButton onDark>` — primary / outline CTAs
- `<Tag variant="cream|gold|forest|outline|outlineLight">` — uppercase chip
- `<HiFiNav active="Home" onDark>` — top navigation
- `<MarqueeStrip items={[]} variant="forest|gold">` — accent strip band
- `<HiFiImage subject tone="warm|dark|bronze|sand" ratio>` — placeholder still
- `<HiFiFooter />` — dark footer with brand block, nav, contact, compliance

From `tweaks-panel.jsx`:

- `useTweaks(defaults)` — `[t, setTweak]` hook bound to the EDITMODE block
- `<TweaksPanel title>` — floating shell
- `<TweakSection label>` — grouping divider inside the panel
- `<TweakText|Number|Slider|Toggle|Radio|Select|Color>` — form controls

## Wireframe → Hi-Fi translation

The wireframes are intentionally greyscale and structural. When refining:

1. Keep section order and proportions unless they break at hi-fi density.
2. Replace `WIRE_*` color tokens with the matching `AC.*` token; replace `wireFont.*` with `AC.*` type tokens.
3. Replace `<WireImage>` with `<HiFiImage>` (pick `tone` based on subject — coffee/cacao → `bronze`, produce → `sand`, dark moods → `dark`).
4. Inflate display sizes: wireframe 84 → hi-fi 96, etc., guided by hierarchy.
5. Add editorial register marks where they fit: corner ISS./Nº strings, `MMXXVI`, `Plate · subject` captions.

## Reference imagery

`uploads/pasted-*.png` are the moodboard inputs the kit was derived from. Treat them as canon for tone, not for layout.
