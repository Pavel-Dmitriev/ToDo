import { useStore } from "effector-react";

import "react-toastify/dist/ReactToastify.css";

import NoData from "components/uikit/NoData";

import TodoItem from "./components/TodoItem";
import FilterTodo from "./components/FilterTodo";

import { $todoList, openTodoDetails, toggleTodo } from "store";

import { ITodoList } from "interface";

function TodoList({ onIsOpen, onActiveId }: ITodoList) {
  const items = useStore($todoList);

  if (!items?.length) return <NoData />;

  return (
    <>
      <FilterTodo />
      <ul>
        {items?.map((item) => {
          const { id, isOpen } = item;

          const markCompletionTodo = () => {
            toggleTodo(item);
          };

          const onToggleTodoDetails = () => {
            onActiveId(id);
            openTodoDetails(item);
            onIsOpen(!isOpen);
          };

          return (
            <TodoItem
              key={id}
              markCompletionTodo={markCompletionTodo}
              onToggleTodoDetails={onToggleTodoDetails}
              {...item}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
