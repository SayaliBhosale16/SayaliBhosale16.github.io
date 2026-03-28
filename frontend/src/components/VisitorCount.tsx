import { useState, useEffect } from "react";

const GOATCOUNTER_SITE = "sayalibhosale";

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch(
          `https://${GOATCOUNTER_SITE}.goatcounter.com/counter//TOTAL.json`,
        );
        if (!res.ok) return;
        const data = await res.json();
        setCount(parseInt(data.count.replace(/\s/g, ""), 10));
      } catch {
        // GoatCounter not set up yet or on localhost
      }
    }

    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <span
        className="inline-block w-2 h-2 rounded-full animate-pulse"
        style={{ background: "#22c55e" }}
      />
      <p className="text-xs" style={{ color: "var(--text-faint)" }}>
        {count.toLocaleString()} visitors
      </p>
    </div>
  );
}
