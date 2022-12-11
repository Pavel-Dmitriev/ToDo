import { Dispatch, SetStateAction } from "react";
import { IOption } from "components/uikit/Select/interface";

export interface ITodoItem {
  id: string | null;
  title: string | null;
  note: string | null;
  categories?: IOption[] | null;
  reminder?: IReminder | null;
  done: boolean;
  toggle?: () => void;
  isOpen: boolean;
  toggleTodoDetails?: () => {};
  createdAt: Date | string | null;
}

export interface ITodoList {
  setActiveId: Dispatch<SetStateAction<string | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IReminder {
  name: string;
  date: Date | string;
  time: Date | string;
}
