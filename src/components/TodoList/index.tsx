import { useContext } from "react";

import TodoItem from "components/TodoItem";

import { inputContext } from "context/inputContext";
import { DivWithBackground } from "./styles";

function TodoList() {
  const { todos } = useContext(inputContext);
  return (
    <div className="">
      <ul>
        {todos.map((todo: any) => (
          <TodoItem done={todo.done} text={todo.task} key={todo.id} />
        ))}
      </ul>
      <DivWithBackground />
    </div>
  );
}

export default TodoList;
