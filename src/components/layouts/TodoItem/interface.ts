import { ITodoItem } from "../TodoList/interface";

export interface ITodoItemProps extends ITodoItem {
  onToggleTodoDetails: (id: string) => void;
  setOpen: () => void;
}
