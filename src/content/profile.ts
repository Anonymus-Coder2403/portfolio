export const profile = {
  name: 'Yash Kumar',
  role: 'AI Engineer',
  tagline: 'Building production agentic AI systems with Google ADK and Gemini.',
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
      title: 'AI Engineer Intern',
      company: 'PayNearby',
      period: 'April 2026 – Present',
      location: 'Bengaluru',
      current: true,
      highlights: [
        'Shipped Saathi AI, a production voice financial counselor on Google Agent Development Kit serving 1,500+ users.',
        'Architected an orchestrator that routes queries to 6 domain sub agents, 4 of them RAG backed with ChromaDB.',
        'Built a self hosted Opik observability pipeline in the development environment, with LLM as judge evaluation scoring RAGAS style metrics via gemini-2.5-flash against a 109 item golden QA dataset. Opik 2.0.47.',
        'Wrote a custom LiveTurnTracer capturing per turn spans across the 4 RAG experts, feeding self hosted Opik.',
      ],
    },
    {
      title: 'AI Engineer Intern',
      company: 'GeniOS',
      period: 'Former',
      location: '',
      current: false,
      highlights: [
        'Founding AI engineer. Built an agentic reasoning pipeline with LangGraph and LangChain.',
        'Achieved 92% accuracy across 500+ users.',
      ],
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
