import { ReactNode, LabelHTMLAttributes } from "react";

export default interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  label?: string;
  description?: string;
  inline?: boolean;
  className?: string;
  labelClassName?: string;
  error?: boolean;
  errorText?: string;
  required?: boolean;
  descriptionBottom?: boolean;
}

export interface IStyled extends Pick<IProps, "inline" | "error"> {}
