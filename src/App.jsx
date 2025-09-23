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
  };

  function analyze(text) {
    return {
      charAll: text.length,
      words: 0,
      sentences: 0,
      letterMap: {},
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
        <StatLetters />
      </div>
    </>
  );
}

export default App;
