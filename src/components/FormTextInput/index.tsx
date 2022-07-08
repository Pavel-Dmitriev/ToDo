import { SubmitHandler, useForm } from "react-hook-form";

import Button from "components/Button";
import TextInput from "components/uikit/TextInput";

import { addTodo } from "components/TodoList/store";

type Input = {
  text: string;
};

function FormTextInput() {
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
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyPress} className="flex flex-col">
      <TextInput
        {...register("text")}
        placeholder="Добавить дело"
        className=" mb-8 w-[100%] shadow-[0_-17px_0_-16px_#2564cf_inset] placeholder:text-blue hover:placeholder:text-gray-300 focus:placeholder:text-gray-300"
      />
      <Button className="self-end" />
    </form>
  );
}

export default FormTextInput;
