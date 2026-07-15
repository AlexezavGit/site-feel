# FEEL AGAIN PROGRAM CONSTELLATION — INTEGRATION & REFACTOR PLAN v2.2

**Status:** Plan Mode — Elaborated: 2026-07-13 | Based on analysis of 12 GitHub repos + local Antigravity docs + Dashboard Analysis v3 + Sector Map + Capacity Verification + HEAL/THRIVE validation

---

## EXECUTIVE SUMMARY

You have **12 GitHub repositories** + **local documentation** forming one ecosystem serving **one audience** (donors/investors/regulators + providers/beneficiaries) with different needs. All are incomplete but complementary.

### Repository Map

| Layer | Repos | Target | Action |
|-------|-------|--------|--------|
| **Public Intelligence** | `AlexezavGit/dashboard` (Antigravity/dashboard) | **Keep as-is** + embed | Source of truth for MHPSS sector data |
| **Operational Cabinets** | `site_front` (4 cabinets + public pages) | **MONOREPO BASE** | Has auth, registration, Diia.Sign, cabinets |
| | `DigitalBus` (13 ops pages) | → merge into monorepo `apps/web/src/pages/ops/` | ScoringDashboard, AI Analytics, Blockchain, Monitoring |
| | `ServiceAdmin` (duplicate ops pages) | **DISCARD** | Same codebase as DigitalBus |
| | `terminal` (Train for Care calculator) | → `apps/terminal/` (Next.js) | Donor-cabinet specific calculator |
| **Data Intelligence** | `MHPSS-DLI` (LSE engine, regional data) | → `packages/mhe-engine/` | OracleStream, PforRCountdown, TruthMachine, NBUCorrelator |
| | `strategy_operations` (Remix internal portal) | → `apps/internal-portal/` | Dashboard, Financials, Architecture views |
| **Website** | `site-feel` (HTML) | **MIGRATE** to `lovable.dev` with v8+current content | Proposal generator, Bloomberg terminal style |
| | `Feel-Again-blomberg` | → merge content | Additional content |
| | `site_narrative` | → merge content | Public pages |
| **Design System** | `FEEL Again - Design System Canvas_01.dc` + `FEEL Again кільце.dc` | → `packages/ui/` | RingHub, RingNav, PlaqueTitle, Color tokens |

---

## IMMEDIATE DASHBOARD PRE-MEETING FIXES

### Critical Data Corrections

| Current (Wrong) | Corrected | Source |
|-----------------|-----------|--------|
| `$1.87B blocked` | **$463M total undisbursed** (HEAL $329M + THRIVE $134M) — **needs re-verification** | L2Finance.tsx + WB validation |
| `42 practitioners (2020)` | **200-250 trained (EMDR Assoc + UNICEF 2022-2026) — practicing count structurally unavailable due to missing ESOZ integration. This itself proves the problem.** | Multiple screens |
| `6.8M cumulative trauma` | **REMOVE** — theoretical projection, insufficiently grounded. Keep only 3.9M (clinical need, WHO/Lancet verified) and 9.6M (total needing support, OCHA) | — |
| `180K verified` | **Verify from WB ISR #6** — could be 260K | Check ISR #6 |
| `82.8K completed` | **Remove until verified** | — |
| `3.5M` | **3.9M** (WHO/Lancet 2023 verified) | L1Strategic |
| `HCI 0.63` | **Move from bottom row → Top row** (North Star metric) | L1Strategic |

### Navigation Fixes
- L2Cost/L2Coverage: Replace custom ArrowLeft header with shared `NavBar`
- Add missing L2 nav buttons on all screens → horizontal flow
- L3 navigation: connect to global NavBar (not isolated)

### L1→L2 Drilldown Repair

| L1 Element | Current Drilldown | Fixed Drilldown |
|------------|-------------------|-----------------|
| Top row (MHEI, SROI, WB DLI) | Wrong L2 or none | → `L2MHEI` slides from LEFT |
| Middle row | Jumps to L3 bypassing L2 | → Respective L2 |
| Bottom row | No drilldown | → Add drilldown to L2 |

### L1 Visual Overhaul (per MAGUS Council + Analysis v3)
- **Information Arc**: Problem → Gap → Consequence → Solution → Investment
- **KPI Pyramid**: North Star (MHEI + HCI 0.63) → 3 Drivers → 9 Metrics
- **Three Paths — Three Fates**: Monthly breakdown, larger fonts
- **Chart Area**: InactionFunnel mini / GDP impact sparkline (space from moving bottom row up)
- **Bottom row items** → redistributed: HCI to top, others to middle row

