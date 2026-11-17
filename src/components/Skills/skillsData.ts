import type { SkillsData } from "./types";

export const defaultSkillsData: SkillsData = {
  eyebrow: "02 / SKILLS & EXPERTISE",
  title: "Architecting backend systems, AI workflows & full-stack apps.",
  subtitle:
    "With 2+ years of hands-on experience and 4+ shipped production applications, I specialize in distributed server architectures, AI/LLM integrations, optimized databases, and clean client experiences.",
  tiles: [
    {
      id: "backend",
      eyebrow: "01 // CORE SPECIALIZATION",
      title: "Backend & System Architecture",
      description:
        "Building resilient, low-latency microservices, stateless authentication, and scalable APIs that stay dependable under heavy load.",
      metricBadge: "Low Latency • REST & Real-Time",
      groups: [
        {
          label: "Runtimes & Frameworks",
          items: ["Node.js", "Express.js", "Python / FastAPI", "TypeScript"],
        },
        {
          label: "API Architecture & Protocols",
          items: ["RESTful APIs", "GraphQL", "WebSockets", "Microservices"],
        },
        {
          label: "Security & Access",
          items: ["JWT & OAuth 2.0", "Role-Based Access", "Rate Limiting", "Middleware"],
        },
      ],
    },
    {
      id: "ai",
      eyebrow: "02 // INTELLIGENT SYSTEMS",
      title: "AI & LLM Engineering",
      description:
        "Building intelligent agent workflows, RAG pipelines, streaming API responses, and vector-backed semantic search.",
      metricBadge: "Streaming APIs • RAG & Agentic Workflows",
      groups: [
        {
          label: "Inference & APIs",
          items: ["Groq API", "Streaming (SSE)", "Prompt Engineering"],
        },
        {
          label: "RAG & Vector Search",
          items: ["pgvector", "Vector Embeddings", "Semantic Search", "RAG Pipelines"],
        },
        {
          label: "Agents & Workflows",
          items: ["Function Calling", "LangChain / LlamaIndex", "Autonomous Workflows"],
        },
      ],
    },
    {
      id: "database",
      eyebrow: "03 // DATA & STORAGE",
      title: "Databases & In-Memory Caching",
      description:
        "Designing normalized relational models, document storage, and high-throughput caching strategies.",
      metricBadge: "ACID Compliant • Sub-ms Cache Hits",
      groups: [
        {
          label: "SQL & Relational",
          items: ["PostgreSQL", "SQL Optimization", "Indexing"],
        },
        {
          label: "NoSQL & Document",
          items: ["MongoDB", "Schema Modeling"],
        },
        {
          label: "Cache & ORM",
          items: ["Redis", "Prisma ORM", "Migrations"],
        },
      ],
    },
    {
      id: "devops",
      eyebrow: "04 // INFRASTRUCTURE & TOOLS",
      title: "DevOps & Deployment Pipelines",
      description:
        "Streamlining containerized environments, automated testing, version control, and production releases.",
      metricBadge: "Docker Containerized • Automated CI/CD",
      groups: [
        {
          label: "Containers & OS",
          items: ["Docker", "Linux / Bash", "Nginx"],
        },
        {
          label: "Pipelines, Hosting & Git",
          items: ["Git & GitHub", "Vercel", "GitHub Actions", "CI/CD"],
        },
        {
          label: "Testing & Workflows",
          items: ["Playwright (E2E)", "Vitest / Jest", "Postman", "Notion"],
        },
      ],
    },
    {
      id: "frontend",
      eyebrow: "05 // CLIENT SURFACES",
      title: "Modern Frontend Engineering",
      description:
        "Bridging backend services to reactive, accessible interfaces that feel instant and effortless to use.",
      metricBadge: "100% Type-Safe • Fast Rendering",
      groups: [
        {
          label: "Core UI & Frameworks",
          items: ["React 19", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5 & CSS3"],
        },
        {
          label: "State & Data Fetching",
          items: ["TanStack Query", "Zustand / Redux", "Vite"],
        },
        {
          label: "Styling & Design",
          items: ["Tailwind CSS v4", "DaisyUI", "Figma", "Micro-Interactions"],
        },
      ],
    },
  ],
  philosophy: {
    title: "Engineering Standard",
    description:
      "A great user experience starts with a rock-solid backend. I engineer for data integrity, predictable API contracts, graceful error recovery, and modular architecture that scales effortlessly as product demands grow.",
  },
};
