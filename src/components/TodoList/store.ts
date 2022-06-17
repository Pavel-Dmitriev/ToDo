import { createEvent, createStore } from "effector-logger";

import { ITodoItem } from "./interface";

export const addTodo = createEvent<any>("addTodo");
export const toggleTodo = createEvent<ITodoItem>("toggleTodo");

const toggleTodoItem = (todo: ITodoItem): ITodoItem => ({
  ...todo,
  done: !todo.done,
});

export const $todoList = createStore<ITodoItem[]>([])
  .on(toggleTodo, (list, todo: ITodoItem): ITodoItem[] =>
    list.map((item) => (item === todo ? toggleTodoItem(todo) : item)),
  )
  .on(addTodo, (list, data: any) => [
    ...list,
    {
      id: Math.random().toString(36).substring(2, 9),
      text: data.text,
      done: false,
    },
  ]);
