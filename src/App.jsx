import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader";

function App() {
  return (
    <>
      <div className="min-h-screen px-4 pt-4 pb-8">
        <CounterHeader />
        <h1 className="text-preset-1-mobile text-center my-8">
          Analyze your text in real-time.
        </h1>
      </div>
    </>
  );
}

export default App;
