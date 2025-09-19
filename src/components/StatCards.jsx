import WordCount from "../assets/images/pattern-word-count.svg";
import SentenceCount from "../assets/images/pattern-sentence-count.svg";
import CharCount from "../assets/images/pattern-character-count.svg";

const StatCards = () => {
  return (
    <>
      <section className="space-y-4 mt-10 mb-6">
        {/* Total Characters */}
        <div className=" relative rounded-[12px] bg-[var(--color-purple-500)] p-5 overflow-hidden">
          <img
            src={CharCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4"
          />
          <p className="text-preset-1-mobile mb-2">00</p>
          <p className="text-preset-3">Total Characters</p>
        </div>
        {/* Word Count */}
        <div className=" relative rounded-[12px] bg-[var(--color-yellow-500)] p-5 overflow-hidden">
          <img
            src={WordCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4"
          />
          <p className="text-preset-1-mobile mb-2">00</p>
          <p className="text-preset-3">Word Count</p>
        </div>
        {/* Sentense Count */}
        <div className=" relative rounded-[12px] bg-[var(--color-orange-500)] p-5 overflow-hidden">
          <img
            src={SentenceCount}
            alt="pattern-character-count"
            className=" absolute -right-13 -top-4"
          />
          <p className="text-preset-1-mobile mb-2">00</p>
          <p className="text-preset-3">Sentence Count</p>
        </div>
      </section>
    </>
  );
};

export default StatCards;
