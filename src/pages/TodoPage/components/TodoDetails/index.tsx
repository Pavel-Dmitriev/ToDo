import { BaseSyntheticEvent, useEffect, useMemo } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
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

import { IOption } from "components/uikit/Select/interface";
import { IFormValues, ITodoDetails } from "./interface";
import { IReminder, ITodoItem } from "interface";

function TodoDetails(props: ITodoDetails) {
  const { isOpen, id, onClose, onDeleteTodo } = props;

  const todoItem = useDetailsDataById(id, isOpen);

  const methods = useForm<IFormValues>({
    defaultValues: DEFAULT_VALUES,
  });
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, isValid, isSubmitSuccessful },
  } = methods;

  const onSubmit: SubmitHandler<IFormValues> = (
    data: IFormValues,
    event?: BaseSyntheticEvent<object, any, any> | undefined,
  ) => {
    event?.preventDefault();

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
    setValue("categories", todoItem?.categories as IOption[]);
    setValue("reminder", {
      name: todoItem?.reminder?.name,
      date: todoItem?.reminder?.date,
      time: todoItem?.reminder?.time,
    } as IReminder);
  }, [isOpen]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        categories: DEFAULT_VALUES.categories,
        reminder: {
          name: DEFAULT_VALUES.reminder.name,
          date: DEFAULT_VALUES.reminder.date,
          time: DEFAULT_VALUES.reminder.time,
        },
      });
    }
  }, [isSubmitSuccessful, todoItem, reset]);

  return (
    <FormProvider {...methods}>
      <Aside
        className={clsx(
          "duration-1500 justiAlso for events instead of React.SyntheticEvent, you can also type them as following: Event, MouseEvent, KeyboardEvent...etc, depends on the use case of the handler.fy-between flex flex-1 flex-col bg-gray transition-[max-width] ease-in",
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
