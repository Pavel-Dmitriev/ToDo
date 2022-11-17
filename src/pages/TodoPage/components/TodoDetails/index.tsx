import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import dayjs from "dayjs";

import Button from "components/uikit/Button";

import TodoReminder from "./components/TodoReminder";
import TodoCategory from "./components/TodoCategory";
import TodoTitle from "./components/TodoTitle";
import TodoNote from "./components/TodoNote";
import FooterButtons from "./components/FooterButtons";

import { Aside } from "./styles";

import useDetailsDataById from "./hooks/useDetailsDataById";

import { updateTodo } from "pages/TodoPage/components/TodoList/store";

import { ITodoDetails } from "./interface";
import { ITodoItem } from "../TodoList/interface";

function TodoDetails(props: ITodoDetails) {
  const { isOpen, id, onClose, onDeleteTodo } = props;

  const [activeNote, setActiveNote] = useState<boolean>(false);
  const [activeTitle, setActiveTitle] = useState<boolean>(false);

  const todoItem = useDetailsDataById(id, isOpen);

  const methods = useForm({
    defaultValues: {
      id: id,
      title: todoItem?.title,
      note: todoItem?.note || "",
      categories: todoItem?.categories || null,
      reminder: {
        name: todoItem?.reminder?.name || "",
        date: todoItem?.reminder?.date || null,
        time: todoItem?.reminder?.time || "",
      },
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    updateTodo({
      ...todoItem,
      title: data.title,
      categories: data.categories,
      reminder: data.reminder,
      note: data.note,
    });
    setActiveNote(false);
    setActiveTitle(false);
  };

  const createdAt = useMemo(
    () => dayjs(todoItem?.createdAt).format("DD.MM.YYYY"),
    [todoItem?.createdAt],
  );

  return (
    <FormProvider {...methods}>
      <Aside
        className={clsx(
          "flex w-[360px] max-w-[360px] flex-1 flex-col justify-between  bg-gray transition-[width] duration-300 ease-out",
        )}
      >
        <form
          className="mt-10 flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-10 pb-16"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TodoTitle
            title={todoItem?.title as string}
            activeTitle={activeTitle}
            setActiveTitle={setActiveTitle}
          />
          <TodoCategory todoItem={todoItem} />
          <TodoReminder todoItem={todoItem} />
          <TodoNote note={todoItem?.note} activeNote={activeNote} setActiveNote={setActiveNote} />
          <div className="flex flex-1 justify-center">
            <Button name="Отправить" className="items-center self-end" />
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
