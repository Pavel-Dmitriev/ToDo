import { Dispatch, SetStateAction } from "react";
import { ITodoItem } from "../TodoList/interface";

export interface ITodoDetails {
  id: string;
  isOpen: boolean;
  setOpen: () => void;
  onClose: (data: ITodoItem) => void;
  onDeleteTodo: (data: any) => void;
}
