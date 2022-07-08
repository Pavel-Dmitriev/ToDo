import { InputHTMLAttributes } from "react";

import { BooleanType } from "types/types";

export default interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inline?: BooleanType;
  description?: string;
  labelClassName?: string;
  error?: BooleanType;
  errorText?: string;
  asDisplay?: "transparent";
}

export interface IStyled extends Pick<IProps, "inline" | "error" | "asDisplay"> {}
