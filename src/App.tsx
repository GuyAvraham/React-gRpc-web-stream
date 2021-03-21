import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { callQueryResults } from "./analyticsClient";

function App() {
  useEffect(() => {
    callQueryResults();
  }, []);

  return <div className="App">Open inspector console</div>;
}

export default App;
