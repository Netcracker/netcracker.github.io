import { withBase } from '../lib/paths';

// ─── Site URLs ───────────────────────────────────────────────────────────────
export const GITHUB_URL = 'https://github.com/Netcracker/qubership-apihub';
export const DOCS_URL = 'https://github.com/Netcracker/qubership-apihub/blob/main/docs/user-guide.md';
export const INSTALL_URL = 'https://github.com/Netcracker/qubership-apihub/blob/main/docs/installation-guide.md';
export const ADMIN_URL = 'https://github.com/Netcracker/qubership-apihub/blob/main/docs/admin-guide.md';
export const RELEASES_URL = 'https://github.com/Netcracker/qubership-apihub/releases';
export const WIKI_URL = 'https://github.com/Netcracker/qubership-apihub/wiki';

/** Raw files from the GitHub wiki repo (same paths as in the wiki clone, e.g. images/…). */
export const WIKI_RAW_BASE = 'https://raw.githubusercontent.com/wiki/Netcracker/qubership-apihub';
export const WIKI_IMG_APPLICATIONS_ARCH = `${WIKI_RAW_BASE}/images/APIHUB_applications.png`;
export const WIKI_IMG_VS_API_MANAGEMENT = `${WIKI_RAW_BASE}/images/APIHUB_vs_API_Management_domain.png`;

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Use Cases', href: withBase('use-cases/') },
  { label: 'Features', href: withBase('features/') },
  { label: 'Capabilities', href: withBase('capabilities/') },
  { label: 'Releases', href: withBase('releases/') },
  { label: 'Deploy', href: withBase('deploy/') },
  { label: 'Docs', href: DOCS_URL, external: true },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: '22+', label: 'Open Source Repositories' },
  { value: 'v2.8.0', label: 'Latest Release' },
  { value: '3', label: 'API Formats: REST · GraphQL · AsyncAPI' },
  { value: 'MCP', label: 'AI & LLM Integration Ready' },
];

