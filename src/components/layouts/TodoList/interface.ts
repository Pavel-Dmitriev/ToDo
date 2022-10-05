import { Dispatch, SetStateAction } from "react";
import { Сategories } from "types/types";

export interface ITodoItem {
  id: string;
  title: string;
  note: string;
  categories?: Сategories;
  done: boolean;
  toggle?: () => {};
  isOpen: boolean;
  toggleTodoDetails?: () => {};
  createdAt: Date | string;
}

export interface ITodoList {
  setActiveId: Dispatch<SetStateAction<string>>;
  setIsOpen: () => void;
}
