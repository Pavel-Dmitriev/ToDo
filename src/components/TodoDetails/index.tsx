import React from "react";

import TodoReminder from "components/TodoReminder";
import TodoCategory from "components/TodoCategory";
import TodoNote from "components/TodoNote";

function TodoDetails() {
  return (
    <div className="mt-10 bg-gray pr-10 pb-16 pl-10">
      TodoDetails
      <TodoCategory />
      <TodoReminder />
      <TodoNote />
    </div>
  );
}

export default TodoDetails;
