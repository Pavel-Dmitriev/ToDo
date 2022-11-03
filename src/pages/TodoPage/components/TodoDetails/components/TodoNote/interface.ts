import { Dispatch, SetStateAction } from "react";

export interface ITodoNote {
  note?: string;
  activeNote: boolean;
  setActiveNote: Dispatch<SetStateAction<boolean>>;
}
