import { ITodoItem } from "components/layouts/TodoList/interface";

export const localStorageKey = "Список дел";

export function getLocalStorageTodos(): ITodoItem[] | void {
  const source = localStorage.getItem(localStorageKey);
  if (source) {
    return JSON.parse(source);
  }
  return undefined;
}

export function setLocalStorageTodos(todos: ITodoItem[]) {
  localStorage.setItem(localStorageKey, JSON.stringify(todos));
}
