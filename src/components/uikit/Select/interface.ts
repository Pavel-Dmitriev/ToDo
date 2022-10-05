import SelectComponent, { SelectComponentsConfig } from "react-select";

export interface IProps extends React.ComponentProps<typeof SelectComponent> {
  label?: string;
  inline?: boolean;
  description?: string;
  labelClassName?: string;
  error?: boolean;
  errorText?: string;
  nextPage?: () => void;
  onSearсh?: (search: string) => void;
  propsStyles?: any;
  customComponents?: SelectComponentsConfig<any, any, any>;
}

export interface IOption {
  label: string;
  value: string;
}
