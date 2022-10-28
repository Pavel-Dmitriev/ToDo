import { ITodoItem } from "../../interface";

export interface ITodoItemProps extends ITodoItem {
  onToggleTodoDetails: (id: string) => void;
  setOpen: () => void;
}
