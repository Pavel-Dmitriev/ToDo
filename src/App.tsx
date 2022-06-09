import { useState } from "react";

import Header from "./components/Header";
import Wrapper from "components/Wrapper";
import { inputContext } from "context/inputContext";

function App() {
  const [inputValue, setInputValue] = useState("");
  const InputProvider = inputContext.Provider;
  return (
    <div className="App">
      <Header />
      <InputProvider
        value={{
          value: inputValue,
          setValue: setInputValue,
        }}
      >
        <Wrapper />
      </InputProvider>
    </div>
  );
}

export default App;
