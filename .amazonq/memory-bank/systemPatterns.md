# System Patterns

## Architecture Overview
4-рівнева screen-based SPA без URL-роутингу (state machine через React useState).
Деплой на Cloudflare Workers. Дані: статичні (constants.ts) + live APIs (OCHA FTS, WB WDI).

## Key Technical Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | State machine (useState) | Простота, але немає shareable URLs — технічний борг |
| Charts | Recharts | Гнучкість, ResponsiveContainer, кастомні Cell |
| Animation | motion/react (Framer Motion v12) | Spring animations для KPI cards |
| Styling | Tailwind 4 + CSS variables | Design system через --color-ds-* variables |
| Deploy | Cloudflare Workers | Edge performance, wrangler integration |
| Data | constants.ts (static) + fetchAllLiveData() | Live: OCHA FTS + WB WDI; решта статична |

## Design Patterns in Use
- Screen Router pattern: App.tsx оркеструє showL4/showAppendix/ScreenRouter через boolean flags
- Design System: CSS custom properties (--color-ds-teal, --color-ds-gold, etc.) + data-theme attribute
- Bilingual: всі тексти через `lang: Language ('uk' | 'en')` prop drilling
- Live data: fetchAllLiveData() → setLiveMetrics/setDataSources → DataSourceBadge status

## Component Relationships
```
App.tsx (оркестратор + L3 монолітний)
├── ScreenRouter → L1Strategic, L2Analytical, L2Finance, L2Digital... (12 screens)
├── L4Report (повний аналітичний звіт)
└── L3 (вбудований в App.tsx — технічний борг, треба винести)

components/
├── screens/ — L1, L2*, L3Footer, L4Report, NavBar, ScreenRouter
├── charts/ — CustomBarChart, CustomDonutChart, CustomHeatmap, CustomScatterPlot, UkraineMap
├── ui/ — Card, InsightBox, DataSourceBadge
├── DataSourcesPanel.tsx
└── FormattedNumber.tsx

services/liveData.ts — fetchAllLiveData() → OCHA FTS + WB WDI APIs
worker/index.ts — Cloudflare Worker entry
```

## Data Flow
```
constants.ts (static) ──────────────────────────────┐
                                                      ↓
services/liveData.ts → fetchAllLiveData() → App.tsx state → props → components
                                                      ↓
OCHA FTS API (HDX HAPI) ──────────────────────────────┘
World Bank WDI API ────────────────────────────────────┘
```

## Error Handling Strategy
- Live data: try/finally в loadLiveData(), DataSourceBadge показує status (live/loading/unavailable)
- Немає Error Boundaries на рівні компонентів — технічний борг
- Fallback: якщо live API недоступне — показуються статичні дані з constants.ts
