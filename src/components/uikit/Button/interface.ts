import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: ReactNode;
  href?: string;
}
