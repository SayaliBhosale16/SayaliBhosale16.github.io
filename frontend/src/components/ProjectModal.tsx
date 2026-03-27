import { useEffect } from "react";
import type { Project } from "../data/projects";
import { pillarCssVar, pillarLabel } from "../data/pillarStyles";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in"
        style={{ background: "rgba(0, 0, 0, 0.6)", backdropFilter: "blur(8px)" }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border animate-fade-up"
        style={{
          background: "var(--surface-raised)",
          borderColor: "var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          style={{ color: "var(--text-muted)", background: "var(--surface)" }}
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {/* Pillar tags */}
          <div className="flex gap-2 mb-4">
            {project.pillars.map((pid) => (
              <span
                key={pid}
                className="text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
                style={{
                  color: pillarCssVar[pid],
                  background: `color-mix(in srgb, ${pillarCssVar[pid]} 10%, transparent)`,
                }}
              >
                {pillarLabel[pid]}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="font-display font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            {project.title}
          </h3>

          {/* Metric highlight */}
          <p className="text-sm font-medium mb-6" style={{ color: "var(--accent)" }}>
            {project.metric}
          </p>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.description}
          </p>

          {/* Details */}
          {project.details && (
            <div className="mb-8">
              <h4
                className="text-xs tracking-[0.2em] uppercase mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                Key Details
              </h4>
              <ul className="space-y-3">
                {project.details.map((detail, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed pl-5 relative"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="absolute left-0 top-[2px] w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)", opacity: 0.5 }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-6">
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-3 py-1.5 rounded-lg border"
                  style={{
                    color: "var(--text-primary)",
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* GitHub link */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: "var(--accent)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
