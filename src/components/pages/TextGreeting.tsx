import { useStore } from "effector-react";

import { $todoList } from "components/layouts/TodoList/store";

function TextGreeting() {
  // TODO вынести todos в пропсы.
  const todos = useStore($todoList);

  return (
    <section className="flex grow flex-col items-center justify-center text-blue">
      <h1 className="text-2xl">Приложение список дел</h1>
      {!!todos?.length && <p>Кол-во ваших активных дел: {todos?.length}</p>}
    </section>
  );
}

export default TextGreeting;
