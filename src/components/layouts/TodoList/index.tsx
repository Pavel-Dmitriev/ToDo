import { useEffect } from "react";
import { useStore } from "effector-react";

import TodoItem from "components/layouts/TodoItem";

import { $todoList, getTodos, openTodoDetails, toggleTodo } from "./store";
import { setLocalStorageTodos } from "api/localStorage";

function TodoList({ setOpen, setId }: any) {
  const items = useStore($todoList);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ul>
      {items?.map((item) => {
        const { id, text, done, isOpen } = item;

        const toggleTodoItem = () => {
          toggleTodo(item);
        };

        const toggleTodoDetails = () => {
          setId(id);
          openTodoDetails(item);
        };

        setLocalStorageTodos(items);
        return (
          <TodoItem
            done={done}
            text={text}
            key={`todo_item_${id}`}
            id={id}
            toggle={toggleTodoItem}
            toggleTodoDetails={toggleTodoDetails}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
