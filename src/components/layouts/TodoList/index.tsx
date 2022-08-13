import { useStore } from "effector-react";

import TodoItem from "components/layouts/TodoItem";

import { $todoList, openTodoDetails, toggleTodo } from "./store";

// addTodo.watch((data) => console.log(data));

function TodoList({ setOpen }: any) {
  // const { todos } = useContext(inputContext);
  const items = useStore($todoList);
  return (
    <ul>
      {items.map((item) => {
        const { id, text, done, isOpen } = item;
        return (
          <TodoItem
            done={done}
            text={text}
            key={`todo_item_${id}`}
            id={id}
            toggle={() => toggleTodo(item)}
            toggleTodoDetails={() => openTodoDetails(item)}
            isOpen={isOpen}
            setOpen={setOpen}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
