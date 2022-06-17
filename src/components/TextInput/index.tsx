import { SubmitHandler, useForm } from "react-hook-form";

import Button from "components/Button";
import { addTodo } from "components/TodoList/store";

type Input = {
  text: string;
};

function TextInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = (data, event) => {
    event?.preventDefault();
    addTodo(data);
    reset({ text: "" });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      handleSubmit(addTodo);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyPress}>
      <input
        {...register("text")}
        placeholder="Добавить дело"
        className="mt-8 mr-4 mb-8 ml-8 w-[70%]"
      />
      <Button />
    </form>
  );
}

export default TextInput;
