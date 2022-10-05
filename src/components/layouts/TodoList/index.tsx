import { useEffect } from "react";
import { useStore } from "effector-react";

import TodoItem from "components/layouts/TodoItem";

import NoData from "components/uikit/NoData";

import { $todoList, getTodos, openTodoDetails, toggleTodo } from "./store";
import { setLocalStorageTodos } from "api/localStorage";

import { ITodoList } from "./interface";

function TodoList({ setIsOpen, setActiveId }: ITodoList) {
  const items = useStore($todoList);

  useEffect(() => {
    getTodos();
  }, []);

  if (!items?.length) return <NoData />;

  return (
    <ul>
      {items?.map((item: any) => {
        const { id, title, note, categories, done, isOpen } = item;

        const toggleTodoItem = () => {
          toggleTodo(item);
        };

        const onToggleTodoDetails = () => {
          setActiveId(id);
          openTodoDetails(item);
          setIsOpen();
        };

        setLocalStorageTodos(items);

        return (
          <TodoItem
            done={done}
            title={title}
            categories={categories}
            key={`todo_item_${id}`}
            id={id}
            toggle={toggleTodoItem}
            onToggleTodoDetails={onToggleTodoDetails}
            isOpen={isOpen}
            setOpen={setIsOpen}
            textNote={note}
            // deleteTodo={handleDeleteTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