// ─── Pillars ─────────────────────────────────────────────────────────────────
export const pillars = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
    title: 'Single Source of Truth',
    description: 'Organize all your APIs in a unified catalog — workspaces, groups, packages, and versioned releases. Every team member knows exactly where to find the authoritative API contract.',
    color: 'blue',
    href: withBase('capabilities/'),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
    title: 'Automated Compatibility Checks',
    description: 'Know exactly what breaks before it reaches production. The diff engine classifies every API change as Breaking, Semi-Breaking, Deprecated, or Non-Breaking — with human-readable descriptions.',
    color: 'violet',
    href: withBase('features/'),
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>`,
    title: 'Quality & Governance at Scale',
    description: 'Enforce API standards with Spectral linting, AI-powered recommendations, and configurable rulesets per API type. Inline spec highlighting and multi-linter results in one unified dashboard.',
    color: 'indigo',
    href: withBase('capabilities/'),
  },
];

// ─── Section nav cards (shown on home) ───────────────────────────────────────
export const sectionCards = [
  {
    href: withBase('use-cases/'),
    icon: '💡',
    title: 'Use Cases',
    description: 'See how API developers, DevOps, governance leads, and AI teams use APIHUB in real workflows.',
    color: 'blue',
  },
  {
    href: withBase('features/'),
    icon: '⚡',
    title: 'Features',
    description: 'Interactive showcase of discovery, breaking change detection, quality gates, K8s discovery, and more.',
    color: 'violet',
  },
  {
    href: withBase('capabilities/'),
    icon: '📦',
    title: 'All Capabilities',
    description: 'Complete feature matrix organized by domain — catalog, security, AI, export, and more.',
    color: 'indigo',
  },
  {
    href: withBase('releases/'),
    icon: '🚀',
    title: 'Releases',
    description: 'Actively developed with releases every 4–6 weeks. See the full changelog from v2.5.x to v2.8.0.',
    color: 'emerald',
  },
  {
    href: withBase('deploy/'),
    icon: '🐳',
    title: 'Deploy',
    description: 'Docker Compose, Helm chart, or build from source. Architecture overview included.',
    color: 'orange',
  },
];

// ─── Features (feature tab data) ─────────────────────────────────────────────
export const features = [
  {
    id: 'discovery',
    tab: 'API Discovery',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
    title: 'Find Any API in Seconds',
    description: 'Powerful global search across all operations, documents, and packages. Navigate the full hierarchy — workspace → group → package → version — with rich filters.',
    bullets: [
      'Search across REST operations, GraphQL queries, and AsyncAPI channels',
      'Deep-link directly into the doc view or package summary',
      'Filter by audience, tags, API kind, and deprecation status',
      'Full-text search with 70-char snippets around matching content',
    ],
    image: null,
    image2: null,
    alt: '',
    mockup: 'search',
  },
  {
    id: 'comparison',
    tab: 'Breaking Changes',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>`,
    title: 'Detect Breaking Changes Automatically',
    description: 'Version-to-version and operation-level diffs with automated classification. Compare versions, revisions, or REST path groups — with export to Excel for compliance.',
    bullets: [
      'Breaking / Semi-Breaking / Deprecated / Non-Breaking / Annotation severity',
      'Compare any two versions or revisions across REST and GraphQL',
      'Path-prefix group comparison for domain-scoped analysis',
      'Export change lists to Excel for audit and compliance workflows',
    ],
    image: withBase('images/feature-breaking-changes.png'),
    image2: 'https://github.com/user-attachments/assets/34f7d6f6-ccd7-4e28-a88a-6cc5effc9f83',
    alt: 'API Changes comparison view showing breaking change classification',
    mockup: null,
  },
  {
    id: 'quality',
    tab: 'API Quality',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>`,
    title: 'Enforce API Standards Automatically',
    description: 'Multi-linter governance with Spectral rulesets and AI-powered analysis. Inline spec highlighting shows exactly which line violates a rule.',
    bullets: [
      'Spectral engine with configurable custom rulesets per API type',
      'AI linter for OpenAI-powered quality recommendations',
      'Inline problem highlighting directly in the spec viewer',
      'Per-ruleset activation history and downloadable reports',
    ],
    image: withBase('images/feature-quality.png'),
    image2: 'https://github.com/user-attachments/assets/023db369-8f0f-4d77-b886-01a1fe4bfbde',
    alt: 'API Quality tab showing multi-linter results with inline spec highlighting',
    mockup: null,
  },
  {
    id: 'kubernetes',
    tab: 'K8s Discovery',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>`,
    title: 'Discover APIs Running in Your Clusters',
    description: 'Deploy lightweight agents to remote Kubernetes clusters. Agents automatically discover REST, GraphQL, and AsyncAPI services and promote specs into the central catalog.',
    bullets: [
      'Pluggable discovery runners: REST, GraphQL, AsyncAPI, JSON Schema',
      'Namespace-scoped discovery with security boundary enforcement',
      'Heartbeat-based health monitoring with automatic snapshot TTL cleanup',
      'One-click promotion from agent snapshot to the governed portal catalog',
    ],
    image: withBase('images/feature-k8s-discovery.png'),
    image2: null,
    alt: 'Kubernetes API discovery visualization showing cluster pods and API spec detection',
    mockup: null,
  },
  {
    id: 'playground',
    tab: 'REST Playground',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" /></svg>`,
    title: 'Try APIs Without Leaving the Portal',
    description: 'Spec-driven REST playground directly in the doc view. Pick server, fill parameters from the spec schema, send requests, and inspect responses.',
    bullets: [
      'Spec-driven parameter and body filling from OpenAPI schema',
      'Multiple server support with custom server override',
      'Agent Proxy for in-cluster testing via the K8s agent network',
      'Server selection and custom URLs persisted in local storage',
    ],
    image: 'https://github.com/user-attachments/assets/35e9c1dd-75bc-4dcf-95ee-a9b5b7f5ee65',
    image2: null,
    alt: 'REST Playground sidebar showing request builder and response viewer',
    mockup: null,
  },
  {
    id: 'asyncapi',
    tab: 'AsyncAPI',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>`,
    title: 'First-Class AsyncAPI Support',
    description: 'AsyncAPI 3.0 treated as a first-class citizen — full doc rendering, SEND/RECEIVE badges, channel addressing, Kafka/AMQP bindings, and complete diff engine integration.',
    bullets: [
      'AsyncAPI 3.0 operation rendering with SEND/RECEIVE semantics',
      'Kafka, AMQP bindings at operation, channel, and message level',
      'Breaking change detection and classification for event APIs',
      'Agent-based discovery of AsyncAPI services in Kubernetes clusters',
    ],
    image: 'https://github.com/user-attachments/assets/475d3256-8da5-4420-981d-65dcecccd579',
    image2: null,
    alt: 'AsyncAPI DocView showing SEND/RECEIVE operations with channel and binding details',
    mockup: null,
  },
];

// ─── Business Scenarios ───────────────────────────────────────────────────────
export const scenarios = [
  {
    persona: 'API Developer',
    icon: '👨‍💻',
    title: 'Ship new API version safely',
    steps: ['Upload spec', 'Auto-build & diff', 'Review changes', 'Publish'],
    value: 'Ship confidently — see exactly what breaks for consumers before release',
    color: 'blue',
  },
  {
    persona: 'DevOps / CI Platform',
    icon: '⚙️',
    title: 'Block breaking changes in pull requests',
    steps: ['PR opened', 'CI triggers APIHUB', 'Diff computed', 'Breaking? Fail', 'Safe? Merge'],
    value: 'Zero breaking changes reach production. Every release is safe by default.',
    color: 'violet',
  },
  {
    persona: 'API Consumer / Team Lead',
    icon: '🧑‍💼',
    title: 'Onboard new developers in minutes',
    steps: ['Global search', 'Browse operations', 'Read docs & schemas', 'Try in Playground', 'Copy API key'],
    value: 'New developers become productive in hours, not days. No Slack pings needed.',
    color: 'emerald',
  },
  {
    persona: 'API Governance Lead',
    icon: '🏛️',
    title: 'Enforce API standards across all teams',
    steps: ['Upload ruleset', 'Activate per API type', 'Auto-lint on publish', 'Review dashboard', 'AI review edge cases'],
    value: '100% API coverage with automated governance. Quality scores visible to every team.',
    color: 'orange',
  },
  {
    persona: 'Platform Engineer',
    icon: '☸️',
    title: 'Always-current API inventory from K8s',
    steps: ['Deploy agent', 'Auto-discover services', 'Snapshot specs', 'Review in UI', 'Promote to catalog'],
    value: 'Catalog always reflects what\'s actually deployed. No stale docs, no manual updates.',
    color: 'cyan',
  },
  {
    persona: 'AI / LLM Developer',
    icon: '🤖',
    title: 'Give AI agents real API knowledge',
    steps: ['Configure MCP client', 'Connect to APIHUB', 'AI searches ops', 'AI fetches specs', 'AI generates code'],
    value: 'LLMs work with your real, current API catalog — not hallucinated or outdated specs.',
    color: 'pink',
  },
];

// ─── Releases ─────────────────────────────────────────────────────────────────
export const releases = [
  {
    version: 'v2.8.0',
    date: 'April 9, 2026',
    latest: true,
    highlights: [
      'AsyncAPI Phase 2/3 — full support: rendering, diff, global search, agent discovery',
      'GraphQL global search for operations (UI + backend)',
      'REST & GraphQL Quality Gates — Spectral linting fully enabled',
      'TypeScript 7.0 upgrade for frontend components',
      'Sharable/Non-sharable meta-marker for document export control',
    ],
  },
  {
    version: 'v2.7.0',
    date: 'March 24, 2026',
    latest: false,
    highlights: [
      'MCP Tool for API Changes: new get_rest_api_operation_diff MCP tool',
      'GraphQL Bulk Mode in Breaking Changes Dashboard with CSV import/export',
      'AI Linter productization: multiple linters per API type',
      'AsyncAPI Quality Check backend support',
    ],
  },
  {
    version: 'v2.6.0',
    date: 'February 6, 2026',
    latest: false,
    highlights: [
      'AsyncAPI initial backend support',
      'OAS 3.0/3.1 cross-version comparison improvements',
      'Common Go library for API spec exposure',
      'Runtime log level management across all services',
    ],
  },
  {
    version: 'v2.5.2',
    date: 'December 16, 2025',
    latest: false,
    highlights: [
      'MCP Server PoC — first MCP server + AI chat integration',
      'LLM onboarding to APIHUB for API quality measurement',
      'OAS 3.1 pathItem refs support in REST Playground',
    ],
  },
];

// ─── Formats ─────────────────────────────────────────────────────────────────
export const formats = [
  { name: 'OpenAPI 3.x', color: '#85E89D' },
  { name: 'Swagger 2.0', color: '#85E89D' },
  { name: 'GraphQL', color: '#E535AB' },
  { name: 'AsyncAPI 3.0', color: '#F7A541' },
  { name: 'JSON Schema', color: '#60A5FA' },
  { name: 'Protobuf / gRPC', color: '#A78BFA' },
  { name: 'Markdown Docs', color: '#94A3B8' },
  { name: 'MCP (AI)', color: '#34D399' },
];

// ─── Deploy options ───────────────────────────────────────────────────────────
export const deployOptions = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" /></svg>`,
    title: 'Docker Compose',
    description: 'Get up and running in minutes. Every release ships a production-ready docker-compose configuration with all six services pre-configured.',
    badge: 'Recommended for dev',
    cta: 'View docker-compose',
    href: 'https://github.com/Netcracker/qubership-apihub/tree/main/docker-compose',
    color: 'blue',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /></svg>`,
    title: 'Kubernetes / Helm',
    description: 'Production-grade Kubernetes deployment with Helm charts. Full configurability via values.yaml — RBAC, resource limits, S3, SSO, monitoring, and more.',
    badge: 'Production ready',
    cta: 'View Helm chart',
    href: 'https://github.com/Netcracker/qubership-apihub/tree/main/helm-templates',
    color: 'violet',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
    title: 'Build from Source',
    description: 'All 22 repositories are open source under Apache 2.0. Build any component, run the full test suite, and contribute back to the project.',
    badge: 'Open source',
    cta: 'View on GitHub',
    href: GITHUB_URL,
    color: 'indigo',
  },
];
