import WordCount from "../assets/images/pattern-word-count.svg";
import SentenceCount from "../assets/images/pattern-sentence-count.svg";
import CharCount from "../assets/images/pattern-character-count.svg";

const StatCards = () => {
  return (
    <>
      <section className="space-y-4 mt-10 mb-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:mt-12">
        {/* Total Characters */}
        <div className=" relative rounded-[12px] bg-[var(--color-purple-500)] p-5 overflow-hidden md:h-[150px]">
          <img
            src={CharCount}
            alt="pattern-character-count"
            aria-hidden="true"
            className=" absolute -right-13 md:-right-17 -top-4 md:-top-0 z-0"
          />
          <p className="text-preset-1-mobile md:text-preset-1 mb-2 z-10">00</p>
          <p className="text-preset-3 z-10 isolate">Total Characters</p>
        </div>
        {/* Word Count */}
        <div className=" relative rounded-[12px] bg-[var(--color-yellow-500)] p-5 overflow-hidden md:h-[150px]">
          <img
            src={WordCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4 md:-top-0 z-0"
          />
          <p className="text-preset-1-mobile md:text-preset-1 mb-2">00</p>
          <p className="text-preset-3 isolate">Word Count</p>
        </div>
        {/* Sentense Count */}
        <div className=" relative rounded-[12px] bg-[var(--color-orange-500)] p-5 overflow-hidden md:h-[150px]">
          <img
            src={SentenceCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4 md:-top-0 z-0"
          />
          <p className="text-preset-1-mobile md:text-preset-1 mb-2">00</p>
          <p className="text-preset-3 isolate">Sentence Count</p>
        </div>
      </section>
    </>
  );
};

export default StatCards;
