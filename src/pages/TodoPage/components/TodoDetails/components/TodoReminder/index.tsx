import { useFormContext } from "react-hook-form";

import TextInput from "components/uikit/TextInput";
import DateAndTimeInput from "components/uikit/DateAndTimeInput";

import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

function TodoReminder({ todoItem }: { todoItem?: ITodoItem }) {
  const { register } = useFormContext();

  return (
    <div className="mb-12 flex flex-col">
      <p className="mb-4">Добавить напоминание:</p>
      <TextInput
        {...register("reminder.name")}
        placeholder="Добавить название"
        className="mb-8 text-xs"
      />
      <DateAndTimeInput dateName="reminder.date" timeName="reminder.time" />
    </div>
  );
}

export default TodoReminder;
