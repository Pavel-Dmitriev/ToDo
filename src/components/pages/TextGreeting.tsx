import { ITodoItem } from "components/layouts/TodoList/interface";

function TextGreeting({ todos }: { todos: ITodoItem[] }) {
  return (
    <section className="flex grow flex-col items-center justify-center text-blue">
      <h1 className="text-2xl">Приложение список дел</h1>
      {!!todos?.length && <p>У вас "столько то дел"</p>}
    </section>
  );
}

export default TextGreeting;
