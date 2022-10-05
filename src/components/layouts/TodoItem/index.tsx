import clsx from "clsx";

import CheckIcon from "@mui/icons-material/Check";
import NoteIcon from "components/uikit/icons/NoteIcon";

import { List, Span } from "./styles";

import TodoCategoryItem from "./TodoCategoryItem";

// TODO нормально типизиовать пропсы.
function TodoItem(props: any) {
  const { id, title, textNote, categories, done, toggle, onToggleTodoDetails, isOpen } = props;

  return (
    <List
      className={clsx(
        "mb-8 flex items-center rounded-default border-b-1 border-gray-200 bg-white pt-14 pl-12 pr-12 pb-14 last:mb-0 last:border-none hover:bg-blue-100 focus:bg-blue-100",
        {
          "bg-blue-100": isOpen,
        },
      )}
    >
      <Span onClick={toggle}>
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
        {textNote && (
          <div className="flex items-center">
            <NoteIcon className="mr-4" />
            <span className="text-[10px] leading-[14px] text-primary">{textNote}</span>
          </div>
        )}

        {categories?.length > 0 && <TodoCategoryItem options={categories} />}
      </div>
    </List>
  );
}

export default TodoItem;
