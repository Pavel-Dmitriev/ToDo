import TodoItem from "components/TodoItem";

function TodoList() {
  return (
    <ul>
      <TodoItem done={false} text={"TTTText"} />
    </ul>
  );
}

export default TodoList;
