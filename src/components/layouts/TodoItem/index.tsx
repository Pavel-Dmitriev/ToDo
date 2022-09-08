import clsx from "clsx";

import CheckIcon from "@mui/icons-material/Check";

import { List, Span } from "./styles";

// TODO нормально типизиовать пропсы.
function TodoItem(props: any) {
  const { id, text, category, done, toggle, onToggleTodoDetails, isOpen } = props;

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
          <span>{text}</span>
        </button>
        {category && (
          <div>
            <span
              className={clsx("max-w-150 text-2xs ", {
                "text-yellow": true,
              })}
            >
              {category}
            </span>
          </div>
        )}
      </div>
    </List>
  );
}

export default TodoItem;
