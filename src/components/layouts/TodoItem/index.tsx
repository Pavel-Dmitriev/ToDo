import clsx from "clsx";

import CheckIcon from "@mui/icons-material/Check";

import { Span } from "./styles";

interface ITodoItem {
  text: string;
  category?: string;
  done: boolean;
  toggle: () => {};
}

function TodoItem(props: ITodoItem) {
  const { text, done, toggle } = props;

  return (
    <li className="flex items-center border-b-1 border-gray-200 pt-14 pl-12 pr-12 pb-14 last:border-none hover:bg-gray-200 focus:bg-blue-100">
      <Span onClick={toggle}>
        {done && (
          <i className="flex items-center justify-center">
            <CheckIcon color="inherit" fontSize="inherit" />
          </i>
        )}
      </Span>
      <button className={clsx({ "text-gray-300 line-through decoration-gray-300": props.done })}>
        {text}
      </button>
    </li>
  );
}

export default TodoItem;
