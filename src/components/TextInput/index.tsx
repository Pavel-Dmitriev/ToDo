import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { inputContext } from "context/inputContext";

import Button from "components/Button";

type Input = {
  value: string;
};

function TextInput() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      value: "",
    },
  });
  const { value, setValue, todos, setTodos } = useContext(inputContext);

  const onSubmit: SubmitHandler<Input> = (data) => {
    setValue(data.value);
    setTodos(data.value);
    reset({ value: "" });
    console.log(data);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSubmit(onSubmit);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyPress}>
      <input
        {...register("value")}
        placeholder="Добавить дело"
        className="mt-8 mr-4 mb-8 ml-8 w-[70%]"
      />
      <Button />
    </form>
  );
}

export default TextInput;
