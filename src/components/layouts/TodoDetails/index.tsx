import clsx from "clsx";

import TodoReminder from "components/TodoReminder";
import TodoCategory from "components/TodoCategory";
import TodoNote from "components/TodoNote";

import useDetailsData from "components/layouts/TodoDetails/hooks/useDetailsData";

import { BooleanType } from "types/types";

function TodoDetails(props: { isOpen: BooleanType; id: string }) {
  const { isOpen, id } = props;

  const todoItem = useDetailsData(id, isOpen);

  return (
    <aside
      className={clsx("bg-gray transition-[width] duration-300 ease-out", {
        "flex w-[360px] max-w-[360px]": isOpen,
        "hidden w-[0]": !isOpen,
      })}
    >
      <div className="mt-10 flex-1 overflow-auto overflow-x-hidden px-10 pb-16">
        <div className="mb-8 flex items-center rounded-default bg-white p-16 font-semibold leading-5">
          {todoItem?.text}
        </div>
        <TodoCategory />
        <TodoReminder />
        <TodoNote />
      </div>
    </aside>
  );
}

export default TodoDetails;
