/** Product domain cards — taxonomy aligned with Netcracker org profile README. */

export type ProductStatus = 'live' | 'soon';

export interface ProductDomain {
  id: string;
  icon: string;
  title: string;
  description: string;
  topicsNote: string;
  status: ProductStatus;
  /** Relative path on this Pages site, e.g. /apihub/ */
  landingHref?: string;
  /** GitHub topic for org search */
  githubTopic: string;
}

const ORG = 'Netcracker';

export function topicSearchUrl(topic: string): string {
  const q = encodeURIComponent(`org:${ORG} topic:${topic}`);
  return `https://github.com/search?q=${q}&type=repositories`;
}

export const productDomains: ProductDomain[] = [
  {
    id: 'api',
    icon: '🧩',
    title: 'API Management & Developer Portal',
    description:
      'Catalog, browse, compare, lint and render API specifications across formats. Single place for API governance and portal experiences.',
    topicsNote: 'qubership-apihub, apihub, frontend',
    status: 'live',
    landingHref: '/apihub/',
    githubTopic: 'qubership-apihub',
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'Integration Platform',
    description:
      'Flow orchestration, runtime engine, sessions and supporting components for integration workloads.',
    topicsNote: 'qip, qubership-integration',
    status: 'soon',
    githubTopic: 'qubership-integration',
  },
  {
    id: 'observability',
    icon: '📈',
    title: 'Observability',
    description:
      'Monitoring, logging, tracing and profiling components for cloud-native platforms.',
    topicsNote: 'qubership-observability, monitoring, logging, profiler',
    status: 'soon',
    githubTopic: 'qubership-observability',
  },
  {
    id: 'core',
    icon: '🏗',
    title: 'Core Platform & Service Mesh',
    description:
      'Shared platform building blocks, service mesh control plane and foundational libraries.',
    topicsNote: 'qubership-core, service-mesh, cloud-core, maas',
    status: 'soon',
    githubTopic: 'qubership-core',
  },
  {
    id: 'infra',
    icon: '🛠',
    title: 'Infrastructure Data & Runtime Services',
    description:
      'Operational data services and infrastructure components used inside cloud environments.',
    topicsNote: 'qubership-infra, saqs, kafka, consul, opensearch',
    status: 'soon',
    githubTopic: 'qubership-infra',
  },
  {
    id: 'cm',
    icon: '🧬',
    title: 'Configuration Management & Environment Generation',
    description: 'Environment generation and config-oriented tooling.',
    topicsNote: 'qubership-cm',
    status: 'soon',
    githubTopic: 'qubership-cm',
  },
];

export const GITHUB_ORG_URL = 'https://github.com/Netcracker';
