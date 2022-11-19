import { useStore } from "effector-react";

import { $todoList } from "store";

import { ITodoItem } from "interface";

function useDetailsDataById(id: string, isOpen: boolean) {
  const store = useStore($todoList);
  if (isOpen) {
    return store.find((item: ITodoItem) => item.id === id);
  }
}

export default useDetailsDataById;
