interface ITodoItem {
  text: string;
  category?: string;
  done: boolean;
}

function TodoItem(props: ITodoItem) {
  return (
    <li className="flex items-center p-8 pl-12 pr-12 hover:bg-gray-200 focus:bg-blue-100">
      <span className="mr-12 inline-block h-[18px] w-[18px] rounded-full border-1 border-blue-500 bg-transparent"></span>
      <button>
        <span className="text-xs font-normal leading-[20px] text-primary">{props.text}</span>
      </button>
    </li>
  );
}

export default TodoItem;
