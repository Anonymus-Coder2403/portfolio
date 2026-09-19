export const profile = {
  name: 'Yash Kumar',
  role: 'AI Engineer',
  positioning: 'AI Engineer',
  heroHeadline: 'I build agentic AI systems, and the evaluation that proves they work.',
  tagline: 'Building production agentic AI systems with Google ADK and Gemini.',
  heroMetrics: ['5 domain sub agents', '109 item golden QA dataset', '1,500+ users'],
  email: 'yashcoder9187@gmail.com',
  github: 'https://github.com/Anonymus-Coder2403',
  linkedin: 'https://linkedin.com/in/yashcoder2403',

  education: {
    degree: 'B.Tech ECE in AI',
    institution: 'Guru Ghasidas Vishwavidyalaya',
    classOf: 2026,
    cgpa: '8.0',
  },

  experience: [
    {
      company: 'PayNearby',
      role: 'AI Engineer Intern',
      dateRange: 'Apr 2026 – Present',
      tagline: 'Voice financial counselor on Google ADK, serving 1,500+ users.',
      bullets: [
        'Shipped Saathi AI, a production voice financial counselor on Google Agent Development Kit serving 1,500+ users.',
        'Architected the PayNearby root orchestrator that routes queries to 5 domain sub agents, each RAG backed.',
        'Built a self hosted Opik observability pipeline in the development environment, with LLM as judge evaluation scoring RAGAS style metrics via gemini-2.5-flash against a 109 item golden QA dataset. Opik 2.0.47.',
        'Wrote a custom LiveTurnTracer capturing per turn spans across the 5 RAG backed experts, feeding self hosted Opik.',
      ],
      caseStudies: [{ label: 'Case study', href: '/projects/saathi-ai' }] as { label: string; href: string }[],
    },
    {
      company: 'GeniOS',
      role: 'AI Engineer Intern',
      dateRange: 'Oct – Dec 2025',
      tagline: 'Founding AI engineer. Agentic reasoning pipeline with LangGraph.',
      bullets: [
        'Founding AI engineer. Built an agentic reasoning pipeline with LangGraph and LangChain.',
        'Achieved 92% accuracy across 500+ users.',
      ],
      caseStudies: [] as { label: string; href: string }[],
    },
  ],

  skills: {
    languages: ['Python', 'C++', 'Java', 'SQL'],
    aiMl: ['LangChain', 'LangGraph', 'Google ADK', 'RAG', 'Gemini', 'Opik', 'ChromaDB'],
    backend: ['FastAPI', 'OpenCV'],
    data: ['MySQL', 'ClickHouse'],
    infra: ['GCP', 'Docker', 'Git'],
  },
} as const
