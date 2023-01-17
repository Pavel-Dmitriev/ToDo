import { IOption } from "components/Select/interface";

export interface IColor {
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface ITodoCategoryItem {
  options?: IOption[] | null;
  className?: string;
}
