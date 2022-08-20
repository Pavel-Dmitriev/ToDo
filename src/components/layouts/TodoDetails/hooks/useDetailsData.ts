import { useStore } from "effector-react";

import { $todoList } from "components/layouts/TodoList/store";

import { ITodoItem } from "components/layouts/TodoList/interface";
import { BooleanType } from "types/types";

function useDetailsData(id: string, isOpen: BooleanType): ITodoItem | undefined {
  const store = useStore($todoList);
  if (isOpen) {
    const findItemById = store?.find((item) => item.id === id);
    return findItemById;
  }
}

export default useDetailsData;