### Deploy
```bash
cd "/Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/WIP Circulation/Antigravity/dashboard"
git add -A
git commit -m "fix: data corrections + nav repairs for WB meeting
- L1Strategic: $1.87B → $463M undisbursed (needs WB re-verification), reword 42 practitioners, HCI 0.63 to top
- Add patient funnel (9.6M→3.9M→verified→completed) — remove 6.8M projection
- Fix L2Cost/L2Coverage headers to use shared NavBar
- Repair L1→L2 drilldown: MHEI←left, Data→right, Reports→bottom
- Three Paths: monthly breakdown, larger fonts
- Move bottom row metrics to top/middle, add chart area"
git push origin refactor/drilldown
npm run build && npx wrangler pages deploy dist --project-name=dashboard --branch=refactor-drilldown
```

---

## LANGUAGE & THEMING REQUIREMENTS

### Bilingual Support (EN/UK)
- Default: Ukrainian + Light theme
- Toggle: EN/UK in header (persist in localStorage)
- All text: Must exist in both languages
- Current issue: Light theme broken on dashboard — must fix

### Theme System
- Required themes: light + dark
- Default: light (currently broken)
- Toggle: header button (persist in localStorage)
- CSS variables for all colors (already in design system)

---

## WB HEAL/THRIVE RE-VERIFICATION NEEDED

### Files to Cross-Check
| File | Purpose |
|------|---------|
| WB Heal THrive and Legislation | Primary WB documentation |
| FEEL_AGAIN_HEAL_Validation_Analysis | HEAL validation analysis |
| Heal Trive WB Dash | Dashboard reference |

### Numbers to Verify
- HEAL: $500M total, $329M undisbursed (65.8%)
- THRIVE: $454M total, $134M undisbursed (29.5%)
- DLI targets: HEAL 250K sessions, THRIVE 300K sessions
- Component 4 HEAL: $41M unallocated → our $25M ask

---

## DASHBOARD MAJOR REFACTOR (Week 1-2)

### L2Operational → Narrative Diagnostic Report Cover
- Transform into report cover page with 9 Gaps as TOC buttons
- Each gap = button → slide-up content from bottom
- 3 view modes per gap: Charts Only / Charts + Narrative / Full White-Green Paper

### Two Report Modes
| Report | Source | Structure |
|--------|--------|-----------|
| Perfect Storm (White Paper) | Internal-portal + Antigravity §7 + MHPSS-DLI | 5 Systemic Failures → blocks → long-read |
| Ninth Wave (Green Paper) | L2Operational 9 Gaps + MHE-engine | 9 Gaps → blocks → long-read |

### L2 Screen Replacements (5 core only)
| Screen | Purpose |
|--------|---------|
| L2Finance | HEAL/THRIVE Sankey, PforR unlock, funding flows |
| L2Clinical | North Star = Available staff + Missing staff + 8 private streams |
| L2Operational | Report Cover → 9 Gaps TOC with slide-up panels |
| L2Workforce | North Star = Shadow private practice capacity |
| L2Admin | Cost of Inaction addendum — Sandglass visual |

### L1→L2 Interaction Pattern
```
L1 Screen:
├── Top Row (4 cards) ← HCI 0.63 + MHEI, SROI, WB DLI
├── Middle Row (2-3 cards) ← moved from bottom row
├── Chart Area ← InactionFunnel mini / GDP sparkline
└── Drilldown Triggers:
    ├── MHEI card → L2MHEI slides from LEFT
    ├── Data Visibility card → L2Data slides from RIGHT
    └── Reports card → L4 Report slides from BOTTOM
```

---

## CABINET CONSOLIDATION

### Merge Order
1. Base: site_front (has auth, registration, 4 cabinets, public pages)
2. Add: DigitalBus ops pages → apps/web/src/pages/ops/
3. Extract: ScoringDashboard → packages/scoring/ + API route
4. Unify Auth: Replace Replit Auth with Diia.Sign + Passport local + JWT
5. Merge DB: Single Neon schema
6. Migrate Terminal: apps/terminal/ (Next.js)

### Cabinet Spec Updates
| Cabinet | Changes |
|---------|---------|
| Donor | Programs page, Projects = view-only, Scoring, Calculator (SROI) |
| Provider | Programs = join only, Projects = create, "Beneficiary" → "Target Group" |
| Beneficiary | Programs, Screening, Providers, Schedule, Calculator, P2P |
| Auditor | = Public Control — Reports, Anomalies, Open Data, Blockchain logs |

---

## DATA INTELLIGENCE INTEGRATION

Move MHPSS-DLI components into Dashboard:

