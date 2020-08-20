import React from "react";
import DraftEditor from "./components/draft";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <DraftEditor />
        </div>
      </header>
    </div>
  );
}

export default App;
