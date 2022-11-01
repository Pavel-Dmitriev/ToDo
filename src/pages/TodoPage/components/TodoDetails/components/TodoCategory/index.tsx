import Select from "components/uikit/Select";

import { OPTIONS } from "./constants";

import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

function TodoCategory({ todoItem }: { todoItem: ITodoItem | undefined }) {
  return (
    <div className="mb-8 rounded-default bg-white p-16">
      <Select
        name="categories"
        closeMenuOnSelect={false}
        isMulti
        options={OPTIONS}
        placeholder="Выберите категорию"
      />
    </div>
  );
}

export default TodoCategory;
