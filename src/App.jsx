import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader.jsx";
import TextInputArea from "./components/TextInputArea.jsx";
import StatCards from "./components/StatCards.jsx";
import StatLetters from "./components/StatLetters.jsx";

function App() {
  /* -------------------------- 🌙 DARK MODE LOGIC -------------------------- */

  // Keeps track of whether dark mode is currently active or not
  const [isDark, setIsDark] = useState(false);

  // On first load: check if the user already has a saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true); // Apply dark theme if previously saved
    }
  }, []);

  // Function that flips the theme state each time the toggle button is clicked
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Whenever `isDark` changes:
  // → add/remove the `.dark` class on <html> so Tailwind can apply the right theme
  // → and save the user’s preference in localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  /* ---------------------------- 🧮 TEXT LOGIC ----------------------------- */

  // Using a ref for the textarea to access its value directly (uncontrolled component)
  const textRef = useRef(null);

  // Options for text analysis
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitOn, setLimitOn] = useState(false);
  const [limitValue, setLimitValue] = useState("300");

  // Small helper toggles for checkboxes
  const toggleSpaces = () => setExcludeSpaces((prev) => !prev);
  const onToggleLimit = () => setLimitOn((prev) => !prev);
  const onChangeLimit = (e) => setLimitValue(e.target.value);

  // Counts returned from the analyze() function
  const [counts, setCounts] = useState({
    charAll: 0,
    words: 0,
    sentences: 0,
    letterMap: {},
  });

  // Triggered every time the user types inside the textarea
  // It analyzes the text and updates the counters in real time
  const handleInput = () => {
    const text = textRef.current.value || "";
    const results = analyze(text, { excludeSpaces });
    setCounts(results);
  };

  // Recalculate counts whenever the “Exclude spaces” option changes
  useEffect(() => {
    if (!textRef.current) return;
    const text = textRef.current.value || "";
    setCounts(analyze(text, { excludeSpaces }));
  }, [excludeSpaces]);

  /* --------------------------- 🔍 ANALYZE LOGIC --------------------------- */

  // This function does all the text statistics (characters, words, sentences, letters)
  function analyze(text, options = {}) {
    const { excludeSpaces = false } = options;
    const letterMap = {};

    // Build a frequency map of all letters (a–z)
    for (let char of text.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        letterMap[char] = (letterMap[char] || 0) + 1;
      }
    }

    // Character count (with or without spaces)
    const charsAll = excludeSpaces
      ? text.replace(/\s/g, "").length
      : text.length;

    // Return all calculated stats
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

  /* ----------------------------- 📊 CALCULATIONS -------------------------- */

  // When a limit is active, calculate if the user has exceeded it
  const overLimit = limitOn && counts.charAll > limitValue;
  const exceededBy = overLimit ? counts.charAll - limitValue : 0;

  // Estimate reading time based on 200 words per minute
  const minutes = counts.words / 200;
  const wholeMinutes = Math.ceil(minutes);
  const displayReadingTime =
    minutes < 1
      ? "< 1 minute"
      : `${wholeMinutes} minute${wholeMinutes > 1 ? "s" : ""}`;

  console.log("words:", counts.words);
  console.log("readingTime:", displayReadingTime);

  /* ------------------------------- 🧱 LAYOUT ------------------------------ */
  return (
    <>
      <div className="min-h-screen px-4 md:px-8 pt-4 pb-8 max-w-[990px] mx-auto">
        {/* Header section (includes logo + theme toggle button) */}
        <CounterHeader onToggleTheme={toggleTheme} />

        {/* Page title */}
        <h1 className="text-preset-1-mobile md:text-preset-1 md:max-w-[510px] md:mx-auto text-center my-8 md:my-10 lg:my-12 dark:text-[var(--color-light-100)]">
          Analyze your text in real-time.
        </h1>

        {/* Text input area with options and reading time */}
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

        {/* Summary cards (characters, words, sentences) */}
        <StatCards counts={counts} />

        {/* Letter density graph */}
        <StatLetters letterMap={counts.letterMap} />
      </div>
    </>
  );
}

export default App;
