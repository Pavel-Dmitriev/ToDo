import clsx from "clsx";

import { COLOR_OPTIONS } from "components/TodoCategory/constants";

import { IOption } from "components/uikit/Select/interface";

function TodoCategoryItem({ options }: { options?: IOption[] }) {
  return (
    <div className="grid grid-flow-col gap-x-8 pb-4">
      {options?.map((item) => (
        <div key={`item_${item.value}`}>
          <span
            className={clsx(
              `mr-4 inline-block h-8 w-8 rounded-full border-1 border-solid ${
                COLOR_OPTIONS[item.value].bgColor
              } ${COLOR_OPTIONS[item.value].borderColor}`,
            )}
          ></span>
          <span className={clsx(`text-2xs ${COLOR_OPTIONS[item.value].color}`)}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoCategoryItem;
