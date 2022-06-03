import React from "react";

import TodoDetails from "components/TodoDetails";
import TodoWrapper from "components/TodoWrapper";

function Wrapper() {
  return (
    <main className="grid h-screen grid-cols-[3fr,1fr]">
      <TodoWrapper />
      <TodoDetails />
    </main>
  );
}

export default Wrapper;
