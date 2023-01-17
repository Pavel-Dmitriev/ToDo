import { IOption } from "components/Select/interface";
import { ITodoItem } from "interface";

export interface ITodoDetails {
  id: string | null;
  isOpen: boolean;
  onClose: (data: ITodoItem) => void;
  onDeleteTodo: (data: any) => void;
}

export interface IFormValues {
  title: string;
  note: string;
  categories: IOption[] | [];
  reminder: {
    name: string;
    date: Date | string;
    time: Date | string;
  };
}
