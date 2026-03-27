export type Pillar = "backend" | "devops" | "ml-ai";

export interface PillarConfig {
  id: Pillar;
  title: string;
  tagline: string;
  accent: string;
}

export const pillars: PillarConfig[] = [
  {
    id: "backend",
    title: "Backend Engineer",
    tagline: "APIs · Microservices · Distributed Systems",
    accent: "teal",
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    tagline: "CI/CD · Cloud · Containerization · IaC",
    accent: "purple",
  },
  {
    id: "ml-ai",
    title: "AI Engineer",
    tagline: "LLM Agents · RAG · Anomaly Detection · NLP",
    accent: "amber",
  },
];
