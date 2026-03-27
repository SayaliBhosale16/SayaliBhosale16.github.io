import { usePillar } from "../context/PillarContext";
import { experience } from "../data/experience";
import { pillarCssVar, pillarLabel } from "../data/pillarStyles";
import { SectionHeading } from "./SectionHeading";
import { useInView } from "../hooks/useInView";

export function Experience() {
  const { activePillar } = usePillar();
  const { ref, isVisible } = useInView(0.1);

  const filtered = activePillar
    ? experience.filter((e) => e.pillars.includes(activePillar))
    : experience;

  return (
    <section id="experience" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" label="experience" title="Career Timeline" />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, var(--accent), var(--text-faint), var(--border))",
            }}
          />

          <div className="space-y-8">
            {filtered.map((exp, i) => {
              const isCurrent = exp.current;
              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className={`relative md:pl-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 hidden md:block"
                    style={{
                      borderColor: isCurrent ? "var(--accent)" : "var(--text-faint)",
                      background: "var(--surface)",
                    }}
                  >
                    <div
                      className="absolute inset-[3px] rounded-full"
                      style={{ background: isCurrent ? "var(--accent)" : "var(--text-faint)" }}
                    />
                    {/* Pulse ring for current */}
                    {isCurrent && (
                      <div
                        className="absolute -inset-1 rounded-full"
                        style={{
                          border: "1px solid var(--accent)",
                          animation: "pulse-glow 2s ease-in-out infinite",
                        }}
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className="project-card rounded-2xl border overflow-hidden"
                    style={{
                      background: "var(--surface-raised)",
                      borderColor: isCurrent ? "rgba(var(--accent-rgb), 0.25)" : "var(--border)",
                    }}
                  >
                    {/* Accent top bar for current role */}
                    {isCurrent && (
                      <div className="h-1" style={{ background: "var(--accent)" }} />
                    )}

                    <div className={isCurrent ? "p-7 md:p-8" : "p-7"}>
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3
                              className={`font-display font-bold ${isCurrent ? "text-2xl" : "text-xl"}`}
                              style={{ color: "var(--text-primary)" }}
                            >
                              {exp.role}
                            </h3>
                            {isCurrent && (
                              <span
                                className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full font-semibold"
                                style={{
                                  color: "var(--accent)",
                                  background: "rgba(var(--accent-rgb), 0.12)",
                                  border: "1px solid rgba(var(--accent-rgb), 0.25)",
                                }}
                              >
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm shrink-0" style={{ color: "var(--text-muted)" }}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.highlights.map((h, hi) => (
                          <li
                            key={hi}
                            className="text-sm leading-relaxed pl-5 relative"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            <span
                              className="absolute left-0 top-0"
                              style={{ color: "var(--text-faint)" }}
                            >
                              –
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Pillar tags */}
                      <div className="flex gap-2 flex-wrap">
                        {exp.pillars.map((pid) => (
                          <span
                            key={pid}
                            className="text-[11px] tracking-wider uppercase px-3 py-1 rounded-full border"
                            style={{
                              color: pillarCssVar[pid],
                              borderColor: pillarCssVar[pid],
                              opacity: 0.7,
                            }}
                          >
                            {pillarLabel[pid]}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
