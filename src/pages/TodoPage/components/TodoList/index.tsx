import { useEffect } from "react";
import { useStore } from "effector-react";

import "react-toastify/dist/ReactToastify.css";

import TodoItem from "./components/TodoItem";

import NoData from "components/uikit/NoData";

import { $todoList, openTodoDetails, toggleTodo } from "./store";
import { setLocalStorageTodos } from "api/localStorage";

import { ITodoList } from "./interface";

function TodoList({ setIsOpen, setActiveId }: ITodoList) {
  const items = useStore($todoList);

  if (!items?.length) return <NoData />;

  return (
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

        setLocalStorageTodos(items);

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
  );
}

export default TodoList;
