import { useEffect } from "react";
import { useUnit } from "effector-react";

import NoData from "components/NoData";

import TodoItem from "./components/TodoItem";
import FilterTodo from "./components/FilterTodo";

import { $todoList, openTodoDetails, resetTodoList, toggleTodo } from "store";

import { ITodoList } from "interface";

function TodoList({ onIsOpen, onActiveId }: ITodoList) {
  const items = useUnit($todoList);

  useEffect(() => {
    return () => resetTodoList();
  }, []);

  if (!items?.length) return <NoData />;

  return (
    <>
      <FilterTodo />
      <ul>
        {items?.map((item) => {
          const { id, isOpen } = item;

          const onMarkCompletionTodo = () => {
            toggleTodo(item);
          };

          const onToggleTodoDetails = () => {
            onActiveId(id);
            openTodoDetails(item);
            onIsOpen(!isOpen);
          };

          return <TodoItem key={id} {...{ ...item, onMarkCompletionTodo, onToggleTodoDetails }} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
