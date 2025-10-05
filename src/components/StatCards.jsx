import WordCount from "../assets/images/pattern-word-count.svg";
import SentenceCount from "../assets/images/pattern-sentence-count.svg";
import CharCount from "../assets/images/pattern-character-count.svg";

/*
  StatCards component:
  - Receives the `counts` object as props (from App.jsx)
  - Displays three colorful cards:
      → total characters
      → total words
      → total sentences
  - Each card uses a different background color + decorative SVG pattern
  - This section is purely presentational (no logic here)
*/

const StatCards = ({ counts }) => {
  return (
    <>
      {/* 
        Responsive layout:
        - On mobile → stacked vertically with spacing
        - On tablet/desktop → displayed in a 3-column grid
      */}
      <section className="space-y-4 mt-10 mb-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:mt-12">
        {/* -------------------- 🟣 Total Characters -------------------- */}
        <div className=" relative rounded-[12px] bg-[var(--color-purple-500)] p-5 overflow-hidden md:h-[150px]">
          {/* Decorative background pattern */}
          <img
            src={CharCount}
            alt="pattern-character-count"
            aria-hidden="true"
            className=" absolute -right-13 md:-right-17 lg:-right-7 -top-4 md:-top-0 z-0"
          />

          {/* Dynamic number from counts.charAll */}
          <p className="text-preset-1-mobile md:text-preset-1 mb-2 z-10">
            {counts.charAll}
          </p>

          {/* Label */}
          <p className="text-preset-3 z-10 isolate">Total Characters</p>
        </div>

        {/* -------------------- 🟡 Word Count -------------------- */}
        <div className=" relative rounded-[12px] bg-[var(--color-yellow-500)] p-5 overflow-hidden md:h-[150px]">
          <img
            src={WordCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4 md:-top-0 z-0 lg:-right-7 "
          />
          <p className="text-preset-1-mobile md:text-preset-1 mb-2">
            {counts.words}
          </p>
          <p className="text-preset-3 isolate">Word Count</p>
        </div>

        {/* -------------------- 🟠 Sentence Count -------------------- */}
        <div className=" relative rounded-[12px] bg-[var(--color-orange-500)] p-5 overflow-hidden md:h-[150px]">
          <img
            src={SentenceCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4 md:-top-0 z-0 lg:-right-7"
          />
          <p className="text-preset-1-mobile md:text-preset-1 mb-2">
            {counts.sentences}
          </p>
          <p className="text-preset-3 isolate">Sentence Count</p>
        </div>
      </section>
    </>
  );
};

export default StatCards;
