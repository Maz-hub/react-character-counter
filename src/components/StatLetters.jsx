import { useState } from "react";

const StatLetters = ({ letterMap }) => {
  const hasLetters = Object.keys(letterMap).length > 0;
  const total = Object.values(letterMap).reduce((a, b) => a + b, 0) || 1;

  const [expanded, setExpanded] = useState(false);

  const entries = Object.entries(letterMap).sort((a, b) => b[1] - a[1]);
  const visible = expanded ? entries : entries.slice(0, 5);

  return (
    <>
      <section>
        <h2 className="text-preset-2 text-[var(--color-dark-900)] dark:text-[var(--color-light-200)]">
          Letter Density
        </h2>
        <div>
          {/* If no letters */}
          {!hasLetters && (
            <p className="mt-5 text-preset-4 text-[var(--color-dark-600)] dark:text-[var(--color-light-200)]">
              No characters found. Start typing to see letter density.
            </p>
          )}
        </div>
        {/* Has letters */}
        {hasLetters && (
          <div className="my-5">
            <ul className="space-y-5">
              {visible.map(([letter, count]) => (
                <li key={letter} className="flex items-center gap-3">
                  {/* Letter */}
                  <span className="w-4 text-preset-4 text-[var(--color-dark-900)] dark:text-[var(--color-light-200)]">
                    {letter.toUpperCase()}
                  </span>
                  {/* Progress bar */}
                  <div className="relative flex-1 h-3 rounded-full bg-[var(--color-light-200)] overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full w-1/2 bg-[var(--color-purple-500)]"
                      style={{ width: `${(count / total) * 100}%` }}
                    ></div>
                  </div>
                  {/* Count */}
                  <span className="text-right text-[var(--color-dark-900)] dark:text-[var(--color-light-200)] text-preset-4 shrink-0 tabular-nums">
                    {count} ({((count / total) * 100).toFixed(2)}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          {/* See more */}
          <button
            className="flex items-center text-preset-3 dark:text-[var(--color-light-200)]"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? "See less" : "See more"}
            <span
              className={`text-lg dark:text-[var(--color-light-200)] ml-2 transition-transform ${
                expanded ? "rotate-180" : "rotate-0"
              }`}
            >
              ˅
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default StatLetters;
