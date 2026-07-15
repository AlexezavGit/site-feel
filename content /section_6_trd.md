# SECTION 6: TECHNICAL REQUIREMENTS DOCUMENT (TRD)

This document aggregates the comprehensive technical specifications, infrastructure constraints, and operational guidelines governing the FEEL Again platform. It outlines the architectural decisions required to bridge global humanitarian data standards with the national digital infrastructure of Ukraine, specifically focusing on data sovereignty, load balancing, and cryptographic security. 

## 6.1. System Architecture and Integration Middleware

The core architecture operates as a sovereign Zero-Knowledge Proof (ZKP) and blockchain validator acting as an intermediary layer between global humanitarian monitoring systems (KoboToolbox, ActivityInfo) and the Ukrainian national health registry (ESOZ/eHealth). Direct integration into ESOZ is strictly prohibited by state cryptographic protection standards (КСЗІ). Consequently, the platform utilizes a "Digital Bus" gateway methodology. This approach permits asynchronous data transmission, preventing overwhelming state registries during peak loads while ensuring all clinical outcomes (PCL-5, PHQ-9) are securely hashed and verifiable without exposing sensitive personal health information (PHI) to unauthorized nodes. The middleware architecture prioritizes fault tolerance, deploying decentralized ledger technology to maintain an immutable audit trail of all financial disbursements tied to clinical checkpoints.

## 6.2. Smart Clearing and Trembita/PFU Escrow Specifications

Financial routing within the system is inextricably linked to verified clinical and economic outcomes, executed via smart contracts. The Escrow module governs the conditional release of funds based on real-time data synchronization with the Pension Fund of Ukraine (PFU) via the national interoperability system "Trembita".

| Escrow Release Stage | Trigger Condition | Verification Mechanism | Financial Action |
| :--- | :--- | :--- | :--- |
| Initial Block | Intake diagnostic completion | Provider digital signature (Дія.Підпис) | 100% of treatment cost locked in Donor Escrow |
| First Tranche | First session execution | System log of video/audio connection | 20% transferred to Provider account |
| Second Tranche | Fifth session (Middle Checkpoint) | PCL-5 positive delta logged in ESOZ gateway | 30% transferred to Provider account |
| Final Tranche | Course completion and Employment | Trembita API call to PFU confirming 6 months of ЄСВ payments | 50% transferred to Provider account |

The system mandates that failure to retrieve ЄСВ (Single Social Contribution) payment confirmation from PFU results in the final tranche remaining locked. This enforces the macroeconomic mandate of the program, directly linking therapeutic success to economic formalization.

## 6.3. Load Balancing and Anti-Burnout Parameters

To maintain the highest standards of clinical efficacy and mitigate the systemic risk of provider burnout, the platform enforces hard-coded infrastructure limitations on schedule density. These parameters act as a structural safeguard, prioritizing quality of care over throughput volume.

| Parameter | Hard Limit | System Response upon Limit Breach |
| :--- | :--- | :--- |
| Maximum Daily Sessions | 4.5 sessions (4 full, 1 short/supervision) | Calendar slot lockout for the remainder of the day |
| Maximum Monthly Sessions | 90 sessions | Re-routing of new beneficiaries to available providers |
| Consecutive Session Interval | Minimum 15-minute buffer | Automatic scheduling gap enforcement |

These infrastructure limits are non-overridable by administrative staff. If a provider reaches the 90-session monthly threshold, the matching algorithm automatically depreciates their visibility in the beneficiary search interface, redirecting traffic to certified professionals with available capacity quotas.

## 6.4. Automated Tax Agent and Financial Compliance Module

The provider cabinet incorporates an automated tax engine designed to minimize administrative overhead for private practitioners (FOP Group 3). This module integrates directly with partner banking APIs to calculate, reserve, and remit taxes in real-time upon the receipt of each smart contract tranche.

| Taxation Parameter | Default Policy | Optimized Tax Relief Policy | Activation Condition |
| :--- | :--- | :--- | :--- |
| Single Tax Rate | 5.00% of gross revenue | 0.00% of gross revenue | >50.00% of cases concluding with confirmed PCL-5/PHQ-9 recovery |
| Document Flow | Manual reporting | Fully automated API transmission | Active integration with banking partner |

The tax relief optimization acts as a financial incentive for clinical excellence. By legally eliminating the 5% single tax burden for high-performing providers, the system aligns private economic interests with state public health objectives.

---

# РОЗДІЛ 6: ДОКУМЕНТ ТЕХНІЧНИХ ВИМОГ (TRD)

Цей документ об'єднує вичерпні технічні специфікації, інфраструктурні обмеження та операційні настанови, що керують платформою FEEL Again. Він окреслює архітектурні рішення, необхідні для поєднання глобальних стандартів гуманітарних даних із національною цифровою інфраструктурою України, з особливим акцентом на суверенітет даних, балансування навантаження та криптографічну безпеку.

## 6.1. Системна архітектура та інтеграційне проміжне програмне забезпечення (Middleware)

