import { getLocalStorageTodos, setLocalStorageTodos } from "api/localStorage";
import { createEvent, createStore } from "effector-logger";

import { ITodoItem } from "./interface";

export const addTodo = createEvent<any>("addTodo");
export const filterTodo = createEvent<any>("filterTodo");
export const updateTodo = createEvent<any>("updateTodo");
export const deleteTodo = createEvent<any>("deleteTodo");
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
    return filter === "Все"
      ? todos
      : todos?.filter((todo) => {
          if (filter === "Невыполненные") return !todo.done;
          return todo.done;
        });
  })
  .on(updateTodo, (list, todo: ITodoItem) => {
    const todos = list.map((item) =>
      item.id === todo.id
        ? { ...todo, note: todo.note, categories: todo.categories, reminder: todo.reminder }
        : item,
    );
    setLocalStorageTodos(todos);
    return todos;
  })
  .on(deleteTodo, (list, todo) => {
    return list.filter((item) => {
      return item.id !== todo;
    });
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
    return localStorageTodos?.length
      ? localStorageTodos.map((item) => ({ ...item, isOpen: false }))
      : [];
  });

// export const $activeFilter = createStore<string>("Все").on(filteredTodo, (_, filter) => filter);

// export const $filteredTodos = combine($todoList, $activeFilter, (todoList, filter) =>
//   filter === "Все"
//     ? todoList
//     : todoList.filter((todo) => {
//         if (filter === "Выполненные") return todo.done;
//         return !todo.done;
//       }),
// );
