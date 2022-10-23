import { ReactNode } from "react";
import { LabelProps } from "./types";

export interface IProps extends LabelProps {
  children?: ReactNode;
  name: string;
  mask: string;
  rules?: any;
  className?: string;
}
