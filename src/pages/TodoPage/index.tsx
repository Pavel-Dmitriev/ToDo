import { useEffect, useState } from "react";

import FormTextInput from "./components/FormTextInput";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

import { deleteTodo, getTodos, openTodoDetails } from "store";

import { ITodoItem } from "interface";

function TodoPage() {
  const [activeId, setActiveId] = useState<string | null>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onCloseTodoDetails = (item: ITodoItem) => {
    setIsOpen(false);
    openTodoDetails(item);
  };

  const handleDeleteTodo = () => {
    deleteTodo(activeId);
    setIsOpen(false);
  };

  // const onCloseTodoDetails = (item: any) => {
  //   // handleToggleTodoDetails(id);
  //   openTodoDetails(item);
  //   setOpen();
  //   console.log("close todo details");
  // };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col overflow-hidden bg-gray pt-12 pr-16 pl-16">
        <div className="mb-12 rounded-4 bg-white p-12">
          <FormTextInput />
        </div>
        <div>
          <TodoList setIsOpen={setIsOpen} setActiveId={setActiveId} />
          {/* <DivWithBackground /> */}
        </div>
      </div>
      <TodoDetails
        isOpen={isOpen}
        id={activeId}
        onClose={onCloseTodoDetails}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default TodoPage;
