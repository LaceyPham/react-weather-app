import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hanoi" />
        <footer>This project was coded by Lacey Pham</footer>
      </div>
    </div>
  );
}
