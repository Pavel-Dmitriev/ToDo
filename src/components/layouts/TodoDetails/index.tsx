import { FormProvider, useForm } from "react-hook-form";
import clsx from "clsx";
import dayjs from "dayjs";

import DeleteIcon from "@mui/icons-material/Delete";
import CloseCard from "components/uikit/icons/CloseCard";

import TodoReminder from "components/TodoReminder";
import TodoCategory from "components/TodoCategory";
import TodoNote from "components/TodoNote";

import { Aside } from "./styles";

import useDetailsDataById from "./hooks/useDetailsDataById";

import { ITodoDetails } from "./interface";

function TodoDetails(props: ITodoDetails) {
  const { isOpen, id, onClose, onDeleteTodo } = props;

  const todoItem = useDetailsDataById(id, isOpen);

  const methods = useForm({
    defaultValues: {
      id: id,
      note: "",
      categories: todoItem?.categories || null,
    },
  });

  const createdAt = dayjs(todoItem?.createdAt).format("DD.MM.YYYY");

  return (
    <FormProvider {...methods}>
      <Aside
        className={clsx(
          "flex w-[360px] max-w-[360px] flex-1 flex-col bg-gray transition-[width] duration-300 ease-out",
        )}
      >
        <form className="mt-10 flex-1 overflow-y-auto overflow-x-hidden px-10 pb-16">
          <div className="mb-8 flex items-center rounded-default bg-white p-16 font-semibold leading-5">
            {todoItem?.title}
          </div>
          <TodoCategory todoItem={todoItem} />
          <TodoReminder />
          <TodoNote textNote={todoItem?.note} todoItem={todoItem} />
        </form>
        <div className="mx-10 flex items-center justify-between border-t-1 border-gray-200 py-16">
          <button onClick={() => onClose(todoItem!)}>
            <CloseCard />
          </button>
          <span className="text-2xs text-gray-300">Создано {createdAt}</span>
          <button onClick={() => onDeleteTodo(todoItem)}>
            <DeleteIcon fontSize="small" />
          </button>
        </div>
      </Aside>
    </FormProvider>
  );
}

export default TodoDetails;
