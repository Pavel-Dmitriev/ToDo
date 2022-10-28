import { useEffect } from "react";
import { useStore } from "effector-react";

import { $todoList, getTodos } from "pages/TodoPage/components/TodoList/store";

function TextGreeting() {
  // TODO вынести todos в пропсы.
  const todos = useStore($todoList);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className="flex grow flex-col items-center justify-center text-blue">
      <h1 className="text-2xl">Приложение список дел</h1>
      {!!todos?.length && <p>Кол-во ваших активных дел: {todos?.length}</p>}
    </section>
  );
}

export default TextGreeting;
