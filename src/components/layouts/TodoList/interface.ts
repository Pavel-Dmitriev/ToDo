import { Category } from "types/types";

export interface ITodoItem {
  id: string;
  title: string;
  note: string;
  category?: Category;
  done: boolean;
  toggle?: () => {};
  isOpen: boolean;
  toggleTodoDetails?: () => {};
  createdAt: Date | string;
}
