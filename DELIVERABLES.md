# Deliverables Log

Running record of completed work on the AC portfolio website.
Append each item when done — date, what was delivered, and status.

---

## Phase 1 · Hi-Fi Pages (all 6)

| # | Deliverable | Date | Status |
|---|-------------|------|--------|
| 1 | `hifi/page-home.jsx` — Home hi-fi, full tweaks panel (~50 fields) | 2026-05-13 | ✓ **Approved** — numbers pending AC sign-off |
| 2 | `hifi/page-portfolio.jsx` — Portfolio hi-fi | 2026-05-13 | ✓ **Approved** |
| 3 | `hifi/page-track-record.jsx` — Track Record hi-fi | 2026-05-13 | ✓ **Approved** |
| 4 | `hifi/page-network.jsx` — Network hi-fi | 2026-05-15 | ✓ **Approved** |
| 5 | `hifi/page-cases.jsx` — Case Studies hi-fi (4 redacted trades) | 2026-05-15 | ✓ **Approved** |
| 6 | `hifi/page-about.jsx` — About & Contact hi-fi with intake form | 2026-05-15 | ✓ **Approved** |
| 7 | `AC Website Hi-Fi.html` — unified 6-page design canvas | 2026-05-15 | ✓ Created |

## Phase 1 · Infrastructure

| # | Deliverable | Date | Status |
|---|-------------|------|--------|
| 8 | `hifi/hifi-kit.jsx` — design tokens + primitives (`Stat`, `StatTile`, `TextLink`, `Subhead`, etc.) | 2026-05-13 | ✓ Done |
| 9 | Architecture decision — no-build (React UMD + Babel-in-browser) | 2026-05-13 | ✓ Frozen |
| 10 | Direction decision — Home A (Editorial Magazine) | 2026-05-13 | ✓ Locked |

---

## Phase 1 · Open items before lock

- [ ] AC reviews all 6 pages and marks feedback
- [ ] Real figures for Home stats: Settlement Rate, On-Time Delivery, Trades, Jurisdictions, Metric Tons
- [ ] Real figures for Track Record
- [ ] Confirm contact details: address, email, phone
- [ ] Decision: NetworkMap — interactive or editorial-flat?
- [ ] Decision: which pages keep the tweaks panel vs. inline copy

---

## Phase 2 · Mobile pass (not started)

Depends on Phase 1 lock. Will require `useBreakpoint` hook + layout switches.

## Phase 3 · Polish (not started)

AC-driven: broken items, copy updates, real photography.

---

## Decisions log (carry-forward from ROADMAP.md)

- **2026-05-13** Architecture frozen: no-build.
- **2026-05-13** Direction locked: Home A (Editorial Magazine).
- **2026-05-13** Tweaks panel scope: per-page decision; drafted pages keep it, locked pages inline copy.
- **2026-05-13** Kit primitives `Stat`, `StatTile`, `TextLink`, `Subhead` added to `hifi-kit.jsx`.
- **2026-05-13** Home image corrected: `coffee · andean highlands` / "Plate I · Cherries".
