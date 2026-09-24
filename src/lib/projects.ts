export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  year?: number
  role?: string
  cardRole?: string
  highlights?: string[]
  hasDeepDive?: boolean
  github: string | null
  linkedin?: string
  order: number
}

const projects: Project[] = [
  {
    slug: 'saathi-ai',
    title: 'Saathi AI',
    tagline: 'Voice financial counselor on Google ADK, with five domain experts and a self hosted evaluation stack',
    description:
      'A production voice financial counselor on Google ADK serving 1,500+ users, built on 5 RAG backed domain sub agents under a root orchestrator and a self hosted observability pipeline in the development environment.',
    tags: ['Google Agent Development Kit', 'Gemini', 'Opik 2.0.47', 'FastAPI', 'Cloud Run'],
    year: 2026,
    role: 'AI Engineer, PayNearby',
    highlights: [
      'A PayNearby root orchestrator routing queries to five domain sub agents wired as AgentTools, each RAG backed.',
      'Self hosted Opik observability with LLM-as-judge evaluation against a 109 item golden QA dataset (development environment).',
      'Custom LiveTurnTracer capturing per turn spans across the five RAG backed experts.',
    ],
    hasDeepDive: true,
    github: null,
    order: 1,
  },
  {
    slug: 'cricvision',
    title: 'CricVision',
    tagline: 'AI cricket analyst with multimodal match analysis',
    description:
      'A four agent AI cricket analytics system that accepts match video or images and generates delivery level statistics, wagon wheel visualisations, and match reports.',
    tags: ['Google ADK', 'Gemini', 'FastAPI', 'React', 'Streamlit', 'Python'],
    year: 2026,
    hasDeepDive: true,
    github: 'https://github.com/Anonymus-Coder2403/CricVision',
    linkedin: 'https://www.linkedin.com/posts/yashcoder2403_bwaiapldlehi-geminiai-fastapi-activity-7457441495478902784-1iq6',
    order: 2,
  },
  {
    slug: 'aegis',
    title: 'Aegis',
    tagline: 'Schema first hybrid RAG with typed field routing',
    description:
      'A schema first hybrid RAG system that routes typed field queries away from semantic search entirely, with PDF bill parsing and domain specific handlers.',
    tags: ['RAG', 'ChromaDB', 'FastAPI', 'Python', 'LangChain'],
    hasDeepDive: true,
    github: 'https://github.com/Anonymus-Coder2403/Aegis',
    order: 3,
  },
  {
    slug: 'observability-tooling',
    title: 'Observability Tooling',
    tagline: 'Per turn span tracing across a multi agent ADK voice system',
    description:
      'A custom LiveTurnTracer that captures per turn spans across the 5 RAG experts of a Google ADK voice agent, feeding a self hosted Opik instance in the development environment.',
    tags: ['Google ADK', 'Opik', 'Python', 'OpenTelemetry', 'ClickHouse'],
    hasDeepDive: true,
    github: null,
    order: 4,
  },
]

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
