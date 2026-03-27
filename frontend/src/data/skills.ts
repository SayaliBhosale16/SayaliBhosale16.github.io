import type { Pillar } from "./pillars";

export interface SkillGroup {
  category: string;
  items: string[];
  pillars: Pillar[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript (ES6+)", "JavaScript", "Java", "SQL", "C#", ".NET", "C++", "HTML/CSS", "R"],
    pillars: ["backend", "devops", "ml-ai"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Node.js", "Express", "React Native", "Tailwind CSS"],
    pillars: ["backend"],
  },
  {
    category: "Backend",
    items: [
      "FastAPI", "Flask", "Spring Boot", "REST APIs", "gRPC", "WebSockets",
      "Microservices", "Service-Oriented Architecture", "Distributed Systems", "Design Patterns",
      "OAuth2 / JWT", "RBAC",
    ],
    pillars: ["backend"],
  },
  {
    category: "AI & ML",
    items: [
      "LangChain", "LLM Agent Systems", "RAG Pipelines", "Prompt Engineering",
      "ChromaDB", "HuggingFace", "Llama 3.1",
      "Claude Code (Anthropic)", "Cursor",
      "Scikit-learn", "Keras", "Transfer Learning", "Fine-Tuning",
      "Anomaly Detection", "NLP (NLTK, spaCy)", "Classification & Regression",
      "Model Evaluation & Selection",
    ],
    pillars: ["ml-ai"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (Lambda, Step Functions, EC2, S3, RDS, Redshift)", "Azure (AI-102 certified)",
      "Docker", "Kubernetes", "Terraform",
      "GitLab CI/CD", "GitHub Actions", "Jenkins", "Azure DevOps",
      "Apache Airflow", "Apache Kafka",
      "Prometheus", "Grafana",
    ],
    pillars: ["devops"],
  },
  {
    category: "Databases & Data",
    items: [
      "PostgreSQL", "MongoDB", "Redis", "MySQL", "SQL Server", "Snowflake", "NoSQL",
      "ETL Pipelines", "Star & Snowflake Schema", "Dimension Data Modeling", "Data Quality",
    ],
    pillars: ["backend", "devops"],
  },
  {
    category: "Analytics & BI",
    items: ["Power BI", "DAX", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SAS", "SPSS"],
    pillars: ["ml-ai"],
  },
  {
    category: "Testing & Quality",
    items: ["Vitest", "Playwright", "MSW", "pytest", "JUnit", "Mockito", "Postman", "CI/CD Test Automation"],
    pillars: ["backend", "devops"],
  },
];
