import { IOption } from "components/uikit/Select/interface";

export interface IColor {
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface ITodoCategoryItem {
  options?: IOption[];
  className?: string;
}
