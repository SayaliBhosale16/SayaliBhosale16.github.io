import { useState } from "react";
import { usePillar } from "../context/PillarContext";
import { skills } from "../data/skills";
import { getIconUrl } from "../data/skillIcons";
import { SectionHeading } from "./SectionHeading";
import { useInView } from "../hooks/useInView";

const INITIAL_VISIBLE = 4;

export function Skills() {
  const { activePillar } = usePillar();
  const { ref, isVisible } = useInView(0.1);
  const [showAll, setShowAll] = useState(false);

  const filtered = activePillar
    ? skills.filter((g) => g.pillars.includes(activePillar))
    : skills;

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE;

  return (
    <section id="skills" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01" label="stack" title="Technical Arsenal" />

        <div className="space-y-14">
          {visible.map((group, gi) => (
            <div
              key={group.category}
              className={isVisible ? "animate-fade-up" : "opacity-0"}
              style={{ animationDelay: `${gi * 0.08}s` }}
            >
              <h3
                className="font-display font-extrabold text-xl md:text-2xl uppercase tracking-wide mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const iconUrl = getIconUrl(skill);
                  return (
                    <span
                      key={skill}
                      className="skill-pill flex items-center gap-3 px-5 py-3 text-[15px] font-medium rounded-2xl border"
                      style={{
                        background: "var(--surface-raised)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {iconUrl ? (
                        <img src={iconUrl} alt="" width="24" height="24" loading="lazy" />
                      ) : (
                        <span
                          className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold"
                          style={{
                            background: "rgba(var(--accent-rgb), 0.15)",
                            color: "var(--accent)",
                          }}
                        >
                          {skill.slice(0, 2)}
                        </span>
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less toggle */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-medium px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer"
              style={{
                color: "var(--accent)",
                borderColor: "rgba(var(--accent-rgb), 0.25)",
                background: "rgba(var(--accent-rgb), 0.04)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb), 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.04)";
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb), 0.25)";
              }}
            >
              {showAll ? "Show less ↑" : `Show all ${filtered.length} categories ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
