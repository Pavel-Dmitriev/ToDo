import { ReactNode, LabelHTMLAttributes } from "react";

export default interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  label?: string;
  inline?: boolean;
  className?: string;
  labelClassName?: string;
  error?: boolean;
  errorText?: string;
}

export interface IStyled extends Pick<IProps, "inline" | "error"> {}
