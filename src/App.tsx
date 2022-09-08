import "effector-logger/inspector";

import Header from "./components/layouts/Header";
import Wrapper from "components/layouts/Wrapper";

function App() {
  return (
    <div className="flex h-[100vh] flex-col">
      <Header />
      <Wrapper />
    </div>
  );
}

export default App;
