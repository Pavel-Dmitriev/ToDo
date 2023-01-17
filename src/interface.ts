import { Dispatch, SetStateAction } from "react";

import { IOption } from "components/Select/interface";

export interface ITodoItem {
  id: string | null;
  title: string | null;
  note: string | null;
  categories?: IOption[] | null;
  reminder?: IReminder | null;
  done: boolean;
  onMarkCompletionTodo?: () => void;
  isOpen: boolean;
  toggleTodoDetails?: () => {};
  createdAt: Date | string | null;
}

export interface ITodoList {
  onActiveId: Dispatch<SetStateAction<string | null>>;
  onIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IReminder {
  name: string;
  date: Date | string;
  time: Date | string;
}
