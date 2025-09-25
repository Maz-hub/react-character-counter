import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader.jsx";
import TextInputArea from "./components/TextInputArea.jsx";
import StatCards from "./components/StatCards.jsx";
import StatLetters from "./components/StatLetters.jsx";

function App() {
  const textRef = useRef(null);

  const [counts, setCounts] = useState({
    charAll: 0,
    words: 0,
    sentences: 0,
    letterMap: {},
  });

  const handleInput = () => {
    const text = textRef.current.value;
    const results = analyze(text); // call the function
    setCounts(results); // update the scoreboard state
    console.log(text);
    console.log("Counts:", results);
    console.log(results.letterMap);
  };

  function analyze(text) {
    const letterMap = {};
    for (let char of text.toLowerCase()) {
      if (/[a-z]/.test(char)) {
        letterMap[char] = (letterMap[char] || 0) + 1;
      }
    }

    return {
      charAll: text.length,
      words: text
        .trim()
        .split(/\s+/)
        .filter((w) => /\w/.test(w)).length,
      sentences: text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length,
      letterMap: letterMap,
    };
  }

  return (
    <>
      <div className="min-h-screen px-4 md:px-8 pt-4 pb-8 max-w-[990px] mx-auto">
        <CounterHeader />
        <h1 className="text-preset-1-mobile md:text-preset-1 md:max-w-[510px] md:mx-auto text-center my-8 md:my-10 lg:my-12">
          Analyze your text in real-time.
        </h1>
        <TextInputArea textRef={textRef} onUserTyping={handleInput} />
        <StatCards counts={counts} />
        <StatLetters letterMap={counts.letterMap} />
      </div>
    </>
  );
}

export default App;
