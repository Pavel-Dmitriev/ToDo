import { useState } from "react";

import { inputContext } from "context/inputContext";

import TodoDetails from "components/layouts/TodoDetails";
import TodoWrapper from "components/layouts/TodoWrapper";

interface INewItem {
  id: string | number;
  task: string;
  selected: boolean;
  done: boolean;
}

function Wrapper() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Array<object>>([]);
  const InputProvider = inputContext.Provider;

  const addTask = (inputValue: string) => {
    if (inputValue) {
      const newItem: INewItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: inputValue,
        selected: false,
        done: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  return (
    <InputProvider
      value={{
        value: inputValue,
        setValue: setInputValue,
        todos: todos,
        setTodos: addTask,
      }}
    >
      <main className="grid h-screen grid-cols-[3fr,1fr]">
        <TodoWrapper />
        <TodoDetails />
      </main>
    </InputProvider>
  );
}

export default Wrapper;
