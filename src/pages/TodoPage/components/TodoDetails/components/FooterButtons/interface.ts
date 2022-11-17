import { ITodoItem } from "pages/TodoPage/components/TodoList/interface";

export interface IFooterButtons {
  todoItem: ITodoItem;
  onClose: (data: ITodoItem) => void;
  onDeleteTodo: (data: ITodoItem) => void;
  createdAt: string;
}
