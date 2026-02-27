
export enum Language {
  UA = 'UA',
  EN = 'EN'
}

export enum ViewMode {
  HERO = 'HERO',
  SCHEMA = 'SCHEMA',
  REPORT = 'REPORT',
  WAR_ROOM = 'WAR_ROOM'
}

export enum DocumentId {
  RESEARCH = 'RESEARCH',
  SOLUTION = 'SOLUTION',
  INFRASTRUCTURE = 'INFRASTRUCTURE',
  RESULTS = 'RESULTS'
}

export interface SchemaNode {
  id: string;
  title: string;
  highlight: string;
  icon: any; // Using string key for Lucide icon
  targetPage: number;
  points: string[];
}

export interface ReportPage {
  id: number;
  title: string;
  subtitle: string;
  body: string;
  bullets: string[];
  chartId?: string; 
  quote?: string;
}

export interface ConsortiumRole {
  org: string;
  role: string;
  logo: string;
  desc?: string;
  website?: string;
}

export interface DocumentContent {
  navTitle: string;
  schema: {
    title: string;
    subtitle: string;
    centerNode: { 
      title: string; 
      subtitle: string; 
      description: string; 
      targetPage?: number;
      features?: { title: string; desc: string }[]; 
      consortiumRoles?: ConsortiumRole[];
    };
    nodes: SchemaNode[];
    opportunityNodes?: SchemaNode[]; 
  };
  report: {
    pages: ReportPage[];
  };
}

export interface WarRoomItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'Development' | 'Active' | 'Critical Decision';
  description: string;
  keyProjects: string[];
  deployment: {
    name: string;
    icon?: string; // Emoji or icon key
    partners?: string[];
    beneficiaries?: string;
  }[];
}

export interface LocalizedContent {
  appNav: {
    cta: string;
    schemaLabel: string;
    reportLabel: string;
    nextDoc: string;
    prevDoc: string;
    backToSchema: string;
    startTour: string;
    readMore: string;
    viewOpportunity: string;
    viewProblem: string;
    close: string;
    warRoom: string;
    enterSpace: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    footer: string;
  };
  bottleneck: {
    label: string;
    title: string;
    body: string;
    subbody: string;
    primaryCare: { title: string; subtitle: string; tag: string };
    solution: { title: string; tag: string; items: string[] };
    psychiatric: { title: string; subtitle: string; tag: string };
  };
  docs: Record<DocumentId, DocumentContent>;
  charts: {
    [key: string]: string;
  };
  warRoom: {
    title: string;
    subtitle: string;
    matrixTitle: string;
    scoring: {
      title: string;
      subtitle: string;
      description: string;
      excellent: string;
      techReady: string;
      govAlign: string;
      scalability: string;
    };
    goals: { label: string; sublabel: string }[];
    mindMap: {
      title: string;
      hint: string;
      nodes: Record<string, { title: string; desc: string; impact: string }>;
    };
    consortiumRoles: ConsortiumRole[];
    metrics: {
      title: string;
      forecasts: string;
      population: { title: string; desc: string };
      gap: { desc: string };
      efficiency: {
        title: string;
        traditional: string;
        traditionalDesc: string;
        target?: string;
        targetDesc?: string;
      };
      talent: { title: string };
      stats?: { value: string; label: string; sublabel: string }[];
    };
    governance: {
      title: string;
      body: string;
      fragmentation: string;
      fragmentationDesc: string;
      feelAgain: string;
      feelAgainDesc: string;
    };
    phases?: {
      title: string;
      phase1: { title: string; year: string; items: { title: string; subtitle: string }[] };
      phase2: { title: string; year: string; items: { title: string; subtitle: string }[] };
      phase3: { title: string; year: string; items: { title: string; subtitle: string }[] };
    };
    request: {
      title: string;
      subtitle: string;
      impactTitle: string;
      fundingTitle: string;
      items: { title: string; subtitle: string }[];
      funding: {
        investment: string;
        source: string;
        sourceVal: string;
        mechanism: string;
        mechanismVal: string;
        costToState: string;
        stateAsset: string;
        license: string;
        licenseDesc: string;
      };
    };
    globalVision?: {
      title: string;
      subtitle: string;
      body: string;
    };
    contacts: {
      title: string;
      share: string;
    };
    items: WarRoomItem[];
  }
}

export type Dictionary = Record<Language, LocalizedContent>;
