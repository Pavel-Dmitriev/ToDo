import { Category } from "types/types";

export interface ITodoItem {
  id: string;
  text: string;
  category?: Category;
  done: boolean;
  toggle?: () => {};
  isOpen: boolean;
  toggleTodoDetails?: () => {};
  createdAt: Date | string;
}
