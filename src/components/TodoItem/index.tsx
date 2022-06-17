import clsx from "clsx";

interface ITodoItem {
  text: string;
  category?: string;
  done: boolean;
  toggle: () => {};
}

function TodoItem(props: ITodoItem) {
  console.log(props);

  return (
    <li
      className="flex items-center border-b-1 border-gray-200 pt-14 pl-12 pr-12 pb-14 last:border-none hover:bg-gray-200 focus:bg-blue-100"
      onClick={props.toggle}
    >
      <span className="mr-12 inline-block h-[18px] w-[18px] rounded-full border-1 border-blue-500 bg-transparent "></span>
      <button className={clsx({ "text-gray-300 line-through decoration-gray-300": props.done })}>
        {props.text}
      </button>
    </li>
  );
}

export default TodoItem;
