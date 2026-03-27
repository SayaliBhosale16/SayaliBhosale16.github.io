import { useInView } from "../hooks/useInView";

const currentItems = [
  "Shipping production features at Stateable",
  "AI-native development with Claude Code",
  "Building this portfolio end-to-end",
];

export function About() {
  const { ref, isVisible } = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Left — Statement */}
          <div>
            <p
              className="text-xs tracking-[0.25em] uppercase mb-4 font-mono"
              style={{ color: "var(--accent)" }}
            >
              About
            </p>
            <blockquote
              className="font-display text-xl md:text-2xl font-medium leading-relaxed"
              style={{ color: "var(--text-primary)" }}
            >
              "I don't just write code — I own outcomes. From a 0→1 SaaS platform
              with 56 endpoints to an LLM agent system in production, I ship fast,
              test thoroughly, and build with AI tools as a first instinct, not an afterthought."
            </blockquote>
          </div>

          {/* Right — Terminal */}
          <div
            className="rounded-2xl border overflow-hidden"
            style={{
              background: "var(--surface-raised)",
              borderColor: "var(--border)",
            }}
          >
          {/* Terminal header */}
          <div
            className="flex items-center gap-2 px-5 py-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <span className="text-[11px] ml-2" style={{ color: "var(--text-muted)" }}>
              ~/sayali — current-status
            </span>
            {/* Live indicator */}
            <div className="ml-auto flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "#28c840", animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#28c840" }} />
              </span>
              <span className="text-[10px] tracking-wider uppercase" style={{ color: "#28c840" }}>
                Live
              </span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm space-y-2.5">
            <p style={{ color: "var(--text-muted)" }}>
              $ <span style={{ color: "var(--accent)" }}>current-status</span>
            </p>
            <p className="text-xs pt-1 pb-0.5" style={{ color: "var(--text-faint)" }}>
              // what I'm focused on right now
            </p>
            {currentItems.map((item, i) => (
              <p key={i} style={{ color: "var(--text-primary)" }}>
                <span style={{ color: "var(--accent)" }}>▸</span>{" "}
                {item}
              </p>
            ))}
            <p className="flex items-center gap-1 pt-1" style={{ color: "var(--text-muted)" }}>
              $<span
                className="inline-block w-2.5 h-[18px] ml-1"
                style={{ background: "var(--accent)", animation: "blink 1.2s step-end infinite" }}
              />
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
