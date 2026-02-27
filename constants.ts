

import { Dictionary, Language, DocumentId } from './types';

// Updated Logos to keys for SVG rendering
const LOGOS = {
  feelAgain: "feelAgain",
  enkidu: "solana",
  quorum: "solana",
  shevchenko: "shevchenko",
  openSociety: "open_society",
  usc: "usc",
  geha: "geha",
  kse: "shevchenko" // Using placeholder for now or mapping to shevchenko
};

// Updated to 4 Operational Stacks (Coordination is the Umbrella)
const CONSORTIUM_ROLES_EN = [
  { 
    org: "COORDINATION", 
    partners: [
      { name: "Open Society Foundation (Ukraine)", website: "https://osf.org.ua/en", logo: LOGOS.openSociety }
    ],
    desc: "Open Society Foundation (Ukraine) specializes in policy analysis, public finance monitoring, and anti-corruption initiatives. In the FeeL Again program, OSF ensures strategic coordination, financial transparency, and alignment with international standards." 
  },
  { 
    org: "CLINICAL STACK", 
    partners: [
      { name: "GEHA (Israel)", website: "https://geha.clalit.co.il", logo: LOGOS.geha },
      { name: "USC ICT (USA)", website: "https://ict.usc.edu", logo: LOGOS.usc }
    ],
    desc: "Geha Mental Health Center (Israel) provides clinical expertise and supervision. USC ICT (USA) provides world-leading VR exposure therapy methodologies for PTSD treatment." 
  },
  { 
    org: "FINTECH STACK", 
    partners: [
      { name: "Quorum (HighCastle)", website: "https://highcastle.co", logo: LOGOS.quorum },
      { name: "Enkidu P2P", website: "https://enkidu.io", logo: LOGOS.enkidu }
    ],
    desc: "Quorum (HighCastle) provides the DLT platform for transparent asset management. Enkidu P2P enables direct, peer-to-peer payment rails bypassing intermediaries." 
  },
  { 
    org: "ANALYTICS STACK", 
    partners: [
      { name: "Shevchenko University", website: "https://knu.ua/en", logo: LOGOS.shevchenko },
      { name: "Oxford & Groningen (negotiations)" }
    ],
    desc: "Academic partners providing data analysis, impact assessment, and economic modeling of mental health on national GDP." 
  },
];

const CONSORTIUM_ROLES_UA = [
  { 
    org: "КООРДИНАЦІЯ", 
    partners: [
      { name: "Фундація Відкрите Суспільство (Україна)", website: "https://osf.org.ua/en", logo: LOGOS.openSociety }
    ],
    desc: "Фундація Відкрите Суспільство (Україна) спеціалізується на аналізі політики, моніторингу публічних фінансів та антикорупційних ініціативах. У програмі FeeL Again OSF забезпечує стратегічну координацію, фінансову прозорість та відповідність міжнародним стандартам." 
  },
  { 
    org: "КЛІНІЧНИЙ СТЕК", 
    partners: [
      { name: "GEHA (Ізраїль)", website: "https://geha.clalit.co.il", logo: LOGOS.geha },
      { name: "USC ICT (США)", website: "https://ict.usc.edu", logo: LOGOS.usc }
    ],
    desc: "Психіатричний центр Geha (Ізраїль) надає клінічну експертизу та супервізію. USC ICT (США) надає провідні світові методології VR-експозиційної терапії для лікування ПТСР." 
  },
  { 
    org: "ФІНТЕХ СТЕК", 
    partners: [
      { name: "Quorum (HighCastle)", website: "https://highcastle.co", logo: LOGOS.quorum },
      { name: "Enkidu P2P", website: "https://enkidu.io", logo: LOGOS.enkidu }
    ],
    desc: "Quorum (HighCastle) надає платформу DLT для прозорого управління активами. Enkidu P2P забезпечує прямі платіжні канали P2P, минаючи посередників." 
  },
  { 
    org: "АНАЛІТИЧНИЙ СТЕК", 
    partners: [
      { name: "Університет Шевченка", website: "https://knu.ua/en", logo: LOGOS.shevchenko },
      { name: "Оксфорд та Гренінген (перемовини)" }
    ],
    desc: "Академічні партнери, що забезпечують аналіз даних, оцінку впливу та економічне моделювання ментального здоров'я на національний ВВП." 
  },
];

const PROGRAM_DESCRIPTION_UA = "FeeL Again — це програма яка використовує цифрову інфраструктуру, яка спрямовує та спрощує відносини між учасниками гуманітарного ланцюгу, відстежує кожний сеанс, підтримує придержання стандартів та протоколів надання послуг, відстжує кожну трансакцію та забезпечує звороній звязок від бенефіціара до донора - AAP/ Це перехід від 'гуманітарного туризму' до важкого індустріального підходу: повна прозорість виплат, клінічна верифікація кадрів та захист даних у державному контурі.";

const PROGRAM_DESCRIPTION_EN = "FeeL Again is a program that utilizes digital infrastructure to direct and simplify relationships between humanitarian chain participants, tracking every session, supporting adherence to service standards and protocols, tracking every transaction, and providing feedback from beneficiary to donor - AAP. This is a transition from 'humanitarian tourism' to a heavy industrial approach: full payment transparency, clinical verification of personnel, and data protection within the state circuit.";

