import React from "react";

type text = string;
function App() {
  const text: text = "Hello";
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">{text}</h1>
      </header>
    </div>
  );
}

export default App;
