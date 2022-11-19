import { ITodoItem } from "interface";

export interface ITodoDetails {
  id: string;
  isOpen: boolean;
  onClose: (data: ITodoItem) => void;
  onDeleteTodo: (data: any) => void;
}
