import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader.jsx";
import TextInputArea from "./components/TextInputArea.jsx";
import StatCards from "./components/StatCards.jsx";
import StatLetters from "./components/StatLetters.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen px-4 md:px-8 pt-4 pb-8 ">
        <CounterHeader />
        <h1 className="text-preset-1-mobile md:text-preset-1 md:max-w-[510px] md:mx-auto text-center my-8 md:my-10">
          Analyze your text in real-time.
        </h1>
        <TextInputArea />
        <StatCards />
        <StatLetters />
      </div>
    </>
  );
}

export default App;
