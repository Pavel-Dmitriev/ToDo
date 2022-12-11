import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import dayjs from "dayjs";

import Button from "components/uikit/Button";

import TextareaWrapper from "./components/TextAreaWrapper";
import TodoReminder from "./components/TodoReminder";
import TodoCategory from "./components/TodoCategory";
import FooterButtons from "./components/FooterButtons";

import { Aside } from "./styles";

import useDetailsDataById from "./hooks/useDetailsDataById";

import { updateTodo } from "store";

import { DEFAULT_VALUES } from "./constants";

import { ITodoDetails } from "./interface";
import { ITodoItem } from "interface";

function TodoDetails(props: ITodoDetails) {
  const { isOpen, id, onClose, onDeleteTodo } = props;

  const todoItem = useDetailsDataById(id, isOpen);

  const methods = useForm({
    defaultValues: DEFAULT_VALUES,
  });
  const {
    handleSubmit,
    control,
    setValue,
    formState: { isDirty, isValid },
  } = methods;

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    updateTodo({
      ...todoItem,
      title: data.title,
      categories: data.categories,
      reminder: data.reminder,
      note: data.note,
    });
  };

  const createdAt = useMemo(
    () => dayjs(todoItem?.createdAt).format("DD.MM.YYYY"),
    [todoItem?.createdAt],
  );

  useEffect(() => {
    setValue("title", todoItem?.title as string);
    setValue("note", todoItem?.note as string);
  }, [isOpen]);

  return (
    <FormProvider {...methods}>
      <Aside
        className={clsx(
          "duration-1500 flex flex-1 flex-col justify-between bg-gray transition-[max-width] ease-in",
          {
            "max-w-[360px]": isOpen,
            "max-w-0": !isOpen,
          },
        )}
      >
        <form
          className="mt-10 flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-10 pb-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextareaWrapper
            text={todoItem?.title as string}
            name="title"
            placeholder="Добавить название дела"
          />
          <TodoCategory todoItem={todoItem} />
          <TodoReminder todoItem={todoItem} />
          <TextareaWrapper
            text={todoItem?.note as string}
            name="note"
            placeholder="Добавить заметку"
            className="min-h-[96px]"
          />
          <div className="mt-12 flex flex-1 justify-center">
            <Button
              name="Отправить"
              className="transition-[background-color, color] flex-1 flex-col self-end border-1 border-blue bg-white duration-300 hover:bg-blue hover:text-white"
              disabled={!isDirty || !isValid}
            />
          </div>
        </form>
        <FooterButtons
          todoItem={todoItem as ITodoItem}
          onClose={onClose}
          onDeleteTodo={onDeleteTodo}
          createdAt={createdAt}
        />
      </Aside>
    </FormProvider>
  );
}

export default TodoDetails;
