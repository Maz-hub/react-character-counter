const StatLetters = () => {
  return (
    <>
      <section>
        <h2 className="text-preset-2 text-[var(--color-dark-900)]">
          Letter Density
        </h2>
        <div>
          {/* Empty state message */}
          <p className="mt-5 text-preset-4 text-[var(--color-dark-600)]">
            No characters found. Start typing to see letter density.
          </p>
        </div>
        <div className="my-5 hidden">
          {/* Rows */}
          <ul className="space-y-5">
            <li className="flex items-center gap-3">
              <span className="w-4 text-preset-4 text-[var(--color-dark-900)]">
                E
              </span>
              <div className="relative flex-1 h-3 rounded-full bg-[var(--color-light-200)] overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-1/2 bg-[var(--color-purple-500)]"></div>
              </div>
              <span className="text-right text-[var(--color-dark-900)] text-preset-4">
                40 (16.06%)
              </span>
            </li>
          </ul>
        </div>
        <div>
          {/* See more */}
          <button className=" lex items-center text-preset-3 hidden">
            See more
            <span className="text-lg ml-2">˅</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default StatLetters;
