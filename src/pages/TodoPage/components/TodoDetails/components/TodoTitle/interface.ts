import { Dispatch, SetStateAction } from "react";

export interface ITodoTitle {
  title: string;
  activeTitle: boolean;
  setActiveTitle: Dispatch<SetStateAction<boolean>>;
}
