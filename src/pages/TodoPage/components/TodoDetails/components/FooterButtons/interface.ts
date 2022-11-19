import { ITodoItem } from "interface";

export interface IFooterButtons {
  todoItem: ITodoItem;
  onClose: (data: ITodoItem) => void;
  onDeleteTodo: (data: ITodoItem) => void;
  createdAt: string;
}
