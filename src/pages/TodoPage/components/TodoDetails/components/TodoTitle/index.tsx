import { useFormContext } from "react-hook-form";
import clsx from "clsx";

import EditIcon from "@mui/icons-material/Edit";

import Button from "components/uikit/Button";
import Textarea from "components/uikit/Textarea";

import { ITodoTitle } from "./interface";

function TodoTitle({ title, activeTitle, setActiveTitle }: ITodoTitle) {
  const { register, setValue, getValues } = useFormContext();

  return (
    <div className="mb-8">
      <div className="relative flex min-h-[46px] flex-col overflow-y-auto rounded-default">
        <Textarea
          {...register("title")}
          placeholder="Добавить заметку"
          className={clsx("absolute inset-0 min-h-[46px] flex-1 resize-none text-xs", {
            flex: activeTitle,
            hidden: !activeTitle,
          })}
          maxLength={255}
          // disabled={!activeNote}
        />

        {title && (
          <p
            className={clsx(
              "rounded-dafault absolute left-0 top-0 top-0 right-0 bottom-0 overflow-y-auto bg-white p-8 font-semibold leading-5",
              {
                block: !activeTitle,
                hidden: activeTitle,
              },
            )}
          >
            {title}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-end">
        <EditIcon
          onClick={() => {
            if (!activeTitle) {
              setActiveTitle(true);
              title && setValue("title", title);
            }
          }}
          fontSize="small"
          className={clsx("mr-8 cursor-pointer hover:text-blue", {
            "!hidden": activeTitle,
          })}
        />

        <Button
          name="Отмена"
          onClick={() => {
            setActiveTitle(false);
            // setValue("title", "");
          }}
          disabled={!activeTitle}
          hidden={!activeTitle}
          className="text-xs hover:text-blue"
        />
      </div>
    </div>
  );
}

export default TodoTitle;
