import { useFormContext } from "react-hook-form";

import Select from "components/uikit/Select";
import Button from "components/uikit/Button";

import { OPTIONS } from "./constants";

import { updateTodo } from "pages/TodoPage/components/TodoList/store";

import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

function TodoCategory({ todoItem }: { todoItem: ITodoItem | undefined }) {
  const { reset, handleSubmit } = useFormContext();

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();
    updateTodo({ ...todoItem, categories: data.categories });
    // reset();
  };

  return (
    <div className="mb-8 rounded-default bg-white p-16">
      <Select
        name="categories"
        closeMenuOnSelect={false}
        isMulti
        options={OPTIONS}
        placeholder="Выберите категорию"
      />
      <div className="mt-4 flex items-center justify-end">
        <Button
          type="submit"
          name="Добавить"
          onClick={handleSubmit(onSubmit)}
          className="text-xs hover:text-blue"
        />
      </div>
    </div>
  );
}

export default TodoCategory;
