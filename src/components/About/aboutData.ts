import type { QuickFact, ShippedProjectSummary } from "./types";

export const aboutData = {
  eyebrow: "01 / ABOUT ME",
  title: "Engineering resilient backend systems & scalable full-stack products.",
  openingLine:
    "Final-year Information Science student in Addis Ababa & full-stack engineer, specializing in robust backend architectures, distributed APIs, and intelligent AI applications.",

  story: [
    "I'm a final-year Information Science student based in Addis Ababa and an active project team member in our university department. Over the past 2+ years of full-stack engineering, I've focused intensely on backend architecture, database modeling, and building resilient systems that handle real-world demands.",
    "My work includes engineering the AAU AI Assistant chatbot system for our university community and building PulseChat (a high-concurrency real-time chat application powered by WebSockets). Whether designing low-latency REST/GraphQL APIs or structuring optimized SQL schemas, I thrive on turning complex requirements into fast, dependable software.",
  ],

  lookingFor:
    "Open to backend or full-stack software engineering roles, new graduate positions, and high-impact distributed architecture projects.",

  humanTouch:
    "Following tech architecture podcasts, exploring cinematography and typography, or playing strategic chess games.",

  quickFacts: [
    {
      label: "Education",
      value: "Final-Year Info Science (AAU)",
      iconName: "education",
    },
    {
      label: "Experience",
      value: "2+ Years (Backend-Focused)",
      iconName: "experience",
    },
    {
      label: "Projects Shipped",
      value: "4+ Apps (AAU AI, PulseChat)",
      iconName: "projects",
    },
    {
      label: "Department Role",
      value: "Active Project Team Member",
      iconName: "focus",
    },
    {
      label: "Location",
      value: "Addis Ababa, Ethiopia (Remote)",
      iconName: "location",
    },
    {
      label: "Availability",
      value: "Open to Full-Time & Grad Roles",
      iconName: "availability",
    },
  ] as QuickFact[],

  shippedProjects: [
    {
      id: "aau-ai",
      name: "AAU AI Assistant",
      tagline: "Academic AI Platform & Vector RAG Pipeline",
      category: "Intelligent Systems",
      status: "Active Deployment",
      techStack: ["FastAPI", "Groq API"],
    },
    {
      id: "pulsechat",
      name: "PulseChat",
      tagline: "Distributed Real-Time WebSocket Messaging",
      category: "Real-Time Systems",
      status: "Live Engine",
      techStack: ["Node.js", "WebSockets", "Redis Pub/Sub", "PostgreSQL"],
    },
  ] as ShippedProjectSummary[],

  primaryCtaText: "Download Resume",
  secondaryCtaText: "Get in touch",
};
