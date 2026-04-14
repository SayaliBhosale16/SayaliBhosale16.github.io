import { profile } from "../data/profile";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs — 2x bigger, stronger opacity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full blur-[180px]"
          style={{
            background: "var(--pillar-backend)",
            animation: "pulse-glow 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{
            background: "var(--pillar-devops)",
            animation: "pulse-glow 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[650px] h-[650px] rounded-full blur-[180px]"
          style={{
            background: "var(--pillar-mlai)",
            animation: "pulse-glow 9s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Horizontal grid lines for depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i + 1) * 8}%`,
              background: "var(--text-primary)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <p
          className="text-sm mb-4 animate-fade-in"
          style={{ color: "var(--text-muted)" }}
        >
          {getGreeting()}, welcome to my portfolio
        </p>

        {/* Tagline */}
        <p
          className="text-xs tracking-[0.3em] uppercase mb-8 animate-fade-in"
          style={{ color: "var(--accent)" }}
        >
          Full-Stack Engineer · AI Engineer · 3 YOE
        </p>

        {/* Name */}
        <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.9] tracking-tight mb-8">
          <span style={{ color: "var(--text-primary)" }} className="animate-fade-up block">
            Sayali
          </span>
          <span
            className="animate-fade-up block transition-colors duration-500"
            style={{ color: "var(--accent)", animationDelay: "0.1s" }}
          >
            Bhosale
            <span
              className="inline-block w-[4px] h-[0.7em] ml-3 align-baseline"
              style={{ background: "var(--accent)", animation: "blink 1.2s step-end infinite" }}
            />
          </span>
        </h1>

        {/* Bio */}
        <p
          className="max-w-2xl mx-auto text-sm leading-relaxed mb-8 animate-fade-up"
          style={{ color: "var(--text-secondary)", animationDelay: "0.2s" }}
        >
          {profile.bio}
        </p>

        {/* Education line */}
        <p
          className="text-sm mb-10 animate-fade-up"
          style={{ color: "var(--text-muted)", animationDelay: "0.3s" }}
        >
          M.S. Computer Science · UCF · GPA {profile.education.gpa} · Azure AI Certified
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-6 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "var(--text-muted)" }} aria-label="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" style={{ color: "var(--text-muted)" }} aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={`mailto:${profile.email}`} className="social-link" style={{ color: "var(--text-muted)" }} aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13L2 4" /></svg>
          </a>
          <a href="/images/resume.pdf" target="_blank" className="social-link" style={{ color: "var(--text-muted)" }} aria-label="Resume">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <div
          className="w-px h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, var(--text-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
