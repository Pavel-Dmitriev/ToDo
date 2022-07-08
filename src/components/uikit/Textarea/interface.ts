import { TextareaHTMLAttributes } from "react";

export default interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  inline?: false;
  description?: string;
  labelClassName?: string;
  error?: false;
  errorText?: string;
}

export interface IStyled extends Pick<IProps, "inline" | "error"> {}
