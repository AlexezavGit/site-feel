# Progress

## Status: 🟡 In Progress — HD Sandbox Launch / WB Presentation Prep

## What Works ✅
- 4-рівнева архітектура L1→L2→L3→L4 повністю функціональна
- 14 L2 аналітичних екранів (ScreenRouter)
- Live data: OCHA FTS (HDX HAPI) + World Bank WDI підключені
- ROI калькулятор з DALY-моделлю
- Двомовність UA/EN, темна/світла тема
- Деплой на Cloudflare Workers
- Design system (cyber/blueprint aesthetic) з CSS variables
- DataSourcesPanel з live/loading/unavailable статусами
- ActivityInfo код написаний в liveData.ts — чекає токен
- Hash routing ✅ ВИКОНАНО — ScreenRouter.tsx (readHash/hashchange/push, 14 screen IDs)

## Completed This Session (2026-07-11)
- Прочитано критичний аналіз MAGUS Council (17 сторінок, червень 2026)
- Зафіксовано 4 рішення Alex по конфліктах даних (Р1-Р4)
- Досліджено Dashboard folder, Antigravity folder, screenshots folder
- Прочитано v4 LISTING, v5 Execution Plan, Session Compaction
- Прочитано section_1_dashboard.md, section_8_economics.md (LSE методологія, SIB)
- Прочитано L2Finance.tsx та L1Strategic.tsx — знайдено де саме числа треба виправляти

## In Progress 🔄
- Підготовка до презентації Світового Банку
- ActivityInfo токен: `npx wrangler versions secret put ACTIVITYINFO_API_KEY`

## Not Started ❌
- Виправлення чисел в L1Strategic.tsx (перевірити контекст $1.87B/$1.07B)
- Переформулювання "42 практикуючих" з контекстом та новими даними
- Funnel пацієнта (9.6M→82.8K)
- Sankey фінансування (HEAL+THRIVE потоки)
- Network-граф інтероп (5 систем → hub-and-spoke)
- Heatmap регіональних розривів (16 областей × 6 індикаторів)
- Ревізія навігації L2/L3 (відсутні кнопки листання, непослідовний NavBar)
- Структура L4 як наративний звіт (Output→Outcome→Impact)
- Піраміда KPI: North Star → 3 драйвери → 9 метрик
- 5-крокова структура-арка
- Перемикач аудиторій
- Drill-down по метриках
- PDF/print export

## Known Issues
| Issue | Severity | Notes |
|-------|----------|-------|
| App.tsx ~2500 рядків (L3 вбудований) | Medium | Технічний борг |
| L2Cost/L2Coverage: власний header замість NavBar | High | Порушення design system |
| Кнопки листання L2 відсутні на деяких екранах | High | Перерваний горизонтальний флоу |
| L3 навігація ізольована від загальної | Medium | Inconsistency |
| Числа в L1Strategic.tsx потребують перевірки | Critical | $1.87B/$1.07B — перевірити контекст |
| "42 практикуючих" — застаріло 2020 | High | Переформулювати |
| Мобільна версія таблиць L3 | Medium | Горизонтальний scroll відсутній |
| Немає Error Boundaries | Medium | Graceful degradation відсутня |

## Зафіксовані рішення (2026-07-11)
| # | Конфлікт | Рішення |
|---|----------|---------|
| Р1 | 3.9M vs 6.8M vs 9.6M | 3.9M = клінічна потреба VERIFIED; 9.6M = загальна; 6.8M = PROJECTION |
| Р2 | MHEI шкала | 0-100, методологія LSE, "готовність регіонів до ветеранів", НБУ кустодіан |
| Р3 | $1.7B заблоковано | Перевірити контекст L1Strategic.tsx, виправити відповідно |
| Р4 | 42 практикуючих | Переформулювати + знайти актуальні дані навчань 2022-2026 |

## Changelog
| Date | Change |
|------|--------|
| 2026-07-11 | Зафіксовано рішення Alex Р1-Р4, прочитано MAGUS аналіз, досліджено всі папки, знайдено де виправляти числа |
| 2026-07-11 | Hash routing підтверджено виконаним (ScreenRouter.tsx) |
| 2026-06 | Прочитано всі стратегічні файли, оновлено Memory Bank |
| 2026-05-25 | Copilot worktree створено (архів) |
| 2026 | v3.0.4-BUNKER — поточна версія |
