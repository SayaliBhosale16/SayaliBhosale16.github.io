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
