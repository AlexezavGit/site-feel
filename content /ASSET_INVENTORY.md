# FEEL AGAIN — Inventory of Digital Assets

## 1. Dashboard (BI System)
**Location:** `./dashboard/`
**Total: 10,864 lines (TSX/TS/CSS) + 2,661 App.tsx + 1,493 constants**

### L1 — Executive Macro Screen
| File | Lines | Status |
|------|-------|--------|
| `App.tsx` | 2,661 | Main app component |
| `L1Strategic.tsx` | 669 | Strategic overview (MHEI, SROI, WB tracker) |
| `index.css` | 692 | Theme, breakpoints, mobile |

### L2 — Drill-down Screens (11 screens)
| File | Lines | Purpose |
|------|-------|---------|
| `L2MHEI.tsx` | 428 | Mental Health Economy Index |
| `L2Finance.tsx` | 644 | Financial chain (FinTech) |
| `L2Clinical.tsx` | 194 | Clinical coverage & outcomes |
| `L2Coverage.tsx` | 172 | 0.28% coverage decomposition |
| `L2Operational.tsx` | 352 | 9 systemic gaps (flip cards) |
| `L2Data.tsx` | 218 | Data visibility map |
| `L2Sustain.tsx` | 271 | Sustainable development |
| `L2Digital.tsx` | 193 | Digitalization / admin overhead |
| `L2Regulatory.tsx` | 141 | Regulatory / humanitarian localization |
| `L2Backlog.tsx` | 178 | Backlog calculation |
| `L2Analytical.tsx` | 200 | Analytical |
| `L2Journey.tsx` | 50 | Stakeholder journeys |
| `L2Cost.tsx` | 169 | Cost anatomy |

### L3-L4 — Supporting Screens
| File | Lines | Purpose |
|------|-------|---------|
| `L3Footer.tsx` | 173 | Footer with data provenance |
| `L4Report.tsx` | 491 | Full analytical white paper |
| `InactionFunnel.tsx` | 325 | 3-path decision funnel (Timeline/Funnel/Waterfall) |

### Navigation & UI
| File | Lines | Purpose |
|------|-------|---------|
| `NavBar.tsx` | 301 | Mobile bottom tabs + Desktop L2 nav |
| `ScreenRouter.tsx` | 142 | Screen routing |
| `LangThemeBar.tsx` | 38 | EN/UK + Light/Dark |
| `StakeholderJourneys.tsx` | 377 | Stakeholder journeys component |
| `DataSourcesPanel.tsx` | 209 | Data sources panel |
| `FormattedNumber.tsx` | 45 | Number formatting |
| `types.ts` (screens) | 20 | ScreenId, ScreenNav types |

### Charts (5 components)
| File | Lines | Type |
|------|-------|------|
| `UkraineMap.tsx` | 56 | Map |
| `CustomBarChart.tsx` | 69 | Bar |
| `CustomDonutChart.tsx` | 35 | Donut |
| `CustomHeatmap.tsx` | 94 | Heatmap |
| `CustomScatterPlot.tsx` | 65 | Scatter |

### Infrastructure
| File | Lines | Purpose |
|------|-------|---------|
| `services/liveData.ts` | 595 | Live data services |
| `worker/index.ts` | 90 | Cloudflare Worker |
| `index.html` | 25 | Entry HTML |
| `vite.config.ts` | 29 | Vite build config |
| `tsconfig.json` | 29 | TypeScript config |
| `wrangler.jsonc` | — | Cloudflare deploy config |
| `package.json` | 26 | Dependencies |

### API Functions (Cloudflare Pages)
| File | Purpose |
|------|---------|
| `functions/api/activityinfo/[[path]].ts` | ActivityInfo proxy |
| `functions/api/kobo/[[path]].ts` | KoBoToolbox proxy |
| `functions/api/fts/[[path]].ts` | FTS proxy |
| `functions/api/health.ts` | Health check |
| `functions/api/ai-debug.ts` | AI debug |

### UI Components
| File | Purpose |
|------|---------|
| `Card.tsx` | Reusable card |
| `DataSourceBadge.tsx` | Data source badge |
| `InsightBox.tsx` | Insight box |
| `Logo.tsx` | Logo |

### Scripts
| File | Purpose |
|------|---------|
| `scripts/check_braces.cjs` | Brace checker |
| `scripts/check_jsx_tags*.cjs` | JSX tag validators (4 variants) |
| `scripts/fix_l1.cjs` | L1 fix script |
| `scripts/inspect_l1.cjs` | L1 inspector |
| `scripts/collapse_quotes.cjs` | Quote collapser |
| `scripts/find_*.cjs` | Parse error finders (3 variants) |

---

## 2. Cabinets (Digital Portals)
**Location:** Not yet in this repo — to be merged from cabinets repo
**Status:** Planned — offline-first (Service Worker + IndexedDB)

---

## 3. Website (lovable.dev)
**Location:** Separate project (lovable.dev)
**Status:** Prompt-ready — v8+current content

---

## 4. Compendium / Documentation
| File | Lines | Purpose |
|------|-------|---------|
| `Compendium may.md` | 466K | Full compendium (architecture, economics, policy) |
| `# FEEL AGAIN — РОЗШИРЕНИЙ MASTER DOCUMENT (v.8.0).md` | 459K | Master document v8 |
| `Стратегія та Архітектура Дашборду _FEEL AGAIN_.md` | 5K | Dashboard architecture strategy |
| `digital bus logic.md` | 22K | Digital Bus middleware logic |
| `FEEL_Ecosystem_Audit_v2.1 Alex cor..md` | 112K | Full ecosystem audit |
| `FEEL_AGAIN_HEAL_Validation_Analysis.md` | 37K | HEAL validation |
| `FEEL_Again_NBU_Explanatory_Note.docx.md` | 19K | NBU explanatory note |
| `каркас формул MHEI v3.md` | 98K | MHEI formulas framework |

---

## 5. External APIs / Integrations
| API | Type | Status |
|-----|------|--------|
| ActivityInfo | Proxy | ✅ Wired |
| KoBoToolbox | Proxy | ✅ Wired |
| IATI/FTS | Proxy | ✅ Wired |
| ESOZ (eHealth) | Planned | ⏳ |
| NBU (pharma tracker) | Planned | ⏳ |
| Trembita | Planned | ⏳ |
| Qouroom | Planned | ⏳ |
| Enkidu | Planned | ⏳ |
| NSZU (NHSU) | Planned | ⏳ |
| Diia.Sign | Planned | ⏳ |

---

## 6. Data Layer
| Element | Status |
|---------|--------|
| Neon DB (Postgres) | Planned — single DB for all |
| IndexedDB (offline) | Planned — cabinets only |
| Cloudflare Workers | ✅ Wired |
| ClickHouse (analytics) | Planned |
| Kafka (events) | Planned |

---

## 7. External Links
| Resource | URL |
|----------|-----|
| Preview deploy | https://refactor-drilldown.dashboard-1q7.pages.dev |
| Live dashboard | https://dashboard.feelagain.me |
| Website (lovable) | https://feelagain.me (expected) |
