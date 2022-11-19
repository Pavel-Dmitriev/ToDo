import { useStore } from "effector-react";

import "react-toastify/dist/ReactToastify.css";

import NoData from "components/uikit/NoData";

import TodoItem from "./components/TodoItem";
import FilterTodo from "./components/FilterTodo";

import { $todoList, openTodoDetails, toggleTodo } from "store";

import { ITodoList } from "interface";

function TodoList({ setIsOpen, setActiveId }: ITodoList) {
  const items = useStore($todoList);

  if (!items?.length) return <NoData />;

  return (
    <>
      <FilterTodo />
      <ul>
        {items?.map((item) => {
          const { id, isOpen } = item;

          const toggleTodoItem = () => {
            toggleTodo(item);
          };

          const onToggleTodoDetails = () => {
            setActiveId(id);
            openTodoDetails(item);
            setIsOpen(!isOpen);
          };

          return (
            <TodoItem
              {...item}
              key={`todo_item_${id}`}
              toggle={toggleTodoItem}
              onToggleTodoDetails={onToggleTodoDetails}
              setOpen={setIsOpen}
              // deleteTodo={handleDeleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
