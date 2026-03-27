import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";
import { useInView } from "../hooks/useInView";

const certMeta = [
  { level: "Associate", color: "#0078d4" },
  { level: "Fundamentals", color: "#50e6ff" },
  { level: "Fundamentals", color: "#50e6ff" },
];

const achievementMeta = [
  { icon: "publication", emoji: "📄", highlight: "Published & Cited 10+" },
  { icon: "speaker", emoji: "🎤", highlight: "200+ Professionals" },
  { icon: "hackathon", emoji: "⚡", highlight: "National Finalist" },
  { icon: "award", emoji: "🏆", highlight: "Company-Wide Award" },
];

function AzureLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 96 96" fill="none">
      <defs>
        <linearGradient id="az-a" x1="58.97" y1="7.64" x2="28.98" y2="88.35" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#114A8B" />
          <stop offset="1" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient id="az-c" x1="46.28" y1="8.17" x2="72.93" y2="81.48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path d="M33.34 8.3H61.7L32.5 84.1a4.5 4.5 0 01-4.25 3.06H10.2a4.5 4.5 0 01-4.25-5.94L31.1 11.36A4.5 4.5 0 0133.34 8.3z" fill="url(#az-a)" />
      <path d="M33.34 8.3a4.47 4.47 0 00-4.24 3.12L3.98 81.38a4.5 4.5 0 004.22 6.08h18.57a4.68 4.68 0 003.72-3.06L37.38 65l18.2 17.03a4.58 4.58 0 002.94 1.08h23.38L63.63 47.2 43 8.3z" fill="url(#az-c)" />
    </svg>
  );
}

export function Certifications() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="certifications" ref={ref} className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          number="04"
          label="credentials"
          title="Credentials & Recognition"
        />

        {/* ── Certification Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {profile.certifications.map((c, i) => {
            const meta = certMeta[i];
            return (
              <a
                key={c.text}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group project-card relative overflow-hidden block rounded-2xl border cursor-pointer ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  background: "var(--surface-raised)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Accent top bar */}
                <div className="h-1.5" style={{ background: meta.color }} />

                <div className="p-7">
                  {/* Logo + Level */}
                  <div className="flex items-start justify-between mb-6">
                    <AzureLogo />
                    <span
                      className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-semibold"
                      style={{
                        color: meta.color,
                        background: `${meta.color}12`,
                        border: `1px solid ${meta.color}30`,
                      }}
                    >
                      {meta.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-bold text-lg mb-2 leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {c.text}
                  </h3>

                  <p className="text-xs mb-6" style={{ color: "var(--text-muted)" }}>
                    Microsoft · Verified Credential
                  </p>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: meta.color }}
                  >
                    View credential
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Achievements ── */}
        <h3
          className="text-xs tracking-[0.25em] uppercase mb-8"
          style={{ color: "var(--accent)" }}
        >
          Achievements
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profile.achievements.map((a, i) => {
            const meta = achievementMeta[i];
            const inner = (
              <div
                className={`project-card rounded-2xl border overflow-hidden h-full ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                style={{
                  animationDelay: `${(i + 3) * 0.1}s`,
                  background: "var(--surface-raised)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="p-6 flex gap-5">
                  {/* Large icon */}
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: "rgba(var(--accent-rgb), 0.08)" }}
                  >
                    {meta.emoji}
                  </div>

                  <div className="min-w-0">
                    {/* Highlight stat */}
                    <p
                      className="font-display font-bold text-lg mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      {meta.highlight}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {a.text}
                    </p>

                    {a.link && (
                      <span
                        className="inline-flex items-center gap-1.5 text-xs mt-3 font-medium"
                        style={{ color: "var(--accent)" }}
                      >
                        View proof
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return a.link ? (
              <a key={a.text} href={a.link} target="_blank" rel="noopener noreferrer" className="block">
                {inner}
              </a>
            ) : (
              <div key={a.text}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
