import { withBase } from '../lib/paths';

export const GITHUB_URL = 'https://github.com/Netcracker/qubership-integration-platform';
export const DOCS_URL = `${GITHUB_URL}/tree/main/help`;
export const GETTING_STARTED_URL = `${GITHUB_URL}#getting-started`;
export const ISSUES_URL = `${GITHUB_URL}/issues`;

export const NAV_LINKS = [
  { label: 'Use Cases', href: withBase('use-cases/') },
  { label: 'Features', href: withBase('features/') },
  { label: 'Capabilities', href: withBase('capabilities/') },
  { label: 'Deploy', href: withBase('deploy/') },
  { label: 'Docs', href: DOCS_URL, external: true },
];

export const proofPoints = [
  { value: 'Apache Camel', label: 'Battle-tested integration runtime' },
  { value: 'Visual low-code', label: 'Build flows on a graph canvas' },
  { value: 'Kubernetes', label: 'Run integrations cloud-natively' },
  { value: 'Web + VS Code', label: 'Choose your development workspace' },
];

export const pillars = [
  {
    title: 'Design integrations visually',
    description: 'Compose triggers, routing, transformations, service calls, and error handling as a readable integration chain.',
    color: 'mint',
    href: withBase('features/#designer'),
  },
  {
    title: 'Use the power of Apache Camel',
    description: 'Build on a mature integration foundation without requiring every developer to work directly with Camel configuration.',
    color: 'yellow',
    href: withBase('capabilities/#connectivity'),
  },
  {
    title: 'Operate with context',
    description: 'Version, deploy, inspect, and troubleshoot flows from snapshots and deployment state down to recorded sessions.',
    color: 'blue',
    href: withBase('features/#operations'),
  },
];

export const personas = [
  {
    name: 'Integration developer',
    outcome: 'Build and evolve integration flows faster',
    description: 'Use the visual graph, reusable services, mapping tools, and an extensive element library to turn integration requirements into deployable chains.',
    steps: ['Model the flow on the graph', 'Transform messages and call services', 'Save a snapshot and deploy'],
  },
  {
    name: 'Application developer',
    outcome: 'Connect an application without owning integration plumbing',
    description: 'Expose and consume integrations through familiar protocols while the platform handles routing, transformations, retries, and service connectivity.',
    steps: ['Describe the endpoint or event', 'Reuse a governed service definition', 'Observe processing by session'],
  },
  {
    name: 'Solution architect',
    outcome: 'Keep complex integration landscapes understandable',
    description: 'Review chain structure, service dependencies, sequence diagrams, snapshots, and generated design documentation from one model.',
    steps: ['Review dependencies', 'Compare snapshots', 'Document the integration design'],
  },
  {
    name: 'Platform engineer',
    outcome: 'Run integration workloads consistently',
    description: 'Deploy platform services and engine domains on Kubernetes, manage runtime configuration, and scale execution independently from design-time services.',
    steps: ['Configure the platform', 'Deploy engine domains', 'Track chain deployment state'],
  },
  {
    name: 'Operations and support',
    outcome: 'Find the failing step, not just the failed request',
    description: 'Search recorded sessions, inspect exchanges and element-level context, follow correlation data, and retry eligible processing from checkpoints.',
    steps: ['Locate the session', 'Inspect element context and errors', 'Resolve or retry with evidence'],
  },
];

export const features = [
  {
    id: 'designer',
    label: 'Flow designer',
    title: 'Make integration logic visible',
    description: 'Drag elements onto a blueprint-style canvas, connect them into a chain, group complex logic, and move between graphical and text representations.',
    image: withBase('images/hero-graph.png'),
    alt: 'QIP visual graph editor showing an HTTP-triggered integration with mapping, a service call, conditional Kafka publishing, database storage, and response mapping',
    points: ['Visual chain composition', 'Routing and container elements', 'Graph, table, and text views'],
  },
  {
    id: 'mapping',
    label: 'Mapping',
    title: 'Transform data where the flow needs it',
    description: 'Map request and response structures, derive values, and work with exchange body, headers, and properties as part of the chain.',
    image: withBase('images/feature-mapper.png'),
    alt: 'QIP Mapper interface configuring a data transformation',
    points: ['Visual data mapping', 'Reusable transformation functions', 'Exchange-aware expressions'],
  },
  {
    id: 'services',
    label: 'Services',
    title: 'Model the systems around every integration',
    description: 'Manage external and inner-cloud services, their specifications, environments, and operations for use by integration chains.',
    image: withBase('images/feature-services.png'),
    alt: 'QIP service catalog showing service specifications and integration protocols',
    points: ['REST, SOAP, GraphQL, gRPC, Kafka, and AMQP', 'Specifications and environments', 'Inner-cloud service discovery'],
  },
  {
    id: 'operations',
    label: 'Deployments',
    title: 'Move from a saved design to a running chain',
    description: 'Create immutable snapshots, deploy them to engine domains, and see deployment status before traffic depends on the flow.',
    image: withBase('images/feature-deployments.png'),
    alt: 'QIP deployments interface showing chain deployment status',
    points: ['Versioned snapshots', 'Engine-domain deployment', 'Status and rollback context'],
  },
  {
    id: 'sessions',
    label: 'Sessions',
    title: 'Trace processing step by step',
    description: 'Search recorded sessions and inspect the chain elements, exchange data, technical context, warnings, and errors involved in each execution.',
    image: withBase('images/feature-sessions.png'),
    alt: 'QIP session details showing recorded integration processing steps',
    points: ['Correlation-aware search', 'Element-level context', 'Import, export, and eligible retry'],
  },
  {
    id: 'vscode',
    label: 'VS Code',
    title: 'Edit integration assets where you code',
    description: 'Use the QIP VS Code extension to edit chain and service YAML offline with the same visual editors, then keep the assets in a developer workflow.',
    image: withBase('images/feature-vscode.png'),
    alt: 'QIP VS Code extension editing a chain configuration',
    points: ['Offline chain and service editing', 'Visual and YAML workflows', 'Schema-backed files'],
  },
];

export const capabilityGroups = [
  { title: 'Design time', items: ['Visual graph editor', 'Element library', 'Graph and text representations', 'Sequence diagrams', 'Snapshots and comparison', 'Generated design documentation'] },
  { title: 'Connectivity', id: 'connectivity', items: ['HTTP and SOAP', 'Kafka and RabbitMQ', 'GraphQL and gRPC', 'File and scheduler triggers', 'Service catalog', 'Inner-cloud service discovery'] },
  { title: 'Transformation and orchestration', items: ['Visual mapping', 'Body, header, and property access', 'Conditions and routing', 'Split, loop, and aggregation', 'Retries and checkpoints', 'Reusable sub-chains'] },
  { title: 'Runtime and deployment', items: ['Apache Camel engine', 'Spring Boot engine', 'Quarkus micro-engine', 'Kubernetes engine domains', 'Docker Compose development stack', 'Helm deployment assets'] },
  { title: 'Observability and control', items: ['Recorded sessions', 'Element-level execution context', 'Correlation search', 'Live exchanges', 'Audit history', 'Logging and masking controls'] },
  { title: 'Developer tooling', items: ['Web UI', 'VS Code extension', 'Chain and service YAML schemas', 'Import and export', 'Diagnostics', 'Apache 2.0 source code'] },
];
