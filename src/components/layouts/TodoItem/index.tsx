import clsx from "clsx";

import CheckIcon from "@mui/icons-material/Check";

import { Span } from "./styles";

// TODO нормально типизиовать пропсы.
function TodoItem(props: any) {
  const { id, text, done, toggle, toggleTodoDetails, setOpen, isOpen } = props;

  const handleOpenDetails = () => {};

  return (
    <li
      className={clsx(
        "flex items-center border-b-1 border-gray-200 pt-14 pl-12 pr-12 pb-14 last:border-none hover:bg-gray-200 focus:bg-blue-100",
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
      <button
        className={clsx({ "text-gray-300 line-through decoration-gray-300": props.done })}
        onClick={() => toggleTodoDetails(setOpen(!isOpen))}
      >
        {text}
      </button>
    </li>
  );
}

export default TodoItem;
