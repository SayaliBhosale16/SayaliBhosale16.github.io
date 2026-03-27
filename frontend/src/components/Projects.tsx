import { useState } from "react";
import { usePillar } from "../context/PillarContext";
import { projects, type Project } from "../data/projects";
import { pillarCssVar, pillarLabel } from "../data/pillarStyles";
import { SectionHeading } from "./SectionHeading";
import { ProjectModal } from "./ProjectModal";
import { useInView } from "../hooks/useInView";

export function Projects() {
  const { activePillar } = usePillar();
  const { ref, isVisible } = useInView(0.1);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activePillar
    ? projects.filter((p) => p.pillars.includes(activePillar))
    : projects;

  return (
    <section id="projects" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="03"
          label="projects"
          title="Featured Work"
          description="Proof of range — from ML pipelines to real-time systems. Click any card for details."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`project-card rounded-2xl p-7 border cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{
                animationDelay: `${i * 0.08}s`,
                background: "var(--surface-raised)",
                borderColor: "var(--border)",
              }}
              onClick={() => setSelected(project)}
            >
              {/* Top row: pillar tags + github link */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2">
                  {project.pillars.map((pid) => (
                    <span
                      key={pid}
                      className="text-[11px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                      style={{
                        color: pillarCssVar[pid],
                        background: `color-mix(in srgb, ${pillarCssVar[pid]} 10%, transparent)`,
                      }}
                    >
                      {pillarLabel[pid]}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ color: "var(--text-muted)" }}
                    aria-label={`${project.title} on GitHub`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3
                className="font-display font-bold text-xl mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-lg border"
                    style={{
                      color: "var(--text-muted)",
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key metric */}
              <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                ↳ {project.metric}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
