import { DatePickerProps } from "react-date-picker";

import { ReactNode } from "react";
import { LabelProps } from "./types";

export interface IProps extends DatePickerProps, LabelProps {
  name: any;
  children?: ReactNode;
  addRefToField?: any;
  errorText?: string;
  className?: string | string[];
  inline?: boolean;
  disabled?: boolean;
  rules?: any;
  defaultValue?: Date | Date[] | undefined;
  onChange?: any;
  onChangeValue?: any;
  value?: Date | Date[] | undefined | any;
  format?: "dd.MM.y";
}

export interface ICustomDatePickerProps extends DatePickerProps {
  label?: string;
  description?: string;
  labelClassName?: string;
  errorText?: string;
  className?: string | string[];
  inline?: boolean;
  error?: boolean;
  disabled?: boolean;
  defaultValue?: Date | Date[] | undefined;
  value?: Date | Date[] | undefined | any;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
