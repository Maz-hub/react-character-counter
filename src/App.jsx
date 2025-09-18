import { useState, useEffect, useRef } from "react";
import CounterHeader from "./components/CounterHeader";

function App() {
  return (
    <>
      <div className="min-h-screen px-4 pt-4 pb-8">
        <CounterHeader />
      </div>
    </>
  );
}

export default App;
