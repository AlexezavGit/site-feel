# Active Context

## Current Focus
Підготовка до презентації у Світовому Банку. HD Sandbox launch FEEL Again Program.
Ціль: побудувати дашборд для лінкування до кабінетів та описових ресурсів програми Feel Again, готовий для роботи зі стейкхолдерами.

## Репозиторій
**Основний:** `/Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/WIP Circulation/Antigravity/dashboard`
Стек: Vite + React 19 + TypeScript + Tailwind 4 + Recharts + motion/react + Cloudflare Workers
Hash routing: ✅ ВИКОНАНО (ScreenRouter.tsx — readHash/hashchange/push, 14 screen IDs)
Deeplinks: dashboard.feelagain.me/#l1, /#l2-mhei, /#l2-finance, etc.

## Ключові ресурси
- Dashboard folder: /Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/Dashboard/
- Screenshots/design: /Users/alexzvo/Library/CloudStorage/GoogleDrive-alexezav@gmail.com/.shortcut-targets-by-id/1Ggx03lHED8hfK7qUKiswilxXcW-x6FjX/Feel/design/design/screenshots
- Antigravity folder: /Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/WIP Circulation/Antigravity/

## North Star
**"Якщо не мобілізуватись зараз — країна наїде на бюджетний колапс. $171B кумулятивних втрат за 3 роки. FEEL Again — єдиний middleware-ключ."**
- Сценарій Б (без дій): соматизація → $6.49B/рік виплат по інвалідності → колапс бюджету на 24 міс
- Сценарій А (FEEL Again): +$5.59B ВВП/рік, вихід на беззбитковість

## ЗАФІКСОВАНІ РІШЕННЯ ALEX (2026-07-11) ✅

### Р1 — Чисельність потреби ВИРІШЕНО
- 3.9M = офіційна цифра очікуваних випадків середньої та важкої тяжкості (VERIFIED, WHO/Lancet 2023)
- 9.6M = загальна кількість осіб, що потребують будь-якої форми допомоги (VERIFIED, OCHA HNRP)
- 6.8M = проєкційне навантаження при накладенні травм (PROJECTION, не на L1)

### Р2 — MHEI шкала ВИРІШЕНО
- Шкала 0-100, як у WB-aligned документах (68.5 = поточне значення)
- Методологія LSE — обрана, має проглядатись у дашборді
- Формулювання для НБУ: "індекс готовності регіонів до прийняття ветеранів"
- НБУ = реальний кустодіан даних та регулятор у цьому контексті

### Р3 — Заблоковані суми ВИРІШЕНО
- ВИПРАВИТИ: "$1.7B заблоковано" → "$145-150M pending verification"
- Поточний стан в коді: L1Strategic.tsx має $1.87B (blocked WB+EU) та $1.07B
- HEAL disbursed: $171M (34% з $500M), closing Dec 2026
- THRIVE disbursed: ~$320M (70% з $454M, PforR)
- L2Finance.tsx показує HEAL $329M undisbursed + THRIVE $134M = $463M (це правильно)
- Правильний ask: $25M для FEEL Again middleware (HEAL Component 4: $41M незадіяно)

### Р4 — "42 практикуючих" ВИРІШЕНО
- Показник "42 задокументованих у 2020" — застарів, не використовувати як standalone число
- Потрібно: конверсія лікарів первинки після навчання → підписані пакети НСЗУ
- Є інформація: ~50 осіб навчались у 2025 в асоціації EMDR — треба верифікувати
- Переформулювання: "42 задокументованих у 2020 — актуальні дані структурно недоступні через відсутність ЕСОЗ-інтеграції. Це саме по собі є доказом проблеми."

## Аналіз MAGUS Council (червень 2026) — синтез
- 4 системні проблеми: 25+ KPI без ієрархії, 4 конфліктуючі метафори, 5+ відсутніх візуалізацій, Cyber-Fortress естетика
- Топ-3 критичні зміни: інформаційна арка (Проблема→Розрив→Наслідок→Рішення→Інвестиція), Sankey/Funnel/Heatmap, піраміда KPI (North Star → 3 драйвери → 9 метрик)
- Можна відкласти: мобільна адаптація, повна зміна палітри
- Ціль: час до першого інсайту з 5+ хв до 60 секунд

