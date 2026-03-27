interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ number, label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14">
      <p
        className="text-xs tracking-[0.25em] uppercase mb-3 font-mono"
        style={{ color: "var(--accent)" }}
      >
        {number} // {label}
      </p>
      <h2
        className="font-display font-bold text-3xl md:text-4xl leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm max-w-xl" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      )}
    </div>
  );
}
