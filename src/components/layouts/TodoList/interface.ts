import { Dispatch, SetStateAction } from "react";
import { Сategories } from "types/types";

export interface ITodoItem {
  id: string;
  title: string;
  note: string;
  categories?: Сategories;
  reminder?: IReminder;
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

export interface IReminder {
  name: string;
  date: Date | string;
  time: Date | string;
}
