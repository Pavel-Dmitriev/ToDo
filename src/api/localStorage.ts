import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

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

// export const todoGetFx = createEffect<void, ITodoItem[], Error>(() => {
//   const history = getLocalStorageTodos();
//   return history ?? [];
// });

// export const todoSetFx = createEffect(({ title }: ITodoItem) => {
//   const todo = {
//     id: Math.random().toString(36).substring(2, 9),
//     title,
//     done: false,
//     isOpen: false,
//   };
//   const history = getLocalStorageTodos();
//   setLocalStorageTodos([...(history as ITodoItem[]), todo]);
//   return todo;
// });
