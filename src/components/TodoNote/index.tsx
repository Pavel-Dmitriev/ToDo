import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import clsx from "clsx";
import EditIcon from "@mui/icons-material/Edit";

import Button from "components/uikit/Button";
import Textarea from "components/uikit/Textarea";

function TodoNote({ textNote }: any) {
  const [activeNote, setActiveNote] = useState<boolean>(false);

  const { register, setValue } = useFormContext();

  return (
    <div>
      <div className="relative flex min-h-[96px] flex-col overflow-y-auto rounded-default">
        <Textarea
          {...register("note")}
          placeholder="Добавить заметку"
          className={clsx("absolute inset-0 min-h-[96px] flex-1 resize-none text-xs", {
            flex: activeNote,
            hidden: !activeNote,
          })}
          maxLength={255}
          disabled={!activeNote}
        />

        {textNote && (
          <p
            className={clsx(
              "bottom-20px rounded-dafault absolute top-0 top-0 right-0 left-0 min-h-[96px] bg-white p-8 text-xs",
              {
                block: !activeNote,
                hidden: activeNote,
              },
            )}
          >
            {textNote}
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-end">
        <EditIcon
          onClick={() => {
            if (!activeNote) {
              setActiveNote(true);
              textNote && setValue("note", textNote);
            }
          }}
          fontSize="small"
          className={clsx("mr-8 cursor-pointer hover:text-blue", {
            "!hidden": activeNote,
          })}
        />
        <Button
          name="Отмена"
          onClick={() => {
            setActiveNote(false);
            setValue("note", "");
          }}
          disabled={!activeNote}
          hidden={!activeNote}
          className="text-xs hover:text-blue"
        />
        <Button
          type="submit"
          name="Добавить"
          onClick={() => {
            setActiveNote(false);
          }}
          // disabled={!watchNote}
          hidden={!activeNote}
          className="text-xs hover:text-blue"
        />
      </div>
    </div>
  );
}

export default TodoNote;
