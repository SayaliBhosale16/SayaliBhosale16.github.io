import type { Pillar } from "./pillars";

export interface SkillGroup {
  category: string;
  items: string[];
  pillars: Pillar[];
}

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript (ES6+)", "JavaScript", "Java", "SQL", "C++", "HTML/CSS"],
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
      "FastAPI", "Flask", "Spring Boot", "REST APIs", "gRPC", "WebSockets", "Pydantic",
      "Microservices", "Service-Oriented Architecture", "Distributed Systems", "Design Patterns",
      "OAuth2 / JWT", "RBAC",
    ],
    pillars: ["backend"],
  },
  {
    category: "LLMs, RAG & Agents",
    items: [
      "LangChain", "LlamaIndex", "LLM Agent Systems", "Agentic AI", "RAG Pipelines",
      "Prompt Engineering", "Fine-Tuning", "Transfer Learning",
      "ChromaDB", "Qdrant", "HuggingFace", "Sentence Transformers", "Word Embeddings",
      "Llama 3.1", "Qwen 2.5",
      "Claude Code (Anthropic)", "Cursor", "Inngest",
    ],
    pillars: ["ml-ai"],
  },
  {
    category: "Machine Learning & NLP",
    items: [
      "Scikit-learn", "PyTorch", "Keras",
      "Deep Learning", "Neural Networks",
      "Feature Engineering", "Hyperparameter Tuning (GridSearchCV)", "Cross-Validation",
      "Ensemble Methods", "Random Forest", "Gradient Boosting",
      "Classification & Regression", "Anomaly Detection",
      "Model Evaluation & Selection", "MLOps (Model Registry, Drift Detection)",
      "NLP (NLTK, spaCy)", "Text Classification", "Sentiment Analysis",
      "Named Entity Recognition", "TF-IDF", "Tokenization", "Transformers",
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
