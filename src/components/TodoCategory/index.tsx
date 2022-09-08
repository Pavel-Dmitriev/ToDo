import Dropdown from "components/uikit/Dropdown";
import Select from "components/uikit/Select";

import { Category } from "types/types";

function TodoCategory({ category }: { category: Category }) {
  const options = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];
  return (
    <div className="mb-8 rounded-default bg-white p-16">
      <Select
        // blurInputOnSelect={false}
        closeMenuOnSelect={false}
        // defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={options}
        // styles={colourStyles}
      />
      {/* <Dropdown
        button={<button>Выбрать категорию</button>}
        children={
          <ul>
            <li>Желтая категория</li>
          </ul>
        }
      /> */}
    </div>
  );
}

export default TodoCategory;
