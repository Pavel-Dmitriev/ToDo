import { useStore } from "effector-react";
import { useState } from "react";
import clsx from "clsx";

import TodoReminder from "components/TodoReminder";
import TodoCategory from "components/TodoCategory";
import TodoNote from "components/TodoNote";

import { BooleanType } from "types/types";

import { $todoList } from "../TodoList/store";

function TodoDetails({ isOpen }: { isOpen: BooleanType }) {
  // const todoList = useStore($todoList);
  // const [open, setOpen] = useState<BooleanType>(false);

  return (
    <aside
      className={clsx("bg-gray transition-[width] duration-300 ease-out", {
        "flex w-[360px] max-w-[360px]": isOpen,
        "hidden w-[0]": !isOpen,
      })}
    >
      <div className="mt-10 flex-1 overflow-auto overflow-x-hidden px-10 pb-16">
        <TodoCategory />
        <TodoReminder />
        <TodoNote />
      </div>
    </aside>
  );
}

export default TodoDetails;
