import clsx from "clsx";

import Button from "components/Button";
import Dropdown from "components/Dropdown";

import ButtonWithText from "./ButtonWithText";

import useFilter from "./useFilter";

function FilterTodo() {
  const { filterItems, textFilter, active } = useFilter();

  return (
    <div className="flex items-center justify-end py-4 px-12 ">
      <Dropdown button={<ButtonWithText textFilter={textFilter} />}>
        <ul className="absolute right-0 rounded-default border-1 border-gray-200 bg-white">
          {filterItems.map(({ id, name, code, onClick }, index) => (
            <li key={`items_${id}`} className="py-8 px-8">
              <Button
                name={name}
                onClick={onClick}
                className={clsx("w-full border-b-1 hover:text-blue/[0.9]", {
                  "border-b-0": index === filterItems.length - 1,
                  "text-blue": active === code,
                })}
              />
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
}

export default FilterTodo;
