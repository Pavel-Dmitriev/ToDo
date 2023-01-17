import { useFormContext } from "react-hook-form";

import TextInput from "components/TextInput";
import DateAndTimeInput from "components/DateAndTimeInput";

function TodoReminder() {
  const { register } = useFormContext();

  return (
    <div className="mb-12 flex flex-col rounded-default bg-white p-8">
      <p className="mb-4 text-sm">Добавить напоминание:</p>
      <TextInput
        {...register("reminder.name")}
        placeholder="Добавить название"
        className="mb-8 min-h-48 border-1 !border-solid border-gray-400 bg-white px-12 text-xs transition-colors duration-300 hover:border-gray-900"
      />
      <DateAndTimeInput dateName="reminder.date" timeName="reminder.time" />
    </div>
  );
}

export default TodoReminder;
