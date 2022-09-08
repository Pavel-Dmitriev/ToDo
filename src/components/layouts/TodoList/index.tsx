import { useEffect } from "react";
import { useStore } from "effector-react";

import TodoItem from "components/layouts/TodoItem";

import NoData from "components/uikit/NoData";

import { $todoList, getTodos, openTodoDetails, toggleTodo } from "./store";
import { setLocalStorageTodos } from "api/localStorage";

function TodoList({ setIsOpen, setId }: any) {
  const items = useStore($todoList);

  useEffect(() => {
    getTodos();
  }, []);

  if (!items?.length) return <NoData />;

  return (
    <ul>
      {items?.map((item: any) => {
        const { id, text, category, done, isOpen } = item;

        const toggleTodoItem = () => {
          toggleTodo(item);
        };

        const onToggleTodoDetails = () => {
          setId(id);
          openTodoDetails(item);
          setIsOpen();
        };

        setLocalStorageTodos(items);

        return (
          <TodoItem
            done={done}
            text={text}
            category={category}
            key={`todo_item_${id}`}
            id={id}
            toggle={toggleTodoItem}
            onToggleTodoDetails={onToggleTodoDetails}
            isOpen={isOpen}
            setOpen={setIsOpen}
            // deleteTodo={handleDeleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
