import { createContext } from "react";

interface IInputContext {
  value: string;
  setValue: (value: string) => void;
  todos: Array<object>;
  setTodos: (inputValue: string) => void;
}

export const inputContext = createContext<IInputContext>({
  value: "",
  setValue: () => {},
  todos: [],
  setTodos: () => {},
});
