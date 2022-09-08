import { useStore } from "effector-react";

import { $todoList } from "components/layouts/TodoList/store";

import { ITodoItem } from "components/layouts/TodoList/interface";

function useDetailsDataById(id: string, isOpen: boolean) {
  const store = useStore($todoList);
  if (isOpen) {
    return store.find((item: ITodoItem) => item.id === id);
  }
}

export default useDetailsDataById;
