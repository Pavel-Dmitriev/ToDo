import { useState } from "react";

import TodoDetails from "components/layouts/TodoDetails";
import TextInputWrapper from "components/layouts/TextInputWrapper";
// import SortingTodo from "components/layouts/SortingTodo";
import TodoList from "components/layouts/TodoList";

import { DivWithBackground } from "components/layouts/TodoList/styles";

import { BooleanType } from "types/types";

function Wrapper() {
  const [open, setOpen] = useState<BooleanType>(false);

  return (
    <main className="will-change-width flex flex-1 overflow-hidden">
      <div className="flex flex-1 flex-col overflow-hidden bg-white pt-12 pr-16 pl-16">
        {/* <SortingTodo /> */}
        <TextInputWrapper />
        <div>
          <TodoList setOpen={setOpen} />
          <DivWithBackground />
        </div>
      </div>
      <TodoDetails isOpen={open} />
    </main>
  );
}

export default Wrapper;
