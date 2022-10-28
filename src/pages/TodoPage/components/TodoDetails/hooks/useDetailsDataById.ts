import { useStore } from "effector-react";

import { $todoList } from "pages/TodoPage/components/TodoList/store";

import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

function useDetailsDataById(id: string, isOpen: boolean) {
  const store = useStore($todoList);
  if (isOpen) {
    return store.find((item: ITodoItem) => item.id === id);
  }
}

export default useDetailsDataById;
