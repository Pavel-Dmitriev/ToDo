import { ReactNode } from "react";

export interface IDropdownOpen {
  button: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
