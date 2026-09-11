export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  repo: string | null
  order: number
}

const projects: Project[] = [
  {
    slug: 'saathi-ai',
    title: 'Saathi AI',
    tagline: 'Production voice financial counselor on Google Agent Development Kit',
    description:
      'A production voice financial counselor on Google ADK serving 1,500+ users, built on 6 domain sub agents with RAG backed knowledge retrieval and a self hosted observability pipeline.',
    tags: ['Google ADK', 'Gemini', 'RAG', 'ChromaDB', 'Opik', 'FastAPI', 'Python', 'GCP'],
    repo: null,
    order: 1,
  },
  {
    slug: 'cricvision',
    title: 'CricVision',
    tagline: 'AI cricket analyst with multimodal match analysis',
    description:
      'A four agent AI cricket analytics system that accepts match video or images and generates delivery level statistics, wagon wheel visualisations, and match reports.',
    tags: ['Google ADK', 'Gemini', 'FastAPI', 'React', 'Streamlit', 'Python'],
    repo: 'https://github.com/Anonymus-Coder2403/CricVision',
    order: 2,
  },
  {
    slug: 'aegis',
    title: 'Aegis',
    tagline: 'Schema first hybrid RAG with typed field routing',
    description:
      'A schema first hybrid RAG system that routes typed field queries away from semantic search entirely, with PDF bill parsing and domain specific handlers.',
    tags: ['RAG', 'ChromaDB', 'FastAPI', 'Python', 'LangChain'],
    repo: 'https://github.com/Anonymus-Coder2403/Aegis',
    order: 3,
  },
  {
    slug: 'observability-tooling',
    title: 'Observability Tooling',
    tagline: 'Per turn span tracing across a multi agent ADK voice system',
    description:
      'A custom LiveTurnTracer that captures per turn spans across the 4 RAG experts of a Google ADK voice agent, feeding a self hosted Opik instance in the development environment.',
    tags: ['Google ADK', 'Opik', 'Python', 'OpenTelemetry', 'ClickHouse'],
    repo: null,
    order: 4,
  },
]

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