## L4 — Стан та план
- L4 = наративний звіт, зараз не зведений
- Структура на базі v4 LISTING: Output → Outcome → Impact (IRIS+/WB/IASC)
- 8 сторінок: Огляд, Людський капітал, Фінансові потоки, Ринок/Формалізація, Вимірювання, Цифрова інфраструктура, Клінічний вплив, Гуманітарне оцінювання

## Навігація — проблеми задокументовані
- Кнопки листання L2 відсутні на деяких екранах → перерваний горизонтальний флоу
- L2Cost/L2Coverage: власний ArrowLeft header замість NavBar (порушення design system)
- L3 навігація ізольована від загальної
- "Шляхи бенефіціара" на L3 → перенести на інший актив (не видаляти)

## Skill оцінка
- https://gist.github.com/aparente/e48c353755958621b3c0004593105a90 — SVG графік, не корисне

## Next Steps (пріоритет)
1. Виправити числа в L1Strategic.tsx ($1.87B → правильна сума, перевірити контекст)
2. Переформулювати "42 практикуючих" + знайти актуальні дані навчань 2022-2026
3. Додати Funnel пацієнта (9.6M → 6.8M → 3.9M → 180K верифіковано → 82.8K завершили)
4. Додати Sankey фінансування (HEAL+THRIVE потоки)
5. Ревізія навігації L2/L3
6. Сформулювати структуру L4 як наративний звіт
7. Network-граф інтероп (5 систем → hub-and-spoke)
8. ActivityInfo токен: `npx wrangler versions secret put ACTIVITYINFO_API_KEY`

## Додаткові ресурси (2026-07-11)

### Файли для використання в реалізації
- **Heal Trive WB Dash.html** — L2 Delta Calculator / MHEI prototype
  - Шлях: `/Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/WIP Circulation/Antigravity/Heal Trive WB Dash.html`
  - Містить: MHEI toggle "до/після", шкала 0-100, 4 картки з вагами, GDP impact рядок
  - Використати: як основу для оновленого L2MHEI або L2Delta екрану
- **feel-again-parametric-model.html** — Параметрична модель управління
  - Шлях: `/Users/alexzvo/Library/CloudStorage/GoogleDrive-mentalhealthyouare@gmail.com/My Drive/Feel/Operations &  Launch/feel-again-parametric-model.html`
  - Формула: E = (B × CR × QI) / (AC × T) — відповідає LSE методології
  - Дані застаріли (пілотні числа), але структура scenario simulator вірна
  - Використати: scenario simulator зі слайдерами → перенести в L2MHEI

### Три візуальні компоненти (section_1_dashboard.md) — оцінка
| Компонент | Де | Коли |
|-----------|-----|------|
| Симуляція $1M → 5000 ФОП (0.4 сек кліринг) | L4 наратив або L2Finance мокап | Фаза 5+ (потребує реальний API) |
| Монітор готовності інфраструктури (10K sessions/sec, blockchain) | L2Digital PROJECTION блок | Фаза 5+ (немає реальних даних) |
| Повзунок % тіньових психологів → YLD/ВВП | L1Strategic або L2MHEI | ЗАРАЗ — варіація ROI калькулятора |

### Humanitarian IM контекст (для L4 і L2Digital наративу)
- HDX HAPI (2024) — ми підключені, бейдж "HDX HAPI · live"
- HXL retired (2026) — аргумент для FEEL Again як middleware нового покоління
- OCHA IMB dissolved (2025) — старі підходи не працюють → потрібна нова інфра
- Ask ReliefWeb AI chatbot (2024) — референс AI в гум. секторі
- ReliefWeb Crisis Figures closed (2026) — підкреслює що потрібні нові рішення
Використати: L4 розділ "Чому зараз" + L2Digital як контекст фрагментації IM

### Memory Bank локації
- **Актуальний (Kiro):** `/Users/alexzvo/Documents/git/.amazonq/memory-bank/`
- **Застарілий:** `/Users/alexzvo/Documents/git/.amazonq/rules/memory-bank/` (не оновлювати)
