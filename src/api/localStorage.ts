import { ITodoItem } from "../interface";

export const localStorageKey = "Список дел";

export function getLocalStorageTodos(): ITodoItem[] | undefined {
  const source = localStorage.getItem(localStorageKey);
  if (source) {
    return JSON.parse(source);
  }
  return undefined;
}

export function setLocalStorageTodos(todos: ITodoItem[]) {
  localStorage.setItem(localStorageKey, JSON.stringify(todos));
}
