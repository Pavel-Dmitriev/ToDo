import { Controller, useFormContext } from "react-hook-form";
import { PatternFormat, PatternFormatProps } from "react-number-format";

import LabelInput from "../LabelInput";
import TextInput from "../TextInput";

import { IProps } from "./interface";

function TimeInput(props: IProps & PatternFormatProps) {
  const { label, className, labelClassName, error, rules, name } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onBlur, onChange, ref } }) => {
        const errorText = errors?.[name]?.message;

        const handleChange = (value: any) => {
          onChange(value);
        };

        if (label || errorText || error || rules) {
          return (
            <LabelInput
              label={label}
              error={Boolean(errorText) || error}
              labelClassName={labelClassName}
            >
              <PatternFormat
                getInputRef={ref}
                customInput={TextInput}
                value={value as any}
                onBlur={onBlur}
                className={className}
                onChange={handleChange}
                {...props}
              />
            </LabelInput>
          );
        }

        return (
          <PatternFormat
            getInputRef={ref}
            customInput={TextInput}
            value={value as any}
            onBlur={onBlur}
            className={className}
            onChange={handleChange}
            {...props}
          />
        );
      }}
    />
  );
}

export default TimeInput;
