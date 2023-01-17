import { InputHTMLAttributes } from "react";

export default interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inline?: boolean;
  description?: string;
  labelClassName?: string;
  error?: boolean;
  errorText?: string;
  asDisplay?: "transparent";
}

export interface IStyled extends Pick<IProps, "inline" | "error" | "asDisplay"> {}
