/** Maps skill display names to Simple Icons slugs + brand colors */
export const skillIconMap: Record<string, { slug: string; color: string }> = {
  // Languages
  "Python": { slug: "python", color: "3776AB" },
  "TypeScript (ES6+)": { slug: "typescript", color: "3178C6" },
  "JavaScript": { slug: "javascript", color: "F7DF1E" },
  "Java": { slug: "openjdk", color: "ED8B00" },
  "C#": { slug: "csharp", color: "512BD4" },
  ".NET": { slug: "dotnet", color: "512BD4" },
  "C++": { slug: "cplusplus", color: "00599C" },
  "HTML/CSS": { slug: "html5", color: "E34F26" },
  "R": { slug: "r", color: "276DC3" },

  // Frontend
  "React.js": { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "888888" },
  "Node.js": { slug: "nodedotjs", color: "339933" },
  "Express": { slug: "express", color: "888888" },
  "React Native": { slug: "react", color: "61DAFB" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },

  // Backend
  "FastAPI": { slug: "fastapi", color: "009688" },
  "Flask": { slug: "flask", color: "888888" },
  "Spring Boot": { slug: "springboot", color: "6DB33F" },
  "REST APIs": { slug: "openapiinitiative", color: "6BA539" },
  "gRPC": { slug: "grpc", color: "244C5A" },
  "WebSockets": { slug: "socketdotio", color: "888888" },

  // AI & ML
  "Claude Code (Anthropic)": { slug: "anthropic", color: "888888" },
  "Cursor": { slug: "cursor", color: "888888" },
  "LangChain": { slug: "langchain", color: "1C3C3C" },
  "ChromaDB": { slug: "chroma", color: "FF6446" },
  "HuggingFace": { slug: "huggingface", color: "FFD21E" },
  "Llama 3.1": { slug: "meta", color: "0467DF" },
  "Scikit-learn": { slug: "scikitlearn", color: "F7931E" },
  "Keras": { slug: "keras", color: "D00000" },

  // Cloud & DevOps
  "AWS (Lambda, Step Functions, EC2, S3, RDS, Redshift)": { slug: "amazonwebservices", color: "FF9900" },
  "Azure (AI-102 certified)": { slug: "microsoftazure", color: "0078D4" },
  "Docker": { slug: "docker", color: "2496ED" },
  "Kubernetes": { slug: "kubernetes", color: "326CE5" },
  "GitLab CI/CD": { slug: "gitlab", color: "FC6D26" },
  "Jenkins": { slug: "jenkins", color: "D24939" },
  "GitHub Actions": { slug: "githubactions", color: "2088FF" },
  "Azure DevOps": { slug: "azuredevops", color: "0078D7" },
  "Apache Airflow": { slug: "apacheairflow", color: "017CEE" },
  "Apache Kafka": { slug: "apachekafka", color: "888888" },
  "Terraform": { slug: "terraform", color: "844FBA" },
  "Prometheus": { slug: "prometheus", color: "E6522C" },
  "Grafana": { slug: "grafana", color: "F46800" },

  // Databases
  "PostgreSQL": { slug: "postgresql", color: "4169E1" },
  "MongoDB": { slug: "mongodb", color: "47A248" },
  "Redis": { slug: "redis", color: "FF4438" },
  "MySQL": { slug: "mysql", color: "4479A1" },
  "SQL Server": { slug: "microsoftsqlserver", color: "CC2927" },
  "Snowflake": { slug: "snowflake", color: "29B5E8" },

  // Analytics
  "Power BI": { slug: "powerbi", color: "F2C811" },
  "Tableau": { slug: "tableau", color: "E97627" },
  "Pandas": { slug: "pandas", color: "888888" },
  "NumPy": { slug: "numpy", color: "4DABCF" },
  "Matplotlib": { slug: "plotly", color: "3F4F75" },
  "Excel": { slug: "microsoftexcel", color: "217346" },

  // Testing
  "Vitest": { slug: "vitest", color: "6E9F18" },
  "Playwright": { slug: "playwright", color: "2EAD33" },
  "pytest": { slug: "pytest", color: "0A9EDC" },
  "JUnit": { slug: "junit5", color: "25A162" },
  "Postman": { slug: "postman", color: "FF6C37" },
};

export function getIconUrl(skillName: string): string | null {
  const entry = skillIconMap[skillName];
  if (!entry) return null;
  return `https://cdn.simpleicons.org/${entry.slug}/${entry.color}`;
}

export function getIconColor(skillName: string): string {
  const entry = skillIconMap[skillName];
  return entry ? `#${entry.color}` : "var(--accent)";
}
