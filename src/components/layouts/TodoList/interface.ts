import { BooleanType } from "types/types";

export interface ITodoItem {
  id: string;
  text: string;
  category?: "Желтая категория" | "Синяя категория" | "Красная категория" | null;
  done: BooleanType;
  toggle?: () => {};
  isOpen: BooleanType;
  toggleTodoDetails?: () => {};
}
