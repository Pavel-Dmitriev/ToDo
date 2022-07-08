import TextInputWrapper from "components/layouts/TextInputWrapper";
import SortingTodo from "components/SortingTodo";
import TodoList from "components/layouts/TodoList";
import { DivWithBackground } from "components/layouts/TodoList/styles";

function TodoWrapper() {
  return (
    <div className="bg-white pt-12 pr-16 pl-16">
      <SortingTodo />
      <TextInputWrapper />
      <div>
        <TodoList />
        <DivWithBackground />
      </div>
    </div>
  );
}

export default TodoWrapper;
