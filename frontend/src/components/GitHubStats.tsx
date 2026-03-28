import { useState, useEffect } from "react";
import { useInView } from "../hooks/useInView";

interface GitHubData {
  publicRepos: number;
  followers: number;
  topLanguages: string[];
  totalStars: number;
}

const GITHUB_USERNAME = "SayaliBhosale16";

export function GitHubStats() {
  const { ref, isVisible } = useInView(0.1);
  const [data, setData] = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const user = await userRes.json();
        const repos = (await reposRes.json()) as Array<{
          language: string | null;
          stargazers_count: number;
        }>;

        const langCount: Record<string, number> = {};
        let totalStars = 0;

        for (const repo of repos) {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
          }
          totalStars += repo.stargazers_count;
        }

        const topLanguages = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([lang]) => lang);

        setData({
          publicRepos: user.public_repos,
          followers: user.followers,
          topLanguages,
          totalStars,
        });
      } catch {
        setError(true);
      }
    }

    fetchGitHub();
  }, []);

  if (error) return null;

  const stats = data
    ? [
        { label: "Repositories", value: data.publicRepos },
        { label: "Stars", value: data.totalStars },
        { label: "Followers", value: data.followers },
      ]
    : [
        { label: "Repositories", value: "—" },
        { label: "Stars", value: "—" },
        { label: "Followers", value: "—" },
      ];

  return (
    <section ref={ref} id="github" className="py-20 px-6">
      <div
        className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-3 mb-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ color: "var(--text-muted)" }}
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          <h2
            className="font-display text-xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            GitHub Activity
          </h2>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs hover:underline"
            style={{ color: "var(--text-muted)" }}
          >
            @{GITHUB_USERNAME}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center border"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
            >
              <p
                className="font-display text-2xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {data && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              Top languages:
            </span>
            {data.topLanguages.map((lang) => (
              <span
                key={lang}
                className="text-xs px-2 py-0.5 rounded-full border"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--card-border)",
                  background: "var(--card-bg)",
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
