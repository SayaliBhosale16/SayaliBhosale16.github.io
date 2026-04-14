import type { Pillar } from "./pillars";

export interface Project {
  title: string;
  pillars: Pillar[];
  techStack: string[];
  description: string;
  metric: string;
  github?: string;
  details?: string[];
}

export const projects: Project[] = [
  {
    title: "Freight Analytics Engine",
    pillars: ["ml-ai", "backend", "devops"],
    techStack: ["Python", "FastAPI", "scikit-learn", "Docker", "SQLite", "GitHub Actions"],
    description:
      "Production-grade dual-model ML system for freight cost prediction and invoice risk flagging — with model versioning, automated retraining, and an observability dashboard.",
    metric: "R² 0.97 freight · F1 0.82 risk · 17 tests",
    github: "https://github.com/SayaliBhosale16/freight-invoice-ai-system",
    details: [
      "Dual-model design: Linear Regression for freight cost (MAE 24.11, R² 0.97) + Random Forest w/ GridSearchCV for invoice risk (F1 0.82, ROC-AUC 0.87, Precision 96%)",
      "JSON-based model registry with versioned artifacts — auto-promotes retrained models only when metrics exceed threshold",
      "FastAPI serving layer with single + batch endpoints, Pydantic schemas, and SQLite-backed prediction logging",
      "Observability dashboard at /dashboard with live prediction testers, hourly activity charts, and drift detection (2σ mean shift)",
      "SQL-based feature engineering (CTE aggregations across purchase orders) to flag PO/invoice mismatches and slow receiving",
      "Dockerized with docker-compose + GitHub Actions CI (lint, test, Docker build), 17 passing pytest tests",
    ],
  },
  {
    title: "RAG AI Agent",
    pillars: ["ml-ai", "backend"],
    techStack: ["FastAPI", "LlamaIndex", "Qdrant", "HuggingFace", "Inngest", "PyTorch"],
    description:
      "Fully local RAG pipeline that answers questions over uploaded PDFs — orchestrated with Inngest for event-driven ingestion, retries, and observability. No OpenAI required.",
    metric: "Local LLM · event-driven pipeline",
    github: "https://github.com/SayaliBhosale16/RAG-AI-Agent",
    details: [
      "End-to-end RAG: PDF → LlamaIndex SentenceSplitter (1000/200 overlap) → all-MiniLM-L6-v2 embeddings → Qdrant cosine search → Qwen2.5-1.5B-Instruct answer generation",
      "Inngest orchestrates the ingest + query pipelines with step functions, automatic retries, and a dashboard for monitoring runs",
      "FastAPI REST endpoints for upload, query, and document clearing — plus a dark-themed single-page frontend",
      "Runs entirely on local GPU (MPS/CUDA) — no third-party LLM API keys or OpenAI dependency",
      "Source-grounded answers with file references returned alongside each response",
    ],
  },
  {
    title: "IoT Anomaly Detection",
    pillars: ["ml-ai", "backend"],
    techStack: ["Python", "FastAPI", "scikit-learn", "MongoDB", "Tableau"],
    description:
      "Trained Isolation Forest & One-Class SVM on real-world IoT sensor data. Exposed inference via FastAPI REST endpoint + Tableau dashboards.",
    metric: "Full build-to-deploy ML pipeline",
    details: [
      "Full feature engineering lifecycle — cleaning, normalization, Z-score filtering, IQR-based outlier removal",
      "Evaluated multiple unsupervised learning approaches, selected best model on false-positive reduction",
      "FastAPI REST endpoint for real-time inference with sub-200ms response time",
      "Tableau dashboards for visual anomaly tracking and decision support",
      "25% higher precision than previous detection methods",
    ],
  },
  {
    title: "Real-Time Crypto Analytics",
    pillars: ["backend", "devops"],
    techStack: ["TypeScript", "Spring Boot", "React.js", "Kafka", "Docker"],
    description:
      "Kafka-driven microservices ingesting 50+ events/sec with React.js live dashboard deployed in Docker.",
    metric: "50+ events/sec real-time ingestion",
    details: [
      "Event-driven microservice architecture with Apache Kafka message broker",
      "Spring Boot consumers processing and aggregating market data in real-time",
      "React.js live dashboard with WebSocket updates for market trend monitoring",
      "Dockerized deployment with docker-compose for multi-service orchestration",
      "End-to-end ownership — from data ingestion to interactive visualization",
    ],
  },
  {
    title: "Automated Cold Email Generator",
    pillars: ["ml-ai", "backend"],
    techStack: ["Flask", "Llama 3.1", "ChromaDB", "React Native", "Docker"],
    description:
      "LLM-based cold email generator with semantic search and transfer learning.",
    metric: "95% relevance · 60% less manual drafting",
    github: "https://github.com/SayaliBhosale16/Cold-Email-Generator-Tool",
    details: [
      "RAG pipeline using ChromaDB for semantic search over client portfolio data",
      "Llama 3.1 with transfer learning for domain-specific email generation",
      "95% relevance score in semantic search matching",
      "60% reduction in manual email drafting time",
      "React Native mobile frontend + Flask API backend, Dockerized deployment",
    ],
  },
  {
    title: "Student Retention Analytics",
    pillars: ["ml-ai", "devops"],
    techStack: ["Python", "Airflow", "SQL", "Power BI", "Logistic Regression"],
    description:
      "Automated Airflow pipeline collecting daily LMS + advising data. Logistic regression to identify at-risk students.",
    metric: "35% improvement in early-risk detection",
    details: [
      "Apache Airflow DAGs for daily automated data collection from LMS APIs + advising databases",
      "SQL transformations and feature engineering for student risk scoring",
      "Logistic regression model trained on historical dropout patterns",
      "Power BI dashboards tracking retention trends for academic advisors",
      "35% improvement in early identification of at-risk students",
    ],
  },
  {
    title: "World Trade Route Analytics",
    pillars: ["backend", "ml-ai"],
    techStack: ["Python", "NetworkX", "PageRank", "Dijkstra", "Pandas"],
    description:
      "Network optimization on 18K+ global bilateral trade data. PageRank + Dijkstra for critical trade hub identification.",
    metric: "94% accuracy in bottleneck prediction",
    github: "https://github.com/SayaliBhosale16/TradeRouteAnalyzer-",
    details: [
      "Graph-based analysis on 18K+ bilateral trade relationships",
      "PageRank algorithm to identify critical trade hub nations",
      "Dijkstra's shortest path for optimal trade route calculation",
      "65% reduction in economic impact assessment time",
      "94% accuracy in predicting trade bottlenecks and vulnerabilities",
    ],
  },
  {
    title: "Civil Complaints Management System",
    pillars: ["ml-ai"],
    techStack: ["Python", "ML", "NLP", "Published Research"],
    description:
      "Published in IRJET 2021, cited 10+ times. ML-based complaint classification and routing.",
    metric: "Published & cited 10+ times",
    github: "https://github.com/SayaliBhosale16/ComplaintsWizard",
    details: [
      "Published research paper in International Research Journal of Engineering and Technology (IRJET)",
      "ML-based complaint classification using NLP opinion mining",
      "Automated routing of complaints to appropriate departments",
      "GUI-based system for end-user accessibility",
      "Cited 10+ times in subsequent academic work",
    ],
  },
  {
    title: "NYC Airbnb Data Analysis",
    pillars: ["ml-ai", "backend"],
    techStack: ["Python", "Pandas", "scikit-learn", "Tableau", "EDA"],
    description:
      "Exploratory data analysis + ML modeling + Tableau dashboard for NYC Airbnb market insights.",
    metric: "End-to-end EDA → ML → visualization",
    github: "https://github.com/SayaliBhosale16/NYC-Airbnb-Data-Analysis",
    details: [
      "Comprehensive EDA on NYC Airbnb listings — pricing trends, location analysis, host patterns",
      "Feature engineering and ML modeling for price prediction",
      "Tableau interactive dashboards for market insight visualization",
      "Full data science lifecycle: raw data → cleaning → analysis → modeling → reporting",
    ],
  },
  {
    title: "Employee Management System",
    pillars: ["backend"],
    techStack: ["Spring Boot", "React.js", "REST APIs", "MySQL"],
    description:
      "Full-stack CRUD application with Spring Boot backend and React frontend.",
    metric: "Full-stack REST API architecture",
    github: "https://github.com/SayaliBhosale16/Employee-Management-System-FullStack",
    details: [
      "Spring Boot REST API with full CRUD operations",
      "React.js frontend with component-based architecture",
      "MySQL database with relational data modeling",
      "End-to-end full-stack implementation demonstrating MVC pattern",
    ],
  },
  {
    title: "Real-Time Group Chat",
    pillars: ["backend", "devops"],
    techStack: ["Spring Boot", "WebSockets", "HTML/CSS", "JavaScript"],
    description:
      "Real-time WebSocket-based group chat with Spring Boot backend.",
    metric: "Real-time bidirectional communication",
    github: "https://github.com/SayaliBhosale16/GroupChat",
    details: [
      "Spring Boot WebSocket server with STOMP protocol",
      "Real-time bidirectional communication between multiple clients",
      "Message broadcasting and user presence tracking",
      "Responsive frontend with vanilla JavaScript WebSocket client",
    ],
  },
];
