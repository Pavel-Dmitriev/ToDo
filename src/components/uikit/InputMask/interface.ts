import ITextInputProps from "../TextInput/interface";

export default interface IProps extends ITextInputProps {
  mask: string;
  maskSymbol?: string;
  hasAnySymbols?: boolean;
  Input?: any;
  defaultValue?: string;
  fullFill?: boolean;
  isUpperCase?: boolean;
}
