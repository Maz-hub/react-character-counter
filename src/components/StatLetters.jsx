const StatLetters = ({ letterMap }) => {
  const hasLetters = Object.keys(letterMap).length > 0;
  return (
    <>
      <section>
        <h2 className="text-preset-2 text-[var(--color-dark-900)]">
          Letter Density
        </h2>
        <div>
          {/* If no letters */}
          {!hasLetters && (
            <p className="mt-5 text-preset-4 text-[var(--color-dark-600)]">
              No characters found. Start typing to see letter density.
            </p>
          )}
        </div>
        {/* Has letters */}
        {hasLetters && (
          <div className="my-5">
            <ul className="space-y-5">
              {Object.entries(letterMap).map(([letter, count]) => (
                <li key={letter} className="flex items-center gap-3">
                  {/* Letter */}
                  <span className="w-4 text-preset-4 text-[var(--color-dark-900)]">
                    {letter.toUpperCase()}
                  </span>
                  {/* Progress bar */}
                  <div className="relative flex-1 h-3 rounded-full bg-[var(--color-light-200)] overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full w-1/2 bg-[var(--color-purple-500)]"
                      style={{
                        width: `${
                          (count /
                            Object.values(letterMap).reduce(
                              (a, b) => a + b,
                              0
                            )) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  {/* Count */}
                  <span className="text-right text-[var(--color-dark-900)] text-preset-4">
                    {count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          {/* See more */}
          <button className="flex items-center text-preset-3 hidden">
            See more
            <span className="text-lg ml-2">˅</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default StatLetters;
