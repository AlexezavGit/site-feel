# FEEL AGAIN — Plan of Digital Assets Restructuring

## Priority: CRITICAL (Meeting-blokuyuchi)

### P1. Build & Deploy
- [ ] **Problem:** `npm run build` fails with "The service was stopped" (esbuild + Node 24)
- [ ] **Fix:** Downgrade Node 24 → 20 LTS, or update vite/esbuild
- [ ] **Result:** Working preview for stakeholders
- [ ] **Deadline:** BEFORE next meeting

### P2. NavBar Fix (Done — needs deploy verification)
- [x] **NavBar.tsx:** TypeScript errors fixed (early-return, fragments, crumb→crumbs, L2_ORDER type)
- [x] **InactionFunnel.tsx:** TypeScript errors fixed (duplicate ChartTooltip, FUNNEL_STEPS/WATERFALL calls, useMobile import)
- [ ] **Verify:** Build passes → deploy preview → confirm in browser

### P3. Data Corrections (Done)
- [x] L1Strategic: $1.87B → $463M, HCI 0.63 to top row, removed 6.8M projection
- [x] InactionFunnel: monthly labels, removed 6.8M, mobile stacked layout
- [x] index.css: light theme fix, mobile breakpoints (xs:320, sm:640, md:768), touch targets 44px

---

## Priority: HIGH (Data verification for WB ISR #6)

### P4. WB ISR #6 Numbers
- [ ] Verify 180K vs 260K vs 636K — what is the correct number?
- [ ] Source: WB ISR #6 report — check latest figures
- [ ] Correct in InactionFunnel.tsx + constants.ts

### P5. HEAL/THRIVE Re-verification
- [ ] Verify from WB files: HEAL DLI achieved vs pending
- [ ] THRIVE DLI achieved vs pending
- [ ] Update L1Strategic.tsx and constants.ts

---

## Priority: MEDIUM (Architecture)

### P6. Constellation Restructuring
- [ ] **Current state:** `site_front` has auth/registration/cabinets, dashboard is standalone (Vite library)
- [ ] **Target:** Merge cabinets into site_front, dashboard embeds as library
- [ ] **Actions:**
  1. Create `FEEL_AGAIN_CONSTELLATION.md` — map of all repos + their relationships
  2. Move cabinets code into site_front monorepo
  3. Convert dashboard to Vite library for CSP-safe embed
  4. Set up Turborepo for monorepo builds

### P7. Database Consolidation
- [ ] **Current:** Separate DB per service
- [ ] **Target:** Single Neon DB
- [ ] **Actions:**
  1. Create unified schema
  2. Migrate existing data
  3. Update all API endpoints to single DB

### P8. Offline-first (Cabinets)
- [ ] Service Worker setup
- [ ] IndexedDB schema
- [ ] Sync strategy (online/offline)
- [ ] Only for cabinets (not dashboard)

---

## Priority: LOW (Enhancements)

### P9. External APIs
- [ ] Wire ESOZ (eHealth) integration
- [ ] Wire NBU pharma tracker
- [ ] Wire Trembita
- [ ] Wire Qouroom
- [ ] Wire Enkidu
- [ ] Wire NSZU
- [ ] Wire Diia.Sign (at action points only)

### P10. Auth
- [ ] Implement Diia.Sign at action points (not login gate)
- [ ] Role-based access for cabinet

### P11. i18n & Theming
- [ ] Default: UA + light theme
- [ ] EN/UK toggle
- [ ] Light/Dark toggle
- [ ] All static strings externalized

---

## Implementation Order

```
Week 1 (NOW):
  P1 — Build fix (Node 20/esbuild)
  P2 — Deploy current fixes
  P3 — Verify data corrections live

Week 2:
  P4 — WB ISR #6 verification
  P5 — HEAL/THRIVE re-verification
  P6 — Constellation mapping

Week 3:
  P7 — DB consolidation
  P8 — Offline-first prototype

Week 4+:
  P9 — External API wiring
  P10 — Auth
  P11 — i18n/theming polish
```

## Blockers
1. **Node 24 + esbuild** — build won't run. Need Node 20 LTS.
2. **WB ISR #6 data** — need report access to verify numbers.
3. **Constellation merge** — need access to cabinets/site_front repos.
