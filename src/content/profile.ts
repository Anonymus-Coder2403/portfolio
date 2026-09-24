export const profile = {
  name: 'Yash Kumar',
  role: 'AI Engineer',
  positioning: 'AI Engineer',
  heroHeadline: 'I build and optimize agentic systems in production.',
  tagline:
    'AI Engineer at PayNearby, shipping Saathi, a production voice agent on ' +
    'Google ADK serving 1,500+ users. Former founding AI engineer at GeniOS. ' +
    'Building agentic systems and the evaluation that proves they work.',
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

  currently: {
    building: {
      eyebrow: 'Building',
      role: 'Saathi at PayNearby',
      description:
        'A production voice financial counselor on Google ADK. A root orchestrator ' +
        'routes each query to five RAG backed domain sub agents, with a self hosted ' +
        'Opik stack scoring an LLM as judge against a 109 item golden QA dataset.',
      tags: ['Google ADK', 'Gemini', 'Opik', 'FastAPI', 'Cloud Run'],
    },
    shipping: {
      eyebrow: 'Shipping',
      role: 'Carryover',
      description:
        'Paste a dying AI chat and it extracts a structured context capsule, the ' +
        'decisions, the approaches that failed and why, the threads still open, then ' +
        'renders a resume prompt for the next session. Ships an MCP server so ' +
        'assistants save and load capsules themselves.',
      tags: ['FastAPI', 'SQLite', 'MCP', 'Gemini', 'Render'],
      href: 'https://carryover-kxq7.onrender.com/',
      repo: 'https://github.com/Anonymus-Coder2403/carryover',
    },
  },

  experience: [
    {
      company: 'PayNearby',
      role: 'AI Engineer',
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
      role: 'AI Engineer',
      dateRange: 'Oct – Dec 2025',
      tagline: 'Founding AI engineer. Agentic reasoning pipeline with LangGraph.',
      bullets: [
        'Founding AI engineer. Built an agentic reasoning pipeline with LangGraph and LangChain.',
        'Achieved 92% accuracy across 500+ users.',
      ],
      caseStudies: [] as { label: string; href: string }[],
    },
  ],

  achievements: [
    {
      placing: 'Winner, 1st Prize',
      event: 'Qubit Quest 2025 · Esya IIITD',
      href: 'https://www.linkedin.com/posts/yashcoder2403_hackathon-quantumcomputing-quantumcoding-activity-7369486836810932224-0NyW',
      detail: 'AI in Quantum Computing. IIIT Delhi, Sep 2025.',
    },
    {
      placing: 'Runner up',
      event: 'Airtribe x Render Ship Room · Bengaluru',
      href: 'https://www.linkedin.com/posts/yashcoder2403_carryovermcp-contexthandoff-aiengineering-activity-7505105714252787713-r-b7',
      detail: 'Built Carryover, a context handoff tool for coding agents, in two hours.',
    },
    {
      placing: 'AI Speaker',
      event: 'Rox Community Event · Bengaluru',
      href: 'https://www.linkedin.com/posts/yashcoder2403_contextengineering-googleadk-llmops-activity-7482278896659357696-ULuN',
      detail: 'Context Engineering Is a Data Engineering Problem, Not an AI Problem.',
    },
    {
      placing: 'Top 288 of 1,200+ teams',
      event: 'HackShastra · Noida',
      href: 'https://www.linkedin.com/posts/yashcoder2403_hackshastra2025-hackathon-cybersentinel-activity-7375490205497167872-BdaO',
      detail: 'CyberSentinel, an AI scam shield for calls, SMS and WhatsApp. Oct 2025.',
    },
    {
      placing: 'Top 13',
      event: 'HackChrono',
      detail: 'Agro Crew, an organic farm marketplace.',
    },
    {
      placing: 'Stage presenter',
      event: 'GDG Cloud New Delhi',
      href: 'https://www.linkedin.com/posts/yashcoder2403_bwaiapldlehi-geminiai-fastapi-activity-7457441495478902784-1iq6',
      detail: '',
    },
  ] as { placing: string; event: string; href?: string; detail: string }[],

  skills: {
    languages: ['Python', 'C++', 'Java', 'SQL'],
    aiMl: ['LangChain', 'LangGraph', 'Google ADK', 'RAG', 'Gemini', 'Opik', 'ChromaDB'],
    backend: ['FastAPI', 'OpenCV'],
    data: ['PostgreSQL', 'MySQL', 'ClickHouse'],
    infra: ['GCP', 'Docker', 'Git'],
  },
} as const
