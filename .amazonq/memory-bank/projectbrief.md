# Project Brief

## Project Name
MHPSS Intelligence Engine — FEEL Again Dashboard

## Purpose
Макроекономічний дашборд для візуалізації кризи ментального здоров'я в Україні та обґрунтування інвестицій через FEEL Again як цифрового middleware між гуманітарними даними (CommCare/KoBo/ActivityInfo) та державною eHealth системою (ESOZ/Trembita). Основна аудиторія — Світовий Банк (HEAL P180245 / THRIVE P505616).

## Core Requirements
- Відображення ключових метрик: 0.28% coverage, 62.2M session gap, $954M WB locked, 7.8yr backlog
- 4-рівнева архітектура: L1 Strategic → L2 Analytical (12 екранів) → L3 Appendix → L4 Full Report
- Двомовність (UA/EN), темна/світла тема
- Live data: OCHA FTS API, World Bank WDI API
- ROI калькулятор з DALY-моделлю (WHO $4:1)
- Деплой на Cloudflare Workers (dashboard.feelagain.me)

## Out of Scope
- Клінічні інтерфейси для терапевтів (окремий продукт — Terminal)
- Донорський портал зі smart-контрактами (майбутній етап)
- Пряма інтеграція з ESOZ/Trembita (це роль FEEL Again middleware)

## Success Criteria
- Презентація у Світовому Банку прийнята як аналітичний матеріал
- Доступ до $41.1M HEAL Component 4 budget space через MoH/RFQ/Direct Selection
- Dashboard цитується у WB project documents як джерело даних
