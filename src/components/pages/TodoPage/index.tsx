import { useState } from "react";

import TodoDetails from "components/layouts/TodoDetails";
import TextInputWrapper from "components/layouts/TextInputWrapper";
// import SortingTodo from "components/layouts/SortingTodo";
import TodoList from "components/layouts/TodoList";

// import { DivWithBackground } from "components/layouts/TodoList/styles";
import { deleteTodo, openTodoDetails } from "../../layouts/TodoList/store";
import { setLocalStorageTodos } from "api/localStorage";
import useToggle from "hooks/useToggle";

import { ITodoItem } from "../../layouts/TodoList/interface";

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
        <TextInputWrapper />
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