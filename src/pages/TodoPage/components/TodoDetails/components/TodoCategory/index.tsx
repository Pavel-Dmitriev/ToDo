import Select from "components/Select";

import TodoCategoryItem from "components/TodoCategoryItem";

import { OPTIONS } from "./constants";

import { ITodoItem } from "interface";

function TodoCategory({ todoItem }: { todoItem: ITodoItem | undefined }) {
  return (
    <div className="mb-8 rounded-default bg-white p-16">
      {todoItem?.categories && (
        <TodoCategoryItem options={todoItem?.categories} className="mb-8 grid grid-cols-2" />
      )}

      <Select
        name="categories"
        placeholder="Выберите категорию"
        options={OPTIONS}
        closeMenuOnSelect={false}
        isMulti
      />
    </div>
  );
}

export default TodoCategory;
