import { createContext } from "react";

interface IInputContext {
  value: string;
  setValue: (value: string) => void;
}

export const inputContext = createContext<IInputContext>({
  value: "",
  setValue: () => {},
});