| Component | Target Location | Purpose |
|-----------|----------------|---------|
| OracleStream | L2MHEI / L2Finance | Live NGO session verification |
| PforRCountdown | L1Strategic / L2Finance | WB deadline meter |
| TruthMachine | L2Operational / L2Clinical | Certificate vs Actual utilization |
| NBUCorrelator | L2Data / L2Operational | MHPSS volume ↔ NBU transaction/credit stress |
| WhitepaperDocs | L4 / Report Generator | API specs, Solidity, endpoints |
| Regional data | packages/mhe-engine/data/ | 8 oblasts + LSE coefficients |

---

## EXTERNAL API INTEGRATIONS

| API / System | Purpose | Cabinet Integration |
|-------------|---------|-------------------|
| IATI | Donor activity data | Donor Cabinet |
| HDX/HAPI | Humanitarian data exchange | All |
| ActivityInfo | Cluster reporting | Provider/Donor/Auditor |
| KoBoToolbox | Field assessments | Beneficiary/Provider |
| ESOZ/eHealth | State EHR | Provider/Auditor/Donor |
| Trembita | Gov interoperability | Escrow |
| Qouroom (HighCastle) | Blockchain registry | All |
| Enkidu (P2P) | P2P payments | Beneficiary/Donor |
| World Bank API | WDI indicators | Dashboard |
| Diia.Sign | Qualified e-signatures | All cabinets |
| NSZU API | Tariffs, provider registry | Provider/Donor |

---

## MONOREPO STRUCTURE

```
feel-again-platform/
├── apps/
│   ├── web/                    # site_front → cabinets + public + ops
│   ├── api/                    # Express API → Hono for CF Workers
│   ├── terminal/               # Train for Care calculator (Next.js)
│   ├── internal-portal/        # strategy_operations (Remix/Vite)
│   ├── dashboard-embed/        # Vite library → widgets for website
│   └── docs/                   # Antigravity content → Nextra
├── packages/
│   ├── ui/                     # shadcn/ui + RingHub + RingNav + PlaqueTitle
│   ├── charts/                 # Recharts wrappers
│   ├── auth/                   # Diia.Sign + Passport local + JWT
│   ├── db/                     # Drizzle schema (single Neon DB)
│   ├── mhe-engine/             # MHPSS-DLI → LSE, regional data
│   ├── escrow/                 # Trembita/PFU clearing logic
│   ├── tax-agent/              # FOP tax automation
│   ├── scoring/                # Co-funding evaluation
│   └── api-contracts/          # OpenAPI spec
├── tools/
│   └── wrangler/               # CF Worker for API proxies
└── turbo.json
```

---

## PRIORITY SEQUENCE & TIMELINE

| Week | Focus | Deliverables |
|------|-------|-------------|
| 0 (Now) | Dashboard pre-meeting | Data fixes, nav repairs, light theme, preview deploy |
| 1 | Monorepo init + Dashboard refactor | Turborepo, L1→L2 drilldown, L2Operational→Report Cover, L2Admin Sandglass |
| 2 | Cabinet merge + Website | site_front + DigitalBus → monorepo, auth, lovable.dev v8 site |
| 3 | Data engine + API contracts | MHPSS-DLI → packages/mhe-engine, OpenAPI spec |
| 4 | E2E integration + Testing | Dashboard widgets in website, Donor Cabinet scoring |
| 5 | Load test + Security + Launch | Pen test, CF Workers scaling, Nextra docs |

---

## DECISION POINTS CONFIRMED ✅

| # | Decision | Status |
|---|----------|--------|
| 1 | WB ISR #6 verified/completed numbers | You check ISR #6 |
| 2 | 6.8M projection — REMOVED | ✅ |
| 3 | HEAL/THRIVE numbers — re-verify | You verify |
| 4 | L2Operational as Report Cover | ✅ |
| 5 | L2Admin Sandglass | ✅ |
| 6 | Two Report Modes | ✅ |
| 7 | Stakeholder Journeys horizontal | ✅ |
| 8 | Diia.Sign only at action points | ✅ |
| 9 | External API scope | ✅ Confirmed |
| 10 | Bilingual EN/UK + Light/Dark | ✅ |

---

**Ready to execute.** You verify WB ISR #6 + HEAL/THRIVE numbers, and I'll start executing the pre-meeting dashboard fixes + creating the 4 documentation files.

> **Примітка про структуру проєкту (2026-07-15):** Усі файли проєкту зібрано в . Контент розподілено:
> -  — Пропозиції до НСЗУ (Full + Short)
> -  — НБУ документи (Short Brifing + аналітичний звіт)
> -  — Всі аналітичні матеріали, юридичні документи, словники, методології
> - Кореневі md файли — архітектура, реструктуризація, інвентаризація
>
> **Виправлення даних (2026-07-15):** .8B — загальний обсяг MHPSS витрат України за 2025 рік (всі джерела), НЕ DLI макрофінансова подушка. Виправлено в усіх файлах проєкту.