Базова архітектура функціонує як суверенний валідатор на основі доказів з нульовим розголошенням (ZKP) та блокчейну, виступаючи проміжним шаром між глобальними системами гуманітарного моніторингу (KoboToolbox, ActivityInfo) та національним реєстром охорони здоров'я України (ЕСОЗ/eHealth). Пряма інтеграція в ЕСОЗ суворо заборонена державними стандартами комплексної системи захисту інформації (КСЗІ). Як наслідок, платформа використовує методологію шлюзу «Цифрова шина». Цей підхід дозволяє здійснювати асинхронну передачу даних, запобігаючи перевантаженню державних реєстрів під час пікових навантажень, та гарантує, що всі клінічні результати (PCL-5, PHQ-9) надійно хешуються та можуть бути верифіковані без розкриття чутливої персональної медичної інформації (PHI) неавторизованим вузлам. Архітектура проміжного ПЗ надає пріоритет відмовостійкості, розгортаючи технологію децентралізованого реєстру для підтримки незмінного аудиторського сліду всіх фінансових виплат, прив'язаних до клінічних контрольних точок.

## 6.2. Смарт-кліринг та специфікації ескроу Трембіта/ПФУ

Фінансова маршрутизація всередині системи нерозривно пов'язана з підтвердженими клінічними та економічними результатами, що виконуються через смарт-контракти. Модуль Ескроу керує умовним вивільненням коштів на основі синхронізації даних у реальному часі з Пенсійним фондом України (ПФУ) через національну систему інтероперабельності «Трембіта».

| Етап вивільнення Ескроу | Умова тригера | Механізм верифікації | Фінансова дія |
| :--- | :--- | :--- | :--- |
| Початкове блокування | Завершення первинної діагностики | Електронний підпис провайдера (Дія.Підпис) | 100% вартості лікування блокується на Ескроу Донора |
| Перший транш | Проведення першої сесії | Системний лог відео/аудіо з'єднання | 20% переказується на рахунок Провайдера |
| Другий транш | П'ята сесія (Middle Checkpoint) | Позитивна дельта PCL-5 зафіксована у шлюзі ЕСОЗ | 30% переказується на рахунок Провайдера |
| Фінальний транш | Завершення курсу та працевлаштування | API-запит через Трембіту до ПФУ з підтвердженням сплати ЄСВ за 6 місяців | 50% переказується на рахунок Провайдера |

Система передбачає, що у разі неможливості отримання підтвердження сплати ЄСВ (Єдиного соціального внеску) від ПФУ, фінальний транш залишається заблокованим. Це забезпечує виконання макроекономічного мандату програми, прямо пов'язуючи терапевтичний успіх з економічною формалізацією.

## 6.3. Балансування навантаження та параметри запобігання вигоранню (Anti-Burnout)

Для підтримки найвищих стандартів клінічної ефективності та пом'якшення системного ризику професійного вигорання провайдерів, платформа застосовує жорстко закодовані інфраструктурні обмеження щодо щільності розкладу. Ці параметри діють як структурний запобіжник, надаючи пріоритет якості допомоги над обсягом пропускної здатності.

| Параметр | Жорсткий ліміт | Реакція системи при перевищенні ліміту |
| :--- | :--- | :--- |
| Максимальна кількість сесій на добу | 4.5 сесії (4 повні, 1 скорочена/супервізія) | Блокування слотів календаря до кінця дня |
| Максимальна кількість сесій на місяць | 90 сесій | Перенаправлення нових бенефіціарів до доступних провайдерів |
| Інтервал між послідовними сесіями | Мінімум 15-хвилинний буфер | Автоматичне забезпечення вікна у розкладі |

Ці інфраструктурні ліміти не можуть бути скасовані адміністративним персоналом. Якщо провайдер досягає місячного порогу у 90 сесій, алгоритм підбору автоматично знижує його видимість в інтерфейсі пошуку для бенефіціарів, перенаправляючи трафік до сертифікованих спеціалістів, які мають вільні квоти.

## 6.4. Автоматизований податковий агент та модуль фінансового комплаєнсу

Кабінет провайдера включає автоматизований податковий рушій, розроблений для мінімізації адміністративного навантаження на приватних практиків (ФОП 3-ї групи). Цей модуль інтегрується безпосередньо з API банків-партнерів для розрахунку, резервування та перерахування податків у реальному часі при отриманні кожного траншу за смарт-контрактом.

| Параметр оподаткування | Стандартна політика | Політика оптимізованої податкової пільги (Tax Relief) | Умова активації |
| :--- | :--- | :--- | :--- |
| Ставка Єдиного податку | 5.00% від валового доходу | 0.00% від валового доходу | >50.00% випадків завершено з підтвердженим одужанням (PCL-5/PHQ-9) |
| Документообіг | Ручне звітування | Повністю автоматизована передача через API | Активна інтеграція з банком-партнером |

Податкова пільга діє як фінансовий стимул для клінічної досконалості. Легально усуваючи 5% єдиного податку для високорезультативних провайдерів, система узгоджує приватні економічні інтереси з цілями державного сектору охорони здоров'я.