export const CONTENT: Dictionary = {
  [Language.EN]: {
    appNav: {
      cta: "Join Consortium",
      schemaLabel: "Visual Strategy",
      reportLabel: "Deep Dive",
      nextDoc: "Next Section",
      prevDoc: "Prev Section",
      backToSchema: "Back to Map",
      startTour: "Start Exploration",
      readMore: "Analysis",
      viewOpportunity: "Opportunity",
      viewProblem: "Analysis",
      close: "Close",
      warRoom: "War Room",
      enterSpace: "View Solution",
      contact: "Contact HQ"
    },
    hero: {
      title: "DIGITAL INFRASTRUCTURE. CLINICAL PRECISION. FINANCIAL TRANSPARENCY.",
      subtitle: "Restoring Mental Well-being — Rebuilding the Country",
      footer: "Aligning with Grand Bargain & National GDP Recovery"
    },
    bottleneck: {
      label: "STRUCTURAL BOTTLENECK",
      title: "THE MISSING MIDDLE TIER",
      body: "The current system lacks a middle tier of psychologists to receive patients from primary care (family doctors) before they require psychiatric hospitalization.",
      subbody: "Forcing these informal practitioners into traditional licensing will drive them further into the shadows due to reporting and tax burdens.",
      primaryCare: {
        title: "Primary Care",
        subtitle: "Family Doctors",
        tag: "Overwhelmed"
      },
      solution: {
        title: "Digital Infrastructure (The Solution)",
        tag: "TRUSTED LAYER",
        items: ["Private Practitioners", "Retrained Specialists", "Humanitarian Responders", "API-Integrated Clinics"]
      },
      psychiatric: {
        title: "Psychiatric Care",
        subtitle: "Hospitals & Institutions",
        tag: "Last Resort"
      }
    },
    warRoom: {
      title: "Consortium Structure",
      subtitle: "Open Architecture with Best Partners",
      matrixTitle: "Strategic Deployment Matrix",
      scoring: {
        title: "",
        subtitle: "",
        description: "",
        excellent: "Excellent",
        techReady: "Technical Readiness",
        govAlign: "Government Alignment",
        scalability: "Scalability"
      },
      goals: [
        { label: "Gap", sublabel: "Untreated (IDPs)" },
        { label: "Certificates", sublabel: "mhGAP (Only 42 practicing with supervision)" },
        { label: "Inefficiency", sublabel: "Budget in hospitals (Need: 71% outpatient)" },
        { label: "Clinical Need", sublabel: "3.9M Ukrainians need care (Lancet 2023)" }
      ],
      mindMap: {
        title: "What will change with FeeL Again",
        hint: "Click on nodes to see impact",
        nodes: {
          vision: {
            title: "Vision",
            desc: "New soft power - creating a blueprint for the future of aid: a transparent, efficient, digital model that can be exported to other post-conflict zones, projecting soft power through technological excellence.",
            impact: "Strategic Export"
          },
          speed: {
            title: "Speed",
            desc: "Smart Contract Co-financing: 40% NHSU / 40% Donor / 20% Local. P2P Payment Rails bypassing bureaucracy.",
            impact: "Instant Aid"
          },
          cost: {
            title: "Cost",
            desc: "40% reduction in administrative overhead.",
            impact: "Efficiency"
          },
          quality: {
            title: "Quality",
            desc: "Clinical verification of every session.",
            impact: "Precision"
          },
          trust: {
            title: "Trust",
            desc: "Multiplier: 1 Budget UAH attracts 3 External UAH. Ledger-verified transparency for donors.",
            impact: "Accountability"
          },
          dignity: {
            title: "Dignity",
            desc: "Private, secure access for every citizen.",
            impact: "Empowerment"
          },
          data: {
            title: "Data",
            desc: "eHealth Anchor: Medical data stays in FHIR, Fintech Bus only triggers payment.",
            impact: "Sovereignty"
          }
        }
      },
      consortiumRoles: CONSORTIUM_ROLES_EN,
      metrics: {
        title: "System Risk Analysis",
        forecasts: "", 
        population: {
          title: "Target Population Need",
          desc: "People need support (MOH estimates, growing to 15M)"
        },
        gap: {
          desc: "Risk: System resistance and digital divide (need for 'Trusted Persons')."
        },
        efficiency: {
          title: "Exit Strategy",
          traditional: "National Coverage",
          traditionalDesc: "Shift from 'maintaining walls' (bed-places) to 'money follows beneficiary'. Real de-institutionalization."
        },
        talent: {
          title: "Private practice in the shadows"
        },
        stats: [
           { value: "1.3", label: "Psychologists per 100k", sublabel: "EU — 2.7 (WHO Atlas 2020)" },
           { value: "62,400,000", label: "Hours/Sessions", sublabel: "(16 sessions — WHO average 12-20 sessions)" }
        ]
      },
      governance: {
        title: "Integration Stack (Whole Governance)",
        body: "FEEL Again stands at the intersection of four pillars: humanitarian, technological (fintech), sustainable development, and clinical — this intersection is based on the principles of Whole Governance. There is no competitive landscape, there is an integration composition of partners, where FEEL Again is a program at the intersection of their interests.",
        fragmentation: "Fragmentation",
        fragmentationDesc: "Funds outside eHealth (Parallel flows)",
        feelAgain: "FEEL Again",
        feelAgainDesc: "Integration & Clinical Address"
      },
      request: {
        title: "WHAT IS NEEDED FOR PROGRAM START",
        subtitle: "Impact before resources",
        impactTitle: "Negotiations & Alignment",
        fundingTitle: "Asset-Based Funding",
        items: [
          { title: "National Bank - EBRD", subtitle: "National Bank joining the Charter on Financial Inclusion and Reintegration of Veterans to use the program as a digital infrastructure for the implementation of the Charter. Negotiations on national program and Charter expansion using MHPSS infrastructure. Include MHPSS as mandatory in infrastructure loans." },
          { title: "Ministry of Health", subtitle: "Negotiations on using infrastructure for MHPSS." },
          { title: "Ministry of Economy, Environment and Agriculture", subtitle: "Negotiations on GDP impact calculation and regional implementation project with MOE." },
          { title: "Cabinet of Ministers", subtitle: "Negotiations with Coordination Council. Decree on 'project implementation of digital vouchers' (Regulatory Sandbox)." },
          { title: "Grand Bargain IASC", subtitle: "Negotiations on national project." },
          { title: "US DoD", subtitle: "Negotiations on VR Tech Transfer - funding 'VR Ukraine' world. Transfer 'Bravemind' protocols (Skip Rizzo USC ICT)." }
        ],
        funding: {
          investment: "Investment",
          source: "Source",
          sourceVal: "Partners (Private, Public, Non-profit)",
          mechanism: "Return Mechanism",
          mechanismVal: "Transaction Fee (7 - 3%)",
          costToState: "Cost to State",
          stateAsset: "Current Consortium Investment",
          license: "Customization",
          licenseDesc: "Funding for interface customization under specific requirements."
        }
      },
      globalVision: {
         title: "Global Vision: Soft Power",
         subtitle: "Export Model",
         body: "This is a strategic contribution to the future of aid — a transparent, efficient, digital model that can be exported to other post-conflict zones, projecting soft power through technological excellence."
      },
      contacts: {
        title: "Contacts",
        share: "Share"
      },
      items: [] 
    },
    charts: {
      shadowVsCluster: "The Funnel of Failure: 117k Trained vs 1k Active",
      fundingGap: "Budget Mismatch: 89% Inpatient vs 70% Outpatient Need",
      techStack: "Infrastructure Efficiency",
      adminCost: "Operational Friction vs Digital Efficiency",
      donorDashboard: "Live Humanitarian Control Center",
      derisking: "SaaS Model: Transaction Fee Recovery",
      globalLocal: "The Digital Bridge: Connecting Banks A & B",
      dashboard_transparency: "FeeL Again Middleware: Real-time Compliance Reporting",
      dashboard_monitoring: "FeeL Again Middleware: AI Fraud Detection & Control",
      dashboard_funding: "FeeL Again Middleware: Program & Campaign Management",
      gapChart: "Treatment Gap: 74% Untreated"
    },
    docs: {
      [DocumentId.RESEARCH]: {
        navTitle: "CHALLENGE",
        schema: {
          title: "CHALLENGE: The 74% Treatment Gap",
          subtitle: "Why Current Aid Models Fail to Scale",
          centerNode: {
            title: "Digital Bridge",
            subtitle: "Humanitarian Fintech",
            description: "FEEL Again stands at the intersection of four pillars: humanitarian, technological (fintech), sustainable development, and clinical — this intersection is based on the principles of Whole Governance.",
            targetPage: 5,
            features: [
              { title: "SaaS for Gov", desc: "Transition from 'humanitarian tourism'." },
              { title: "Transparency", desc: "Ledger-verified payments." },
              { title: "Sovereignty", desc: "Data protection in the state circuit." }
            ]
          },
          nodes: [
            {
              id: "gap",
              title: "The Paradox",
              highlight: "117k vs 1k",
              icon: "Users",
              targetPage: 1, 
              points: ["117,000 Certificates Issued", "Only 1,000 Clinics Active", "Efficiency < 1.5%"]
            },
            {
              id: "scale",
              title: "The Gap",
              highlight: "74% Without Treatment",
              icon: "Activity",
              targetPage: 2, 
              points: ["9.6M Population at Risk", "1.3 Psychologists per 100k", "Critical Shortage"]
            },
            {
              id: "cost",
              title: "Budget Wall",
              highlight: "Inpatient Spend",
              icon: "TrendingDown",
              targetPage: 3, 
              points: ["89% Budget to Inpatient", "70% Need Outpatient", "Allocative Inefficiency"]
            },
            {
              id: "integrity",
              title: "Data Void",
              highlight: "Fragmentation",
              icon: "EyeOff",
              targetPage: 4, 
              points: ["$177M Health Cluster Budget", "Zero Outcomes Data", "Process over Result"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "The Funnel of Failure: 117k Trained vs 1k Active",
              subtitle: "The Paradox of Certification without Activation.",
              body: "While <b>117,000 certificates</b> have been issued for mental health training, only <b>1,000 clinics</b> are actively providing services within the state system. This represents an efficiency of less than 1.5%. <br/><br/>The current model focuses on training (input) rather than service delivery (output). We are creating a 'trained' workforce that remains inactive or invisible to the state monitoring system.",
              bullets: ["117,000 Certificates Issued.", "1,000 Active Clinics.", "Efficiency < 1.5%."],
              chartId: "shadowVsCluster"
            },
            {
              id: 2,
              title: "The 74% Treatment Gap",
              subtitle: "The System Cannot Absorb the Demand.",
              body: "<b>9.6 Million people</b> are estimated to have mental health conditions (22% of population). The current system covers only a fraction. <br/><br/>We have <b>1.3 psychologists per 100k population</b> in the official sector. The EU average is 2.7, and WHO recommends 5x increase. The state system is physically incapable of scaling to meet this demand without the private sector.",
              bullets: ["9.6M People at Risk.", "74% Treatment Gap.", "1.3 Specialists per 100k."],
              chartId: "gapChart"
            },
            {
              id: 3,
              title: "Paradox: Walls vs. Patients",
              subtitle: "Allocative Inefficiency of the Budget.",
              body: "<b>89% of the state mental health budget</b> is spent on inpatient care (maintaining beds and buildings). Yet, <b>70% of patients</b> require outpatient care.<br/><br/>Money is following the infrastructure, not the patient. This blocks the development of mobile teams and community centers. We are funding walls while patients are left outside.",
              bullets: ["89% Inpatient Spend.", "70% Outpatient Need.", "Structural Mismatch."],
              chartId: "fundingGap"
            },
            {
              id: 4,
              title: "Fragmentation: ~$300,000,000",
              subtitle: "",
              body: "In total for 2025-26, UNICEF MHPSS raised ~$75,000,000, USAID $15,000,000, and the Health Cluster $177M (122% of ask). However, MHPSS funding is 'integrated' and often not tracked to the outcome (completion of rehabilitation, return to the economy, impact on GDP). <br/><br/><b>Key Takeaway:</b> With over $300,000,000 in humanitarian funding flowing into the sector, the lack of traceability creates a massive efficiency gap. Without a digital bridge to verify results, the investment remains a process rather than a solution for national human capital recovery.",
              bullets: ["$300,000,000 Humanitarian Funding.", "No Outcome Metrics.", "Traceability Gap."]
            },
            {
              id: 5,
              title: "SOLUTION: DIGITAL BRIDGE",
              subtitle: "From Humanitarian Aid to Sovereign Infrastructure. From global actors to local. From donors to service providers and beneficiaries.",
              body: PROGRAM_DESCRIPTION_EN,
              bullets: ["Digital Bridge: Humanitarian Fintech.", "Transparency & Feedback.", "Industrial Approach."]
            }
          ]
        }
      },
      [DocumentId.INFRASTRUCTURE]: {
        navTitle: "The Mechanism",
        schema: {
          title: "The Solution: SaaS License & Data Sovereignty",
          subtitle: "Integrating the 'Invisible' Private Sector",
          centerNode: { 
            title: "SaaS Model", 
            subtitle: "SOLUTION REVIEWED",
            description: "We do not sell code. We provide a 'Managed Service' under state license. The state gets the capability without the CAPEX risk.",
            targetPage: 5, // Solution Page is Last (Now Page 5)
            features: [
              { title: "Governance", desc: "State holds the 'Golden Share'." },
              { title: "Privacy", desc: "Raw data stays in Ukraine." },
              { title: "Export", desc: "Partners monetize via global export." }
            ]
          },
          nodes: [
            {
              id: "tech",
              title: "Smart Contracts",
              highlight: "Zero Fraud",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["Direct Donor-to-Doc payments", "Algorithm verifies delivery", "Audit trail"]
            },
            {
              id: "compliance",
              title: "Legalization",
              highlight: "Exit from Shadow",
              icon: "User",
              targetPage: 2,
              points: ["Bringing 8k specialists out of shadow", "Simplified licensing", "eHealth Integration"]
            },
            {
              id: "capability",
              title: "Interoperability",
              highlight: "eHealth API",
              icon: "Cpu",
              targetPage: 3,
              points: ["Private Front-end", "State Back-end", "Unified Registry"]
            },
            {
              id: "business",
              title: "Business Model",
              highlight: "SOLUTION REVIEWED",
              icon: "Briefcase",
              targetPage: 4,
              points: ["OPEX over CAPEX", "SLA & Outsourcing", "Free Upgrades"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Ledger as 'Anti-Corruption'",
              subtitle: "Direct Payments: Donor -> Psychologist.",
              body: "We implement <b>Smart Contracts</b> that simplify relationships and enable co-financing from various sources. Total savings can reach 30-50% by avoiding duplication, reducing administrative time, and localizing responsibility and costs.",
              bullets: ["Zero Intermediaries.", "30-50% Cost Saving.", "Validation by Algorithm."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 2,
              title: "Legalizing the Shadow Army",
              subtitle: "Bringing 8,000 Private Specialists Online.",
              body: "The private sector is huge but invisible (approx 8,000 specialists). By offering a <b>Digital Corridor</b> (simplified licensing + exit from shadow conditions), we have a chance to bring them into the legal field by leveraging trust as an independent non-state infrastructure that provides specialists with access to humanitarian budgets and a flow of beneficiaries along with a CRM system.",
              bullets: ["8,000 Specialists.", "Exit from Shadow.", "Legal Integration."]
            },
            {
              id: 3,
              title: "Interoperability: The Middleware",
              subtitle: "Private Interface, Public Registry.",
              body: "The program can work as a 'Partner Module' to eHealth via the Helsi API. It provides a convenient, modern interface for the psychologist (like Uber), but automatically pushes critical medical data to the Central Database (eHealth). The State maintains the 'Source of Truth'.",
              bullets: ["Convenient UI.", "eHealth Sync.", "Unified Statistics."]
            },
            {
              id: 4,
              title: "SOLUTION REVIEWED",
              subtitle: "State buys service, not servers.",
              body: "SaaS License, where the state pays for access and SLA (Service Level Agreement), is effectively an outsourcing of a whole set of functions, and most importantly, trust, which is usually lacking in state licensing measures, security support, etc. - the service will always be available to Ukrainians.",
              bullets: ["OPEX over CAPEX.", "Free Upgrades for Ukraine."],
              chartId: "dashboard_funding"
            },
            {
              id: 5,
              title: "SOLUTION REVIEWED",
              subtitle: "Managed transparent service with public and state control.",
              body: "The program does not sell code or servers; it provides a 'Managed Service' with a state license for access. The state gains capability without CAPEX risk, holding a 'Golden Share' that ensures data sovereignty and management rights. No 'pig in a poke' - licensing happens when it's clear everything works as it should.",
              bullets: ["State Governance.", "Data Sovereignty.", "No CAPEX Risk."]
            }
          ]
        }
      },
      [DocumentId.SOLUTION]: {
        navTitle: "Deployment",
        schema: {
          title: "PROGRAM DEPLOYMENT 2026-27+",
          subtitle: "Leveraging G7 Patronage for Systemic Reform",
          centerNode: {
            title: "Win-Win",
            subtitle: "Global Case Study",
            description: "Ukraine becomes the 'Validation Ground' for the world's first ledger MHPSS ecosystem. Partners get a 'Unicorn' case; Ukraine gets a reform.",
            targetPage: 5,
            features: [
              { title: "Influence", desc: "Using Embassies to push for reform." },
              { title: "ROI", desc: "Transaction fees cover the investment." },
              { title: "Exit", desc: "State license or buyout option." }
            ]
          },
          nodes: [
            {
              id: "blended",
              title: "2026: Launch",
              highlight: "Launch",
              icon: "Zap",
              targetPage: 1,
              points: ["Grand Bargain 25%", "KNU Center of Excellence", "DoD VR Transfer"]
            },
            {
              id: "risk",
              title: "2027: Outreach",
              highlight: "Outreach",
              icon: "Shield",
              targetPage: 2,
              points: ["Military Bridge", "24 Regions", "Blended Finance"]
            },
            {
              id: "direct",
              title: "2027+: Coverage",
              highlight: "Coverage",
              icon: "Globe",
              targetPage: 3,
              points: ["State Licensing"]
            },
            {
              id: "partnership",
              title: "Global",
              highlight: "Global",
              icon: "Handshake",
              targetPage: 4,
              points: ["Regulatory Sandbox", "Market Access", "Global Validation"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "2026: Launch",
              subtitle: "Leveraging humanitarian resources for sustainable sectoral development.",
              body: "1. National Bank joining the Charter on Financial Inclusion and Reintegration of Veterans to use the program as a digital infrastructure for the implementation of the Charter. <br/>2. Recruitment of projects with international actors and donors (leveraging Grand Bargain IASC 25% localization). <br/>3. Establishment of a Center of Excellence at Shevchenko University, for creating a national model of the impact of mental wellbeing on GDP. <br/>4. Transfer of VR technologies from USC ICT Skip Rizzo (US Department of Defense) for Ukrainian soldiers.",
              bullets: ["Grand Bargain IASC Compliance.", "KNU Center of Excellence.", "DoD VR Transfer."],
              chartId: "derisking"
            },
            {
              id: 2,
              title: "2027: Outreach",
              subtitle: "Joint projects with Ministry of Defense and Ministry of Regional Development",
              body: "1. Building a bridge for veterans transitioning from military hospitals to civilian psychologists using proven VR methodologies. <br/>2. Deployment of Mental Wellbeing competitions and GDP impact assessment in 24 regions. <br/><br/>Blended financing with communities (OTG) and regional budgets, corporate philanthropy, and de-risked co-financing from donors.",
              bullets: ["Bridge for Veterans"],
            },
            {
              id: 3,
              title: "2027+: Coverage",
              subtitle: "National Sovereignty",
              body: "Feel again creates a 'Regulatory Sandbox' for legalizing activities and provides a stream of patients/clients/beneficiaries. Given successful interaction with national operators and programs, hospitals and rehabilitation centers, private practice, and humanitarian response, the Program becomes a tool for ensuring National Sovereignty. The State activates a License and ensures National Sovereignty.",
              bullets: ["State Licensing."]
            },
            {
              id: 4,
              title: "Global Case Study",
              subtitle: "Forged in war, grown amidst corruption, will work everywhere.",
              body: "By engaging participants on the principle of Whole Governance, the Program creates an example of humanitarian response harmonized with state governance requirements in accordance with national needs, reaching Grand Bargain and Humanitarian Reset standards. Such an achievement should reach countries suffering from armed aggression, preparing for it, or overcoming its consequences.",
              bullets: ["Regulatory Support.", "Market Access.", "Global Validation."]
            },
            {
              id: 5,
              title: "WIN WIN",
              subtitle: "Ukraine as the Validation Ground.",
              body: "Ukraine receives an integrated mental health system without CAPEX and a developed formalized private practice. Donors get budget optimization and quality control of services, along with the ability to multiply the effect in other aid modalities. Beneficiaries receive timely and controlled quality care.",
              bullets: ["Global Validation.", "Unicorn Case.", "Embassy Support."]
            }
          ]
        }
      },
      [DocumentId.RESULTS]: {
        navTitle: "Expected Results",
        schema: {
          title: "Results & Impact: Evidence-Based Investment",
          subtitle: "Measuring Minds Restored, Not Just Sessions Delivered",
          centerNode: { 
            title: "Impact", 
            subtitle: "Human Capital",
            description: "Moving from 'sessions delivered' to 'minds restored'. We provide the data to prove that investment in mental health yields economic returns.",
            targetPage: 5,
            features: [
              { title: "Grand Bargain IASC", desc: "Goal: 70% localization." },
              { title: "GDP Impact", desc: "Safeguarding $8-28B." },
              { title: "Traceability", desc: "100% Transparency." }
            ]
          },
          nodes: [
            {
              id: "budget",
              title: "EFFICIENCY",
              highlight: "20-30%",
              icon: "Zap",
              targetPage: 1,
              points: ["Reduction in admin costs", "Efficiency gain via Coordination", "More funds for beneficiaries"]
            },
            {
              id: "local",
              title: "Grand Bargain IASC",
              highlight: "Responsibility",
              icon: "Globe",
              targetPage: 2,
              points: ["Meeting the 25% Localization goal", "Empowering local providers", "Sustainable ecosystem"]
            },
            {
              id: "scale",
              title: "STRATEGY",
              highlight: "Scalability",
              icon: "Layers",
              targetPage: 3,
              points: ["Model ready for extrapolation", "New modalities and territories", "Digital Transformation of Aid"]
            },
            {
              id: "analytics",
              title: "SUSTAINABILITY",
              highlight: "Development",
              icon: "BarChart3",
              targetPage: 4,
              points: ["KNU Shevchenko", "Ministry of Economy (pending)", "Evidence-Based Policy"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "OPERATIONAL EFFICIENCY",
              subtitle: "FeeL Again Digital Bridge",
              body: "Try to calculate the change in standard indicators of humanitarian activity: 20% duplication, 30% admin costs, acceleration of response to days, optimization of accounting to hours, payments to minutes. This is not a cosmetic staff reduction; it is a real Humanitarian Reset.",
              bullets: ["Reducing Friction.", "Recovering Value.", "Direct Delivery."]
            },
            {
              id: 2,
              title: "HUMANITARIAN GOAL: LOCALIZATION",
              subtitle: "Achieving the 25% Grand Bargain IASC Goal",
              body: "FeeL Again aims for 70% localization, thanks to direct payments to service providers. Digital infrastructure is a tool that achieves digital impartial compliance, allowing donors and patrons to safely fund thousands of small local actors - service providers, alongside large local operators.",
              bullets: ["70% Localization Goal.", "Empowering Local Actors.", "Systemic Solution."]
            },
            {
              id: 3,
              title: "STRATEGIC SCALABILITY",
              subtitle: "A Model for the World.",
              body: "This architecture is modular. Once proven in the MHPSS sector in Ukraine, it can be adapted for physical rehabilitation, housing reconstruction, or education—in Ukraine or any other conflict zone.",
              bullets: ["Modular Architecture.", "Cross-Sector Application.", "Global Relevance."]
            },
             {
               id: 4,
               title: "Sustainable Development Stack",
               subtitle: "Data Partners & Analytics.",
               body: "The analytics stack is built on the partnership between Shevchenko University and international academic institutions (Oxford, Groningen). This ensures that the data collected is not just stored, but analyzed to provide evidence-based policy recommendations for the state. <br/><br/>1. EMDR & VR Bravemind methodologies that reduce the number of sessions, increase course completion rates, and reduce relapse rates. <br/>2. Identification of effective practices among Ukrainian practitioners who have gathered experience over the last 10 years of war. <br/>3. Creation of a set of open depersonalized data. <br/>4. Restoration of digital coordination of all participants in the humanitarian cycle. <br/>5. Picking up specialists trained by humanitarian actors to prevent market collapse, as happened before. <br/>6. Rebuilding digital direction and support for beneficiaries, service providers, and donors. <br/>7. Getting rid of human errors and preferences in aid distribution. <br/>8. SLA (Service Level Agreement) support for the state and exporting the Ukrainian standard.",
               bullets: ["KNU Shevchenko.", "EMDR & VR Methodologies.", "Evidence-Based Policy."]
            },
            {
              id: 5,
              title: "Economic Impact: British Methodology",
              subtitle: "Restoring mental wellbeing will rebuild the country.",
              body: "London School of Economics and Political Science - LSE / Centre for Mental Health, has developed a methodology that can be adapted for Ukraine. Mental disorders cost the UK economy ~£300 billion/year (5% direct impact on GDP). <br/><br/>Ukraine loses more than 5% in war conditions, due to the difference between a week's sick leave and the employment of the active part of the population in the war. Applying this model to Ukraine, we protect $8-28 billion annually. Every dollar invested in the Program prevents a loss of at least $4 in future productivity.",
              bullets: ["£300bn UK Benchmark.", "72% Productivity Loss.", "Protecting $8-28B."]
            },
          ]
        }
      }
    }
  },
  [Language.UA]: {
    appNav: {
      cta: "Приєднатися",
      schemaLabel: "Візуальна Стратегія",
      reportLabel: "Детальний Огляд",
      nextDoc: "Наступний Розділ",
      prevDoc: "Попередній Розділ",
      backToSchema: "До Мапи",
      startTour: "Почати Огляд",
      readMore: "Аналіз",
      viewOpportunity: "Можливість",
      viewProblem: "Аналіз",
      close: "Закрити",
      warRoom: "War Room",
      enterSpace: "Переглянути Рішення",
      contact: "Зв'язок"
    },
    hero: {
      title: "ЦИФРОВА ІНФРАСТРУКТУРА. КЛІНІЧНА ТОЧНІСТЬ. ФІНАНСОВА ПРОЗОРІСТЬ.",
      subtitle: "Відновлення Ментального Добробуту — Відбудова країни",
      footer: "Узгодження з Grand Bargain та Відновленням ВВП"
    },
    bottleneck: {
      label: "СТРУКТУРНЕ ВУЗЬКЕ МІСЦЕ",
      title: "ВІДСУТНЯ СЕРЕДНЯ ЛАНКА",
      body: "Поточній системі не вистачає середньої ланки психологів для прийому пацієнтів від первинної ланки (сімейних лікарів) до того, як їм знадобиться психіатрична госпіталізація.",
      subbody: "Примус цих неформальних практиків до традиційного ліцензування витіснить їх ще далі в тінь через тягар звітності та оподаткування.",
      primaryCare: {
        title: "Первинна допомога",
        subtitle: "Сімейні лікарі",
        tag: "Перевантажені"
      },
      solution: {
        title: "Цифрова інфраструктура (Рішення)",
        tag: "ДОВІРЕНИЙ ШАР",
        items: ["Приватні практики", "Перепідготовлені фахівці", "Гуманітарні реагувальники", "API-інтегровані клініки"]
      },
      psychiatric: {
        title: "Психіатрична допомога",
        subtitle: "Лікарні та установи",
        tag: "Остання інстанція"
      }
    },
    warRoom: {
      title: "Структура Консорціуму",
      subtitle: "Відкрита Архітектура з Найкращими Партнерами",
      matrixTitle: "Матриця Стратегічного Розгортання",
      scoring: {
        title: "",
        subtitle: "",
        description: "",
        excellent: "Відмінно",
        techReady: "Технічна Готовність",
        govAlign: "Узгодженість з Урядом",
        scalability: "Масштабованість"
      },
      goals: [
        { label: "Розрив", sublabel: "Неотримання допомоги (ВПО)" },
        { label: "Сертифікати", sublabel: "mhGAP (Лише 42 практикуючих з супервізією)" },
        { label: "Неефективність", sublabel: "Бюджету в стаціонарах (Потреба: 71% амбулаторно)" },
        { label: "Клінічна Потреба", sublabel: "3 900 000 українців потребують допомоги (Lancet 2023)" }
      ],
      mindMap: {
        title: "Що зміниться з програмою FeeL Again (Відчувай Знов)",
        hint: "Натисніть на вузли, щоб побачити вплив",
        nodes: {
          vision: {
            title: "Бачення",
            desc: "Нова м'яка сила - створюємо план для майбутнього допомоги — прозору, ефективну, цифрову модель, яку можна експортувати в інші постконфліктні зони, проектуючи м'яку силу через технологічну досконалість.",
            impact: "Стратегічний Експорт"
          },
          speed: {
            title: "Швидкість",
            desc: "P2P платіжні шляхи в обхід бюрократії.",
            impact: "Миттєва Допомога"
          },
          cost: {
            title: "Вартість",
            desc: "Зменшення адміністративних витрат на 40%.",
            impact: "Ефективність"
          },
          quality: {
            title: "Якість",
            desc: "Клінічна верифікація кожної сесії.",
            impact: "Точність"
          },
          trust: {
            title: "Довіра",
            desc: "Прозорість для донорів через леджер.",
            impact: "Підзвітність"
          },
          dignity: {
            title: "Гідність",
            desc: "Приватний, безпечний доступ для кожного громадянина.",
            impact: "Розширення Можливостей"
          },
          data: {
            title: "Дані",
            desc: "Результати в реальному часі для державного планування.",
            impact: "Суверенітет"
          }
        }
      },
      consortiumRoles: CONSORTIUM_ROLES_UA,
      metrics: {
        title: "Аналіз Ризиків Системи",
        forecasts: "", 
        population: {
          title: "Потреба Цільової Популяції",
          desc: "Людей потребують підтримки (Оцінки МОЗ, зростання до 15М)"
        },
        gap: {
          desc: "Розрив у лікуванні (ВПО, що не отримують допомогу)"
        },
        efficiency: {
          title: "Стратегія Виходу",
          traditional: "Національне покриття",
          traditionalDesc: "Цифрова інфраструктура обслуговує секторальних операторів, приватну практику та гуманітарні програми в MHPSS UA."
        },
        talent: {
          title: "Приватна практика в тіні"
        },
        stats: [
           { value: "1.3", label: "Психолога на 100k", sublabel: "ЄС — 2.7 (WHO Atlas 2020)" },
           { value: "62 400 000", label: "годин/сеансів", sublabel: "(16 сеансів — середнє WHO 12-20 сеансів)" }
        ]
      },
      governance: {
        title: "Інтеграційний Склад (Whole Governance)",
        body: "FEEL Again стоїть на перехресті чотирьох стовпів: гуманітарного, технологічного (фінтех), сталого розвитку та клінічного — це перехрестя базується на принципах Whole Governance. Немає конкурентного ландшафту, є інтеграційний склад партнерів, де FEEL Again — це програма на перехресті їхніх інтересів.",
        fragmentation: "Фрагментація",
        fragmentationDesc: "Коштів поза НЕСЗ (Паралельні потоки)",
        feelAgain: "FEEL Again",
        feelAgainDesc: "Інтеграція та Клінічний Адрес"
      },
      request: {
        title: "ЩО ПОТРІБНО НА СТАРТ ПРОГРАМИ",
        subtitle: "Вплив перед ресурсами",
        impactTitle: "Переговори та Узгодження",
        fundingTitle: "Фінансування та Активи",
        items: [
          { title: "Нацбанк - ЄБРР", subtitle: "Національний Банк доєднання до Хартію з фінансової інклюзії та реінтеграції ветеранів для використання програми в якості цифрової інфраструктури на виконання Хартії. Перемовини про нац. програму та розширення Хартії із застосуванням інфраструктури для MHPSS. Включити MHPSS як обов'язкову умову в кредити на інфраструктуру. 'Відбудова електростанцій вимагає відбудови людей'." },
          { title: "Міністерство Охорони Здоровя", subtitle: "Перемовини про використання інфраструктури для MHPSS." },
          { title: "Міністерство Економіки Довкілля і Сільского господарства", subtitle: "Перемовини про розрахунок показників впливу на ВВП та регіональний проект впровадження разом з МОН." },
          { title: "Кабінет Міністрів", subtitle: "Перемовини з координаційною радою КМУ. Постанова про 'проектне впровадження цифрових ваучерів' (Sandbox)." },
          { title: "Grand Bargain IASC", subtitle: "Перемовини про національний проект." },
          { title: "DoD США", subtitle: "Перемовини про Трансфер VR Технологій - фінансування 'ВР Україна'. Передача протоколів 'Bravemind' (Skip Rizzo USC ICT)." }
        ],
        funding: {
          investment: "Поточні Інвестиції консорціуму",
          source: "Джерело",
          sourceVal: "Партнери (Приватні, Громадські, Некомерційні)",
          mechanism: "Механізм Повернення",
          mechanismVal: "Транзакційна Комісія (7 - 3%)",
          costToState: "Вартість для Держави",
          stateAsset: "М'яке перед-стартове фінансування",
          license: "Кастомізація",
          licenseDesc: "Настроювання інтерфейсів під конкретні вимоги учасників та інтеграції з е-хелс, хелсі, та цифровими інформаційними гуманітарними системами."
        }
      },
      globalVision: {
         title: "Глобальне Бачення: Soft Power",
         subtitle: "Експорт Моделі",
         body: "Це стратегічний внесок у майбутнє допомоги — прозору, ефективну, цифрову модель, яку можна експортувати в інші постконфліктні зони, проєктуючи м'яку силу через технологічну досконалість."
      },
      contacts: {
        title: "Контакти",
        share: "Поділитися"
      },
      items: []
    },
    charts: {
      shadowVsCluster: "Воронка Невдачі: 117k Навчених vs 1k Активних",
      fundingGap: "Бюджетний Дисбаланс: 89% Стаціонар vs 70% Амбулаторна Потреба",
      techStack: "Ефективність Інфраструктури",
      adminCost: "Операційне Тертя vs Цифрова Ефективність",
      donorDashboard: "Живий Центр Управління Гуманітарною Допомогою",
      derisking: "SaaS Модель: Відшкодування Транзакційних Витрат",
      globalLocal: "Цифровий Міст: З'єднання Банків А та Б",
      dashboard_transparency: "FeeL Again Middleware: Звітність у реальному часі",
      dashboard_monitoring: "FeeL Again Middleware: AI Виявлення Шахрайства",
      dashboard_funding: "FeeL Again Middleware: Управління Програмами",
      gapChart: "Розрив у Лікуванні: 74% Без Допомоги"
    },
    docs: {
      [DocumentId.RESEARCH]: {
        navTitle: "ВИКЛИК",
        schema: {
          title: "ВИКЛИК: 74% Розрив у Лікуванні",
          subtitle: "Чому Поточні Моделі Допомоги не Масштабуються",
          centerNode: {
            title: "Цифровий Міст",
            subtitle: "Гуманітарний Фінтех",
            description: "FEEL Again стоїть на перехресті чотирьох стовпів: гуманітарного, технологічного (фінтех), сталого розвитку та клінічного — це перехрестя на принципах Whole Governance.",
            targetPage: 5,
            features: [
              { title: "SaaS для держави", desc: "Перехід від 'гуманітарного туризму'." },
              { title: "Прозорість", desc: "Верифікація виплат через леджер." },
              { title: "Суверенітет", desc: "Захист даних у державному контурі." }
            ]
          },
          nodes: [
            {
              id: "gap",
              title: "Парадокс",
              highlight: "117 тис vs 1 тис",
              icon: "Users",
              targetPage: 1,
              points: ["117,000 Виданих Сертифікатів", "Лише 1,000 Активних Закладів", "Ефективність < 1.5%"]
            },
            {
              id: "scale",
              title: "Розрив",
              highlight: "74% Без лікування",
              icon: "Activity",
              targetPage: 2,
              points: ["9.6M Населення в зоні ризику", "1.3 Психолога на 100k", "Критичний Дефіцит"]
            },
            {
              id: "cost",
              title: "Бюджетна Стіна",
              highlight: "89% Витрат на диспансери",
              icon: "TrendingDown",
              targetPage: 3,
              points: ["89% Бюджету на Стаціонар", "70% Потребують Амбулаторного", "Алокаційна Неефективність"]
            },
            {
              id: "integrity",
              title: "Вакуум Даних",
              highlight: "Фрагментація",
              icon: "EyeOff",
              targetPage: 4,
              points: ["$177M Бюджет Кластеру Здоров'я", "Нульові Дані про Результати", "Процес важливіший за Результат"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Воронка Провалу: 117 тис Навчених vs 1 тис Активних",
              subtitle: "Парадокс сертифікації без активації.",
              body: "Поточна модель зосереджена на процессних результиатах (outputs) а не на клінічних (outcomes) зниження симптомів, завершена реабілітація, чи економічних: повернення до соціального та економічного життя, вплив на ВВП вимірах результатів. Створюючі 'навчену' робочу силу, яка залишається неактивною або невидимою для державної системи моніторингу таких результатів сягнути неможливо.",
              bullets: ["117,000 Виданих Сертифікатів.", "1,000 Активних Закладів.", "Ефективність < 1.5%."],
              chartId: "shadowVsCluster"
            },
            {
              id: 2,
              title: "74% Розрив у Лікуванні",
              subtitle: "Система не може поглинути попит.",
              body: "<b>9.6 Мільйонів людей</b> за оцінками мають ментальні розлади (22% населення). Поточна система покриває лише частку. <br/><br/>Ми маємо <b>1.3 психолога на 100k населення</b> в офіційному секторі. Середній показник ЄС - 2.7, а ВООЗ рекомендує збільшення у 5 разів. Державна система фізично не здатна масштабуватися для задоволення цього попиту без приватного сектору.",
              bullets: ["9.6M Людей у Зоні Ризику.", "74% Розрив у Лікуванні.", "1.3 Спеціаліста на 100k."],
              chartId: "gapChart"
            },
            {
              id: 3,
              title: "Парадокс: Стіни проти Пацієнтів",
              subtitle: "Алокаційна Неефективність Бюджету.",
              body: "<b>89% державного бюджету на ментальне здоров'я</b> витрачається на стаціонарне лікування (утримання ліжок та будівель). Проте, <b>70% пацієнтів</b> потребують амбулаторної допомоги.<br/><br/>Гроші йдуть за інфраструктурою, а не за пацієнтом. Це блокує розвиток мобільних бригад та громадських центрів. Ми фінансуємо стіни, поки пацієнти залишаються зовні.",
              bullets: ["89% Витрат на Стаціонар.", "70% Потреба в Амбулаторному.", "Структурна Невідповідність."],
              chartId: "fundingGap"
            },
            {
              id: 4,
              title: "Фрагментація: приблизно $300,000,000",
              subtitle: "",
              body: "Сукупно на 2025 -26 р. залучено UNICEF MHPSS ~$75,000,000, USAID $15,000,000, Health Cluster $177M (122% від запиту). Однак, фінансування MHPSS є 'інтегрованим' і часто не відстежується до результату (завершення курсу реабілітації, повернення в економіку, вплив на ВВП). <br/><br/><b>Ключовий висновок:</b> З понад $300,000,000 гуманітарного фінансування, що надходить у сектор, відсутність відстежуваності створює величезний розрив в ефективності. Без цифрового мосту для верифікації результатів інвестиції залишаються процесом, а не рішенням для відновлення національного людського капіталу.",
              bullets: ["$300,000,000 фінансування гуманітарної діяльності.", "Відсутність Даних про Результати.", "Розрив відстежуваності."]
            },
            {
              id: 5,
              title: "РІШЕННЯ: ЦИФРОВИЙ МІСТ (Digital Bridge)",
              subtitle: "Від Гуманітарної Допомоги до Суверенної Інфраструктури. Від глобальних акторів до локальних. Від донорів до надавачів послуг та бенефіціарів.",
              body: PROGRAM_DESCRIPTION_UA,
              bullets: ["Цифровий Міст: Гуманітарний Фінтех.", "Прозорість та Зворотній зв'язок.", "Індустріальний підхід."]
            }
          ]
        }
      },
      [DocumentId.INFRASTRUCTURE]: {
        navTitle: "Механізм",
        schema: {
          title: "Рішення: SaaS Ліцензія та Суверенітет Даних",
          subtitle: "Інтеграція 'Невидимого' Приватного Сектору",
          centerNode: {
            title: "SaaS Модель",
            subtitle: "РІШЕННЯ ПЕРЕГЛЯНУТИ",
            description: "Ми не продаємо код. Ми надаємо 'Керований Сервіс' за державною ліцензією. Держава отримує спроможність без ризику CAPEX.",
            targetPage: 5,
            features: [
              { title: "Управління", desc: "Держава тримає 'Золоту Акцію'." },
              { title: "Приватність", desc: "Сирі дані залишаються в Україні." },
              { title: "Експорт", desc: "Партнери монетизують через глобальний експорт." }
            ]
          },
          nodes: [
            {
              id: "tech",
              title: "Смарт-контракти",
              highlight: "Нуль Шахрайства",
              icon: "ShieldCheck",
              targetPage: 1,
              points: ["Прямі виплати Донор-Лікар", "Алгоритм перевіряє надання", "Аудиторський слід"]
            },
            {
              id: "compliance",
              title: "Легалізація",
              highlight: "Умови виходу з тіні",
              icon: "User",
              targetPage: 2,
              points: ["Виведення 8k спеціалістів з тіні", "Спрощене ліцензування", "Інтеграція з eHealth"]
            },
            {
              id: "capability",
              title: "Інтероперабельність",
              highlight: "eHealth API",
              icon: "Cpu",
              targetPage: 3,
              points: ["Приватний Фронт-енд", "Державний Бек-енд", "Єдиний Реєстр"]
            },
            {
              id: "business",
              title: "Бізнес Модель",
              highlight: "РІШЕННЯ ПЕРЕГЛЯНУТИ",
              icon: "Briefcase",
              targetPage: 4,
              points: ["OPEX замість CAPEX", "SLA та Аутсорсинг", "Безкоштовні Оновлення"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "Леджер як 'Антикорупція'",
              subtitle: "Прямі Виплати: Донор -> Психолог.",
              body: "Ми впроваджуємо <b>Смарт-контракти</b>, які спрощують відносини та роблять можливим співфінансування з різних джерел. Загальна економія може сягати 30-50% рахунком уникнення дублювання, зниження адміністративних витрат часу, локалізації відповідальності та витрат.",
              bullets: ["Нуль Посередників.", "30-50% Економії Витрат.", "Валідація Алгоритмом."],
              chartId: "dashboard_monitoring"
            },
            {
              id: 2,
              title: "Легалізація Тіньової Армії",
              subtitle: "Виведення 8,000 Приватних Спеціалістів Онлайн.",
              body: "Приватний сектор величезний, але невидимий (близько 8,000 спеціалістів). Пропонуючи <b>Цифровий Коридор</b> (спрощене ліцензування + умови виходу з тіні), ми маємо шанс ввести їх у правове поле користуючись довірою, як незалежна недержавна інфраструктура, що надає фахівцям доступ до гуманітарних бюджетів та протоку бенефіціарів разом з CRM системою.",
              bullets: ["8,000 Спеціалістів.", "Умови виходу з тіні.", "Правова Інтеграція."]
            },
            {
               id: 3,
               title: "Інтероперабельність: Middleware",
               subtitle: "Приватний Інтерфейс, Публічний Реєстр.",
               body: "Програма може працювати, як 'Партнерський Модуль' до eHealth через API Helsi. Вона надає зручний, сучасний інтерфейс для психолога (як Uber), але автоматично передає критичні медичні дані до Центральної Бази Даних (eHealth). Держава зберігає 'Джерело Правди'.",
               bullets: ["Зручний UI.", "Синхронізація з eHealth.", "Єдина Статистика."]
            },
            {
              id: 4,
              title: "РІШЕННЯ ПЕРЕГЛЯНУТИ",
              subtitle: "Держава купує сервіс, а не сервери.",
              body: "SaaS Ліцензія, коли держава платить за доступ та SLA (Угода про рівень послуг) є фактичним аутсорсингом цілого набору функцій, а головне довіри, якої зазвичай не має до державних заходів ліцензування, підтримка безпеки і т.ін. - сервіс завжди буде доступним для українців.",
              bullets: ["OPEX замість CAPEX.", "Безкоштовні Оновлення для України."],
              chartId: "dashboard_funding"
            },
            {
              id: 5,
              title: "РІШЕННЯ ПЕРЕГЛЯНУТИ",
              subtitle: "Керований прозорий сервіс з публічним та державним контролем.",
              body: "Програма не продає код чи сервери, вона надає 'Керований Сервіс' з державною ліцензією на доступ до нього. Держава отримує спроможність без ризику CAPEX, тримаючи 'Золоту Акцію', що забезпечує суверенітет даних та права управління. І ніякого \"кота в мішку\" - лицензування відбувається коли вже точно ясно що все працює як слід.",
              bullets: ["Державне Управління.", "Суверенітет Даних.", "Відсутність Ризику CAPEX."]
            }
          ]
        }
      },
      [DocumentId.SOLUTION]: {
        navTitle: "Розгортання",
        schema: {
          title: "РОЗГОРТАННЯ ПРОГРАМИ 2026-27+",
          subtitle: "Використання патронажу G7 для реформи системи",
          centerNode: {
            title: "Win-Win",
            subtitle: "Україна як Полігон Валідації",
            description: "Україна стає 'Полігоном Валідації' для першої у світі леджер екосистеми MHPSS. Партнери отримують кейс 'Єдинорога'; Україна отримує реформу.",
            targetPage: 5,
            features: [
              { title: "Вплив", desc: "Використання Посольств для просування реформи." },
              { title: "Окупність", desc: "Транзакційні комісії покривають інвестиції." },
              { title: "Вихід", desc: "Державна ліцензія або опція викупу." }
            ]
          },
          nodes: [
            {
              id: "blended",
              title: "2026: Запуск",
              highlight: "Запуск",
              icon: "Zap",
              targetPage: 1,
              points: ["Grand Bargain 25%", "Центр Експертизи КНУ", "Трансфер VR DoD"]
            },
            {
              id: "risk",
              title: "2027: Охоплення",
              highlight: "Охоплення",
              icon: "Shield",
              targetPage: 2,
              points: ["Військовий Міст", "24 Області", "Змішане Фінансування"]
            },
            {
              id: "direct",
              title: "2027+: Покриття",
              highlight: "Покриття",
              icon: "Globe",
              targetPage: 3,
              points: ["Державне Ліцензування"]
            },
            {
              id: "partnership",
              title: "Глобально",
              highlight: "ЗА МЕЖЕЮ: Глобально",
              icon: "Handshake",
              targetPage: 4,
              points: ["Регуляторна Пісочниця", "Доступ до Ринку", "Глобальна Валідація"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "2026: Запуск",
              subtitle: "Використання гуманітарних ресурсів для сталого секторального розвитку.",
              body: "1. Національний Банк доєднання до Хартію з фінансової інклюзії та реінтеграції ветеранів для використання програми в якості цифрової інфраструктури на виконання Хартії. <br/>2. Набір проектів з міжнародними акторами та донорами (використання важелю локалізації Grand Bargain IASC 25%) <br/>3. Започаткування Центру Експертизи в Університеті ім. Шевченка, для створення національної моделі впливу ментального добробуту на ВВП. <br/>4. Трансфер VR технологій USC ICT Skip Rizzo (Міністерство оборони США) для українських воїнів.",
              bullets: ["Відповідність Grand Bargain IASC.", "Центр Експертизи КНУ.", "Трансфер VR DoD."],
              chartId: "derisking"
            },
            {
              id: 2,
              title: "2027: Охоплення",
              subtitle: "Спільні проекти з Міністерством Оборони та Міністерством Регіонального Розвитку",
              body: "1. Побудова мосту для переходу ветеранів з військових шпиталів до цивільних психологів які використовують перевірені ВР методології. <br/>2. Розгортання змагань Метального Добробуту та оцінки впливу на ВВП у 24 областях. <br/><br/>Змішане фінансування з громадами (OTG) та обласними бюджетами, корпоративною філантропією, де-ризикованим до-фінансуванням з боку донорів.",
              bullets: ["Міст для Ветеранів"],
            },
            {
              id: 3,
              title: "2027+: Покриття",
              subtitle: "Національний Суверенітет",
              body: "Feel again створює 'Регуляторну Пісочницю' для легалізації діяльності та надає потік пацієнтів/клієнтів/бенефіціарів. За умови успішної взаємодії з національними операторами та програмами, шпиталями та реабілітаційними центрами, приватною практикою, гуманітарним реагуванням Програма стає інструментом забезпечення Національного Суверенітету. Держава активує Ліцензію та забезпечує Національний Суверенітет.",
              bullets: ["Державне Ліцензування."]
            },
            {
              id: 4,
              title: "Глобальний Кейс",
              subtitle: "Загартовано у війні, зростало в оточені корупції, буде працювати всюди.",
              body: "Залучаючи учасників по принципу Цілісного управління (whole governance) Програма створює приклад гуманітарного реагування, гармонізованого з вимогами державного управління у відповідності до національних потреб, сягаючи стандартів Grand Bargain та Humanitarian Reset. Таке досягнення повинно дістатися країн які потерпають від зброєної агресії, готуються до неї, або долають її наслідки.",
              bullets: ["Регуляторна Підтримка.", "Доступ до Ринку.", "Глобальна Валідація."]
            },
            {
              id: 5,
              title: "WIN WIN",
              subtitle: "Україна як Полігон Валідації.",
              body: "Україна отримує цілісну систему в секторі ментального здоров'я без CAPEX та розвинуту формалізовану приватну практику. Донори оптимізацію та контроль бюджетів та якості послуг, разом з можливістю мультиплікувати ефект в інші модальності допомоги. Бенефіціари вчасну та контрольовано якісну допомогу.",
              bullets: ["Глобальна Валідація.", "Кейс Єдинорога.", "Підтримка Посольств."]
            }
          ]
        }
      },
      [DocumentId.RESULTS]: {
        navTitle: "Очікувані Результати",
        schema: {
          title: "Результати та Вплив: Інвестиції на Основі Доказів",
          subtitle: "Вимірювання Відновлених Розумів, а не Просто Проведених Сесій",
          centerNode: {
            title: "Вплив",
            subtitle: "Людський Капітал",
            description: "Перехід від 'наданих сесій' до 'відновлених умів'. Ми надаємо дані, щоб довести, що інвестиції в ментальне здоров'я приносять економічну віддачу.",
            targetPage: 5,
            features: [
              { title: "Grand Bargain IASC", desc: "Ціль: 70% локалізації." },
              { title: "Вплив на ВВП", desc: "Збереження $8-28 млрд." },
              { title: "Відстежуваність", desc: "100% Прозорість." }
            ]
          },
          nodes: [
            {
              id: "budget",
              title: "ЕФЕКТИВНІСТЬ",
              highlight: "20-30%",
              icon: "Zap",
              targetPage: 1,
              points: ["Зниження адмінвитрат", "Ефективність через Координацію", "Більше коштів бенефіціарам"]
            },
            {
              id: "local",
              title: "Grand Bargain IASC",
              highlight: "Відповідальність",
              icon: "Globe",
              targetPage: 2,
              points: ["Досягнення цілі 25% Grand Bargain", "Посилення місцевих надавачів", "Стала екосистема"]
            },
            {
              id: "scale",
              title: "СТРАТЕГІЯ",
              highlight: "Масштабованість",
              icon: "Layers",
              targetPage: 3,
              points: ["Forged in War, оточена корупцією", "Створена для ментального добробуту", "Модель для Світу"]
            },
            {
              id: "analytics",
              title: "СТАЛІСТЬ",
              highlight: "Розвиток",
              icon: "BarChart3",
              targetPage: 4,
              points: ["КНУ Шевченка", "Міністерство Економіки (очікуємо приєднання)", "Політика на основі даних"]
            }
          ]
        },
        report: {
          pages: [
            {
              id: 1,
              title: "ОПЕРАЦІЙНА ЕФЕКТИВНІСТЬ",
              subtitle: "Цифровий міст FeeL Again",
              body: "Спробуйте порахувати зміну у стандарних показниках гуманітарної діяльності: 20% дублювання, 30% адмін витрат, прискорення реагування до днів, оптимізацію обліку до годин, платежів до хвилин. Це не косметичне скорочення персоналу це реальний Гуманітарний перезапуск (Humanitarian Reset)",
              bullets: ["Зменшення Тертя.", "Відновлення Вартості.", "Пряма Доставка."]
            },
            {
              id: 2,
              title: "ГУМАНІТАРНА ЦІЛЬ: ЛОКАЛІЗАЦІЯ",
              subtitle: "Досягнення Цілі 25% Grand Bargain IASC",
              body: "FeeL Again ціль 70% локалізації, завдяки прямим платежам на виконавців послуг. Цифрова інфраструктура є інструментом що сягає цифрового безпристрастного комплаєнсу, що дозволяє донорам та меценатам безпечно фінансувати тисячі малих місцевих акторів - надавачів послуг, наряду з великими місцевими операторами.",
              bullets: ["Ціль 70% Локалізації.", "Посилення Місцевих Акторів.", "Системне Рішення."]
            },
            {
              id: 3,
              title: "Стратегічна Масштабованість",
              subtitle: "Модель для Світу.",
              body: "Архітектура програми є модульною. Після перевірки в секторі MHPSS в Україні, може бути адаптована для інших модальносей допомоги, в Україні або будь-якій іншій зоні конфлікту.",
              bullets: ["Модульна Архітектура.", "Крос-секторальне Застосування.", "Глобальна Релевантність."]
            },
            {
              id: 4,
              title: "Стек Сталого Розвитку",
              subtitle: "Партнери по даним та аналітика.",
              body: "1. Методології EMDR & VR Bravemind які знижують кількість сеансів та підвищують показники завершення курсу та знижують кількість рецидивів. <br/>2. Визначення ефективних практик серед українських практиків що збирали досвід останніх 10 років війни. <br/>3. Створення набору відкритих деперсоніфікованих даних. <br/>4. Відтворення цифрової координації всіх учасників гуманітарного циклу. <br/>5. Підхоплення навчених гуманітарними акторами фахівців як попередження падіння ринку, як це було раніше. <br/>6. Відбудова цифрового спрямування та супроводу бенефіціарів, надавачів послуг та донорів. <br/>7. Позбавлення від людських помилок та преференцій у розподілі допомоги. <br/>8. Підтримка SLA (Service Level Agreement) для держави та експортуємо українське.",
              bullets: ["КНУ Шевченка.", "Методології EMDR & VR.", "Політика на Основі Доказів."]
            },
            {
              id: 5,
              title: "Економічний Вплив: Британська Методологія",
              subtitle: "Відновлення ментального добробуту - відбудує країну.",
              body: "London School of Economics and Political Science - LSE / Centre for Mental Health, розробила методологію яка може бути адаптована для України. Психічні розлади коштують економіці Великобританії ~£300 млрд/рік (5% прямого впливу на ВВП). <br/><br/>Україна втрачає більше ніж 5% в умовах війни, рахунком різниці між лікарняним на тиждень та зайнятістю активної частини населення у війні. Застосовуючи цю модель до України, ми захищаємо $8-28 млрд щорічно. Кожен інвестований долар в Програму запобігає втраті мінімум $4 у майбутній продуктивності.",
              bullets: ["£300 млрд Бенчмарк UK.", "72% Втрати Продуктивності.", "Захист $8-28 млрд."]
            },
          ]
        }
      }
    }
  }
};