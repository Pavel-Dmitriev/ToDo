import { Dispatch, SetStateAction } from "react";

import { ITodoItem } from "interface";

export interface ITodoItemProps extends ITodoItem {
  onToggleTodoDetails: (id: string | null) => void;
}
