import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader.jsx";
import TextInputArea from "./components/TextInputArea.jsx";
import StatCards from "./components/StatCards.jsx";
import StatLetters from "./components/StatLetters.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const textRef = useRef(null);
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitOn, setLimitOn] = useState(false);
  const [limitValue, setLimitValue] = useState("300");

  const toggleSpaces = () => setExcludeSpaces((prev) => !prev);
  const onToggleLimit = () => setLimitOn((prev) => !prev);
  const onChangeLimit = (e) => setLimitValue(e.target.value);

  const [counts, setCounts] = useState({
    charAll: 0,
    words: 0,
    sentences: 0,
    letterMap: {},
  });

  const handleInput = () => {
    const text = textRef.current.value || "";
    const results = analyze(text, { excludeSpaces });
    setCounts(results);
  };

  useEffect(() => {
    if (!textRef.current) return;
    const text = textRef.current.value || "";
    setCounts(analyze(text, { excludeSpaces }));
  }, [excludeSpaces]);

  function analyze(text, options = {}) {
    const { excludeSpaces = false } = options;
    const letterMap = {};

    for (let char of text.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        letterMap[char] = (letterMap[char] || 0) + 1;
      }
    }

    const charsAll = excludeSpaces
      ? text.replace(/\s/g, "").length
      : text.length;

    return {
      charAll: charsAll,
      words: text
        .trim()
        .split(/\s+/)
        .filter((w) => /\w/.test(w)).length,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length,
      letterMap: letterMap,
    };
  }

  const overLimit = limitOn && counts.charAll > limitValue;
  const exceededBy = overLimit ? counts.charAll - limitValue : 0;

  const minutes = counts.words / 200;
  const wholeMinutes = Math.ceil(minutes);
  const displayReadingTime =
    minutes < 1
      ? "< 1 minute"
      : `${wholeMinutes} minute${wholeMinutes > 1 ? "s" : ""}`;

  console.log("words:", counts.words);
  console.log("readingTime:", displayReadingTime);

  return (
    <>
      <div className="min-h-screen px-4 md:px-8 pt-4 pb-8 max-w-[990px] mx-auto">
        <CounterHeader onToggleTheme={toggleTheme} />
        <h1 className="text-preset-1-mobile md:text-preset-1 md:max-w-[510px] md:mx-auto text-center my-8 md:my-10 lg:my-12 dark:text-[var(--color-light-100)]">
          Analyze your text in real-time.
        </h1>
        <TextInputArea
          textRef={textRef}
          onUserTyping={handleInput}
          excludeSpaces={excludeSpaces}
          onToggleSpaces={toggleSpaces}
          limitOn={limitOn}
          onToggleLimit={onToggleLimit}
          limitValue={limitValue}
          onChangeLimit={onChangeLimit}
          overLimit={overLimit}
          exceededBy={exceededBy}
          readingTime={displayReadingTime}
        />
        <StatCards counts={counts} />
        <StatLetters letterMap={counts.letterMap} />
      </div>
    </>
  );
}

export default App;
