import { getLocalStorageTodos, setLocalStorageTodos } from "api/localStorage";
import { createEvent, createStore } from "effector-logger";

import { ITodoItem } from "./interface";

export const addTodo = createEvent<any>("addTodo");
export const toggleTodo = createEvent<ITodoItem>("toggleTodo");
export const openTodoDetails = createEvent<ITodoItem>("openTodoDetails");
export const getTodo = createEvent<any>("getTodo");
export const getTodos = createEvent<any>("getTodos");

const toggleTodoItem = (todo: ITodoItem): ITodoItem => ({
  ...todo,
  done: !todo.done,
});

const toggleTodoDetails = (todo: ITodoItem): ITodoItem => ({
  ...todo,
  isOpen: !todo.isOpen,
});

const getTodoItem = (todo: ITodoItem) => ({
  ...todo,
});

export const $todoList = createStore<ITodoItem[]>([])
  .on(toggleTodo, (list, todo: ITodoItem): ITodoItem[] =>
    list.map((item) => (item === todo ? toggleTodoItem(todo) : item)),
  )
  .on(addTodo, (list, data: ITodoItem): ITodoItem[] => {
    const todos = [
      ...list,
      {
        id: Math.random().toString(36).substring(2, 9),
        text: data?.text,
        done: false,
        isOpen: false,
      },
    ];
    setLocalStorageTodos(todos);
    return todos;
  })
  .on(openTodoDetails, (list, todo: ITodoItem): ITodoItem[] =>
    list.map((item) =>
      item === todo
        ? toggleTodoDetails(todo)
        : {
            ...item,
            isOpen: false,
          },
    ),
  )
  .on(getTodo, (list, todo) => list.map((item) => (item === todo ? getTodoItem(todo) : item)))
  .on(getTodos, (): ITodoItem[] | void => {
    const localStorageTodos = getLocalStorageTodos();
    return localStorageTodos?.length ? localStorageTodos : [];
  });
