import type { ReactNode } from "react";
import { usePillar } from "../context/PillarContext";
import { pillars, type Pillar } from "../data/pillars";
import { pillarCssVar, pillarCssVarRgb } from "../data/pillarStyles";
import { useInView } from "../hooks/useInView";

const pillarIcons: Record<Pillar, ReactNode> = {
  backend: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <polyline points="11 14 5 20 11 26" />
      <polyline points="29 14 35 20 29 26" />
      <line x1="23" y1="8" x2="17" y2="32" />
    </svg>
  ),
  devops: (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="20" cy="20" r="8" />
      <path d="M20 4v5M20 31v5M4 20h5M31 20h5" />
      <circle cx="20" cy="20" r="3" fill="currentColor" stroke="none" />
    </svg>
  ),
  "ml-ai": (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="20" cy="8" r="4" />
      <circle cx="8" cy="32" r="4" />
      <circle cx="32" cy="32" r="4" />
      <line x1="20" y1="12" x2="8" y2="28" />
      <line x1="20" y1="12" x2="32" y2="28" />
      <line x1="8" y1="32" x2="32" y2="32" />
    </svg>
  ),
};

const pillarBadge: Record<Pillar, string> = {
  backend: "Systems & APIs",
  devops: "Cloud & Infra",
  "ml-ai": "Intelligence",
};

export function PillarSelector() {
  const { activePillar, setActivePillar } = usePillar();
  const { ref, isVisible } = useInView(0.15);

  return (
    <section id="pillars" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "var(--text-muted)" }}>
          Choose a lens
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center mb-4" style={{ color: "var(--text-primary)" }}>
          Three Sides, One Engineer
        </h2>
        <p className="text-center text-sm mb-16 max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
          Select a pillar to explore that dimension — or view everything at once.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const isActive = activePillar === p.id;
            const color = pillarCssVar[p.id];
            const colorRgb = pillarCssVarRgb[p.id];
            const isDimmed = activePillar !== null && !isActive;

            return (
              <button
                key={p.id}
                onClick={() => setActivePillar(isActive ? null : p.id)}
                className={`group relative text-left rounded-2xl border cursor-pointer transition-all duration-400 overflow-hidden project-card
                  ${isVisible ? "animate-fade-up" : "opacity-0"}
                  ${isDimmed ? "opacity-40" : "opacity-100"}`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  background: isActive
                    ? `rgba(${colorRgb}, 0.06)`
                    : "var(--surface-raised)",
                  borderColor: isActive
                    ? `rgba(${colorRgb}, 0.3)`
                    : "var(--border)",
                }}
              >
                {/* Colored top accent bar */}
                <div className="h-1.5" style={{ background: color }} />

                <div className="p-7">
                  {/* Icon + Badge row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `rgba(${colorRgb}, 0.1)`,
                        color: color,
                      }}
                    >
                      {pillarIcons[p.id]}
                    </div>
                    <span
                      className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold"
                      style={{
                        color: color,
                        background: `rgba(${colorRgb}, 0.08)`,
                        border: `1px solid rgba(${colorRgb}, 0.2)`,
                      }}
                    >
                      {pillarBadge[p.id]}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-xl mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {p.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
                    {p.tagline}
                  </p>

                  {/* CTA with arrow */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: color }}
                  >
                    {isActive ? "Selected" : "Explore"}
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* View All */}
        {activePillar && (
          <div className="text-center mt-8 animate-fade-in">
            <button
              onClick={() => setActivePillar(null)}
              className="text-sm tracking-wider uppercase transition-colors cursor-pointer"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              ← View all
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
