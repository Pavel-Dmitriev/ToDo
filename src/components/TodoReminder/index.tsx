import { useFormContext } from "react-hook-form";

import TextInput from "components/uikit/TextInput";
import Button from "components/uikit/Button";
import DateAndTimeInput from "components/uikit/DateAndTimeInput";

import { updateTodo } from "components/layouts/TodoList/store";

import { ITodoItem } from "components/layouts/TodoList/interface";

function TodoReminder({ todoItem }: { todoItem?: ITodoItem }) {
  const { register, reset, handleSubmit } = useFormContext();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    console.log(`onSubmit: data = ${JSON.stringify(data)}`);
    updateTodo({
      ...todoItem,
      reminder: {
        name: data.reminder.name,
        date: data.reminder.date || new Date(),
        time: data.reminder.time || "00:00",
      },
    });
    reset();
  };

  return (
    <div className="mb-12 flex flex-col">
      <p className="mb-4">Добавить напоминание:</p>
      <TextInput
        {...register("reminder.name")}
        placeholder="Добавить название"
        className="mb-8 text-xs"
      />
      <DateAndTimeInput dateName="reminder.date" timeName="reminder.time" />
      <div className="mt-4 flex items-center justify-end">
        <Button
          type="submit"
          name="Добавить"
          onClick={handleSubmit(onSubmit)}
          className="text-xs hover:text-blue"
        />
      </div>
    </div>
  );
}

export default TodoReminder;
