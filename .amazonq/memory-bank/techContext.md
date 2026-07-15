# Tech Context

## Language(s)
- TypeScript ~5.8.2
- React 19.2.4

## Frameworks & Libraries
| Package | Version | Purpose |
|---------|---------|---------|
| react / react-dom | ^19.2.4 | UI framework |
| recharts | ^3.7.0 | Charts (Bar, Area, Composed, Scatter) |
| motion | ^12.35.1 | Animations (motion/react) |
| lucide-react | ^0.574.0 | Icons |
| tailwindcss | ^4.2.1 | Styling (via @tailwindcss/vite) |
| vite | ^6.4.2 | Build tool |
| wrangler | ^4.81.0 | Cloudflare Workers deploy |
| @cloudflare/vite-plugin | ^1.31.1 | Cloudflare integration |

## Infrastructure & Cloud
- Cloudflare Workers (deploy target: dashboard.feelagain.me)
- Cloudflare Pages (feelagain.pages.dev — для FEEL Again 4 Functions)
- Live APIs: OCHA FTS (HDX HAPI), World Bank WDI (SH.XPD.CHEX.GD.ZS, HD.HCI.OVRL)
- Worker: `worker/index.ts` — Cloudflare Worker entry point
- Functions: `functions/api/` — Cloudflare Pages Functions

## Build & Tooling
| Tool | Purpose |
|------|---------|
| vite | Dev server + build |
| tsc --noEmit | Type checking (lint script) |
| wrangler | Deploy to Cloudflare Workers |
| scripts/*.cjs | Dev-only JSX debug utilities (не для production) |

## Local Development Setup
1. `npm install`
2. `npm run dev` — Vite dev server
3. `npm run preview` — build + wrangler local preview
4. `npm run deploy` — build + deploy to Cloudflare

## Environment Variables
| Variable | Description |
|----------|-------------|
| (see .env.example) | API keys для live data sources |

## Deployment
- `npm run deploy` → `vite build` → `wrangler deploy`
- Target: dashboard.feelagain.me (Cloudflare Workers)
- Конфіг: `wrangler.jsonc`

## Canonical Source
- Основна версія: `/Users/alexzvo/Library/CloudStorage/.../Antigravity/dashboard/`
- Worktree (архів): `dashboard.worktrees/copilot-worktree-2026-05-25T21-01-34/` — НЕ розвивати
