import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import CheckIcon from "@mui/icons-material/Check";

import { List, Span } from "./styles";

import TodoCategoryItem from "components/TodoCategoryItem";
import TodoReminderItem from "./TodoReminderItem";
import TodoNoteItem from "./TodoNoteItem";

import { ITodoItemProps } from "./interface";

function TodoItem(props: ITodoItemProps) {
  const {
    id,
    title,
    note,
    categories,
    reminder,
    done,
    onMarkCompletionTodo,
    onToggleTodoDetails,
    isOpen,
  } = props;

  return (
    <List
      className={clsx(
        "mb-8 flex items-center rounded-default border-b-1 border-gray-200 bg-white pt-14 pl-12 pr-12 pb-14 last:mb-0 last:border-none hover:bg-blue-100 focus:bg-blue-100",
        {
          "bg-blue-100": isOpen,
        },
      )}
    >
      <Span onClick={onMarkCompletionTodo}>
        {done && (
          <i className="flex items-center justify-center">
            <CheckIcon color="inherit" fontSize="inherit" />
          </i>
        )}
      </Span>

      <div className="cursor-pointer">
        <button
          className={clsx({ "text-gray-300 line-through decoration-gray-300": props.done })}
          onClick={() => onToggleTodoDetails(id)}
        >
          <span>{title}</span>
        </button>

        <div className="grid grid-flow-col items-center gap-x-12">
          {note && <TodoNoteItem note={note} />}

          {(reminder?.name || reminder?.date || reminder?.time) && (
            <TodoReminderItem reminder={reminder} />
          )}

          {!isEmpty(categories) && (
            <TodoCategoryItem options={categories} className="grid grid-flow-col gap-x-8 pb-4" />
          )}
        </div>
      </div>
    </List>
  );
}

export default TodoItem;
