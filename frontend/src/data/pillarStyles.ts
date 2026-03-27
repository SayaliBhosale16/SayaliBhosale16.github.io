import type { Pillar } from "./pillars";

export const pillarCssVar: Record<Pillar, string> = {
  backend: "var(--pillar-backend)",
  devops: "var(--pillar-devops)",
  "ml-ai": "var(--pillar-mlai)",
};

export const pillarCssVarRgb: Record<Pillar, string> = {
  backend: "var(--pillar-backend-rgb)",
  devops: "var(--pillar-devops-rgb)",
  "ml-ai": "var(--pillar-mlai-rgb)",
};

export const pillarLabel: Record<Pillar, string> = {
  backend: "Backend",
  devops: "DevOps",
  "ml-ai": "AI Engineer",
};
