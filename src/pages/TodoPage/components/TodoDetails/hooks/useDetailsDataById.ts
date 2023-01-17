import { useUnit } from "effector-react";

import { $todoList } from "store";

import { ITodoItem } from "interface";

function useDetailsDataById(id: string | null, isOpen: boolean) {
  const store = useUnit($todoList);

  if (isOpen) return store.find((item: ITodoItem) => item.id === id);
}

export default useDetailsDataById;
