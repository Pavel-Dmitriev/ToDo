import { useStore } from "effector-react";

import TodoItem from "components/TodoItem";

import { $todoList, toggleTodo } from "./store";

// addTodo.watch((data) => console.log(data));

function TodoList() {
  // const { todos } = useContext(inputContext);
  const items = useStore($todoList);
  return (
    <ul>
      {items.map((item) => {
        const { id, text, done } = item;
        return <TodoItem done={done} text={text} key={id} toggle={() => toggleTodo(item)} />;
      })}
    </ul>
  );
}

export default TodoList;
