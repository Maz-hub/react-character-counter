// React hook for controlling the “see more / see less” behavior
import { useState } from "react";

/*
  StatLetters component:
  - Displays how often each letter appears in the analyzed text (“letter density”)
  - Receives `letterMap` from App.jsx, which is an object like { a: 10, b: 5, c: 2 }
  - Shows a short list of top letters by default (top 5), with an option to expand and see all
  - Each line includes: the letter, a progress bar, and its count + percentage
*/
const StatLetters = ({ letterMap }) => {
  /* ------------------------- 🔍 BASIC SETUP -------------------------- */

  // Check if there’s any data to display
  const hasLetters = Object.keys(letterMap).length > 0;

  // Total number of letters typed (used for % calculation)
  const total = Object.values(letterMap).reduce((a, b) => a + b, 0) || 1;

  // Local state to control “See more / See less”
  const [expanded, setExpanded] = useState(false);

  // Turn the letterMap object into an array and sort it (most frequent first)
  const entries = Object.entries(letterMap).sort((a, b) => b[1] - a[1]);

  // When collapsed → show top 5 letters, otherwise show all
  const visible = expanded ? entries : entries.slice(0, 5);

  /* ------------------------- 🎨 UI RENDERING -------------------------- */
  return (
    <>
      <section>
        {/* Section title */}
        <h2 className="text-preset-2 text-[var(--color-dark-900)] dark:text-[var(--color-light-200)]">
          Letter Density
        </h2>
        <div>
          {/* If no letters are found → show a friendly message */}
          {!hasLetters && (
            <p className="mt-5 text-preset-4 text-[var(--color-dark-600)] dark:text-[var(--color-light-200)]">
              No characters found. Start typing to see letter density.
            </p>
          )}
        </div>

        {/* If there are letters → show progress bars */}
        {hasLetters && (
          <div className="my-5">
            <ul className="space-y-5">
              {/* Loop through visible letters */}
              {visible.map(([letter, count]) => (
                <li key={letter} className="flex items-center gap-3">
                  {/* The letter label (A, B, C...) */}
                  <span className="w-4 text-preset-4 text-[var(--color-dark-900)] dark:text-[var(--color-light-200)]">
                    {letter.toUpperCase()}
                  </span>

                  {/* Progress bar showing the letter's frequency visually */}
                  <div className="relative flex-1 h-3 rounded-full bg-[var(--color-light-200)] overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full w-1/2 bg-[var(--color-purple-500)]"
                      style={{ width: `${(count / total) * 100}%` }}
                    ></div>
                  </div>

                  {/* The actual numeric count + percentage */}
                  <span className="text-right text-[var(--color-dark-900)] dark:text-[var(--color-light-200)] text-preset-4 shrink-0 tabular-nums">
                    {count} ({((count / total) * 100).toFixed(2)}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          {/* See more / See less toggle */}
          <button
            className="flex items-center text-preset-3 dark:text-[var(--color-light-200)]"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
          >
            {expanded ? "See less" : "See more"}

            {/* The small arrow rotates when expanded */}
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
