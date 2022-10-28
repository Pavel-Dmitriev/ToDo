import { SubmitHandler, useForm } from "react-hook-form";

import Button from "components/uikit/Button";
import TextInput from "components/uikit/TextInput";

import { addTodo } from "pages/TodoPage/components/TodoList/store";

type Input = {
  title: string;
};

function FormTextInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = (data, event) => {
    event?.preventDefault();
    addTodo(data);
    reset({ title: "" });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      handleSubmit(addTodo);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyPress} className="">
      <TextInput
        {...register("title")}
        placeholder="Добавить дело"
        className=" mb-8 w-[100%] shadow-[0_-17px_0_-16px_#2564cf_inset] placeholder:text-blue hover:placeholder:text-gray-300 focus:placeholder:text-gray-300"
      />
      <div className="flex justify-end">
        <Button name="Добавить" className="text-xs text-blue" />
      </div>
    </form>
  );
}

export default FormTextInput;
