import { useState } from "react";

// import SortingTodo from "components/layouts/SortingTodo";

import FormTextInput from "./components/FormTextInput";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

import { deleteTodo, openTodoDetails } from "./components/TodoList/store";

import { setLocalStorageTodos } from "api/localStorage";
import useToggle from "hooks/useToggle";

import { ITodoItem } from "./components/TodoList/interface";

function TodoPage() {
  const [activeId, setActiveId] = useState<string>("");
  // TODO подцепить состояние из стора
  const [isOpen, setIsOpen] = useToggle(false);

  const onCloseTodoDetails = (item: ITodoItem) => {
    setIsOpen();
    openTodoDetails(item);
  };

  const handleDeleteTodo = () => {
    deleteTodo(activeId);
    setIsOpen();
    // TODO придумать получше, что бы не сетать пустой массив в ЛС.
    setLocalStorageTodos([]);
  };

  // const onCloseTodoDetails = (item: any) => {
  //   // handleToggleTodoDetails(id);
  //   openTodoDetails(item);
  //   setOpen();
  //   console.log("close todo details");
  // };

  return (
    <>
      <div className="flex flex-1 flex-col overflow-hidden bg-gray pt-12 pr-16 pl-16">
        {/* <SortingTodo /> */}
        <div className="mb-12 rounded-4 bg-white p-12">
          <FormTextInput />
        </div>
        <div>
          <TodoList setIsOpen={setIsOpen} setActiveId={setActiveId} />
          {/* <DivWithBackground /> */}
        </div>
      </div>
      {isOpen && (
        <TodoDetails
          isOpen={isOpen}
          id={activeId}
          onClose={onCloseTodoDetails}
          onDeleteTodo={handleDeleteTodo}
        />
      )}
    </>
  );
}

export default TodoPage;
