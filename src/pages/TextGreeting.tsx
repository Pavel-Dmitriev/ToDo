import { useEffect } from "react";
import { useStore } from "effector-react";

import { $todoList, getTodos } from "store";

function TextGreeting() {
  const todos = useStore($todoList);
  const countActiveTodos = todos?.filter((todo) => !todo.done).length;

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className="flex grow flex-col items-center justify-center text-blue">
      <h1 className="text-2xl">Приложение список дел</h1>
      {countActiveTodos > 0 && <p>Кол-во ваших активных дел: {countActiveTodos}</p>}
    </section>
  );
}

export default TextGreeting;
