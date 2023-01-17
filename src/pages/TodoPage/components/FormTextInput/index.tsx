import { SubmitHandler, useForm } from "react-hook-form";

import LabelInput from "components/LabelInput";
import TextInput from "components/TextInput";
import Button from "components/Button";

import { addTodo } from "store";

import { IUseForm } from "./interface";

function FormTextInput() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<IUseForm>({
    defaultValues: {
      title: "",
    },
  });

  const errorText = errors?.title?.message;
  const validationRules = {
    required: "поле обязательно для заполнения",
    minLength: {
      value: 2,
      message: "минимальное кол-во символов 2",
    },
  };

  const onSubmit: SubmitHandler<IUseForm> = (data, event) => {
    event?.preventDefault();
    addTodo(data);
    reset({ title: "" });
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      handleSubmit(addTodo);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onKeyDown={onKeyPress}>
      <LabelInput
        error={Boolean(errors?.title)}
        errorText={errorText}
        children={
          <TextInput
            {...register("title", validationRules)}
            placeholder="Добавить дело"
            className="mb-8 w-[100%] border-none shadow-[0_-17px_0_-16px_#2564cf_inset] placeholder:text-blue hover:placeholder:text-gray-300 focus:outline-none focus:placeholder:text-gray-300"
          />
        }
      />
      <div className="flex justify-end">
        <Button name="Добавить" className="text-xs text-blue" disabled={!isDirty} />
      </div>
    </form>
  );
}

export default FormTextInput;
