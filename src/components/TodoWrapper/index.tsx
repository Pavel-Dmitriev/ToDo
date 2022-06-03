import React from "react";

import TextInputWrapper from "components/TextInputWrapper";
import SortingTodo from "components/SortingTodo";
import TodoList from "components/TodoList";

function TodoWrapper() {
  return (
    <div className="bg-white pt-12 pr-16 pl-16">
      <SortingTodo />
      <TextInputWrapper />
      <TodoList />
    </div>
  );
}

export default TodoWrapper;
