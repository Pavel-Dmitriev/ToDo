import { RegisterOptions } from "react-hook-form";

import ITextInput from "components/TextInput/interface";

export interface IProps extends ITextInput {
  label?: string;
  className?: string;
  labelClassName?: string;
  error?: boolean;
  name: string;
  rules?: Exclude<RegisterOptions, "valueAsNumber" | "valueAsDate" | "setValueAs">;
}
