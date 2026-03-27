import type { Pillar } from "./pillars";

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  pillars: Pillar[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: "Stateable",
    role: "Software Engineer",
    period: "Jan 2025 – Present",
    highlights: [
      "0→1 full-stack SaaS platform: 56 API endpoints, real-time 5.5M-row data grid, Next.js + TypeScript",
      "Testing strategy from scratch: 330+ tests with per-file coverage thresholds in CI",
      "LLM agent system in production: persistent memory, configurable prompt pipelines, financial SaaS",
      "Serverless pipelines on AWS Lambda + Step Functions — batch jobs from hours to under 30 min",
      "ETL pipelines: Python + Airflow + AWS, 20% increase in data parsing efficiency",
      "40% improvement in release stability via Docker + GitLab CI/CD",
    ],
    pillars: ["backend", "devops", "ml-ai"],
    current: true,
  },
  {
    company: "University of Central Florida",
    role: "Software Engineer",
    period: "Jun 2024 – Dec 2024",
    highlights: [
      "Sole engineer on grading automation platform serving 2,000+ users per semester",
      "FastAPI + SQL backend + React.js + Next.js frontend — iterated on user feedback",
      "Saved 80+ hours of manual review per term",
      "Role-based access portal reducing runtime by 60%",
      "Shell scripting pipelines reducing manual intervention by 85%",
      "Power BI dashboards for institutional reporting and curriculum optimization",
    ],
    pillars: ["backend", "devops"],
  },
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    period: "Aug 2021 – Aug 2022",
    highlights: [
      "Migrated 10+ legacy SOAP APIs to Spring Boot microservices — 1M+ daily financial transactions at 99.5% uptime",
      "Reduced release cycles from 4 hours to 45 minutes via Azure DevOps + Jenkins CI/CD",
      "Reduced production defects 25% via JUnit/Mockito/Postman test suites",
      "Resolved 25+ critical regression defects across global engineering teams",
    ],
    pillars: ["backend", "devops"],
  },
  {
    company: "The Magic Data",
    role: "Data Modeler Intern",
    period: "Apr 2021 – Jul 2021",
    highlights: [
      "ETL pipeline in Python (Pandas) for waterbody sensor data",
      "Isolation Forest & One-Class SVM: 25% higher precision than previous methods",
      "Tableau dashboards improving decision-making speed by 30%",
    ],
    pillars: ["ml-ai"],
  },
];
