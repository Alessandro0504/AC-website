# AC Portfolio Website

Portfolio site for **Alessandro Cordano** — institutional sourcing of premium agricultural commodities (Geneva, est. 2018). Audience is institutional buyers; the voice is editorial-financial, not consumer-marketing.

## Architecture: no-build, on purpose

Two standalone HTML entry points load React 18 UMD + Babel-in-browser, then pull `.jsx` files via `<script type="text/babel">`. Components register themselves on `window` via `Object.assign(window, {...})` at the bottom of each file — that is the only "module system." Everything is global scope.

- `AC Home Hi-Fi.html` — polished home page prototype
- `AC Website Wireframes.html` — design canvas with every wireframe in a Figma-like grid for review

**Preview:** open the HTML in a browser. No npm, no Vite, no server.

This is a deliberate choice. Do not introduce a build step, framework, or package manager without an explicit ask.

## File layout

```
hifi/
  hifi-kit.jsx        design tokens (AC.*) + primitives (Display, Body, Tag, HiFiNav, ...)
  page-home.jsx       refines wireframe Home A
  page-<name>.jsx     one file per hi-fi page
wireframes/
  wire-kit.jsx        greyscale primitives
  page-*.jsx          wireframe pages
design-canvas.jsx     Figma-ish canvas wrapper (DCSection, DCArtboard)
tweaks-panel.jsx      live in-browser copy editor (TweaksPanel, useTweaks, TweakText, ...)
assets/, uploads/     logo + reference imagery
```

Companion docs: `DESIGN.md` (tokens/components), `CONTENT.md` (voice/copy), `ROADMAP.md` (page status).

## Recipe: adding a hi-fi page

1. Create `hifi/page-<name>.jsx`. Reuse primitives from `hifi-kit.jsx` — do not restyle what already exists.
2. End the file with `Object.assign(window, { PageName });` so the HTML entry can mount it.
3. Either:
   - **Standalone preview** — duplicate `AC Home Hi-Fi.html`, swap the loaded page file and the rendered component name.
   - **Add to a canvas** — wrap with `<DCArtboard>` like the wireframes HTML does.
4. If the page exposes live-editable copy, define a `TWEAK_DEFAULTS` block bracketed by `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` markers, then bind via `useTweaks` + `<TweaksPanel>`. Whether a page keeps tweaks is decided page by page — inline the copy and remove the panel when the page locks.

## Conventions

- **Styles** — inline `style={{}}`. No CSS files; no classNames outside the kit's injected `<style>` blocks. Match the existing pattern.
- **Typography** — always `AC.serif | AC.serifItalic | AC.sans | AC.mono`. Never raw font-family strings.
- **Color** — always `AC.*` tokens. Never raw hex outside the kit definition.
- **Page width** — 1280px fixed, centered with a letterbox background (`#1d2b25` for dark-hero pages).
- **Imagery** — use `<HiFiImage>` for placeholders until real photography is sourced.

## Things not to do

- Don't add a bundler, framework, or `package.json`.
- Don't write `import`/`export` — Babel-in-browser doesn't bundle.
- Don't break the `Object.assign(window, {...})` registration at the bottom of kit files.
- Don't edit content inside `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` blocks unless you intend to change defaults — those are the live-edit source of truth.
- Don't write multi-paragraph JSX comments; brief lines only.
