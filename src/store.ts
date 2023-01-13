import { createEvent, createStore } from "effector";

import { getLocalStorageTodos, setLocalStorageTodos } from "api/localStorage";

import { ITodoItem } from "./interface";

export const addTodo = createEvent<any>("addTodo");
export const filterTodo = createEvent<any>("filterTodo");
export const updateTodo = createEvent<any>("updateTodo");
export const deleteTodo = createEvent<any>("deleteTodo");
export const toggleTodo = createEvent<ITodoItem>("toggleTodo");
export const openTodoDetails = createEvent<ITodoItem>("openTodoDetails");
export const getTodo = createEvent<any>("getTodo");
export const getTodos = createEvent<any>("getTodos");
export const resetTodoList = createEvent<any>("resetTodoList");

const toggleTodoItem = (todo: ITodoItem): ITodoItem => ({
  ...todo,
  done: !todo.done,
});

const toggleTodoDetails = (todo: ITodoItem): ITodoItem => ({
  ...todo,
  isOpen: !todo.isOpen,
});

export const $todoList = createStore<ITodoItem[]>([])
  .on(toggleTodo, (list, todo: ITodoItem): ITodoItem[] => {
    const todos = list.map((item) => (item === todo ? toggleTodoItem(todo) : item));
    setLocalStorageTodos(todos);

    return todos;
  })
  .on(addTodo, (list, data: ITodoItem): ITodoItem[] => {
    const { title, note = "", categories, reminder } = data;
    const todos = [
      ...list,
      {
        id: Math.random().toString(36).substring(2, 9),
        title,
        note,
        categories,
        reminder,
        done: false,
        isOpen: false,
        createdAt: new Date(),
      },
    ];
    setLocalStorageTodos(todos);

    return todos;
  })
  .on(filterTodo, (_, filter) => {
    const todos = getLocalStorageTodos();

    if (filter === "Все") return todos;

    const filterTodos = todos?.filter((todo) =>
      filter === "Невыполненные" ? !todo.done : todo.done,
    );

    return filterTodos;
  })
  .on(updateTodo, (list, todo: ITodoItem) => {
    const todos = list.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, note: todo.note, categories: todo.categories, reminder: todo.reminder };
      }

      return item;
    });
    setLocalStorageTodos(todos);

    return todos;
  })
  .on(deleteTodo, (list, todoId: string) => {
    const todos: ITodoItem[] = list.filter((item) => item.id !== todoId);
    setLocalStorageTodos(todos);

    return todos;
  })
  .on(openTodoDetails, (list, todo: ITodoItem): ITodoItem[] => {
    const todos = list.map((item) => {
      if (item === todo) toggleTodoDetails(todo);

      return {
        ...item,
        isOpen: false,
      };
    });
    setLocalStorageTodos(todos);

    return todos;
  })
  .on(getTodos, (): ITodoItem[] | void => {
    const localStorageTodos = getLocalStorageTodos();

    if (localStorageTodos?.length)
      return localStorageTodos.map((item) => ({ ...item, isOpen: false }));

    return [];
  })
  .reset(resetTodoList);
