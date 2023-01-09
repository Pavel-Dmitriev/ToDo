import { Controller, useFormContext } from "react-hook-form";
import { PatternFormat, PatternFormatProps } from "react-number-format";

import LabelInput from "../LabelInput";
import TextInput from "../TextInput";

import useErrorText from "hooks/useErrorText";

import { IProps } from "./interface";

function TimeInput(props: IProps & PatternFormatProps) {
  const { label, className, labelClassName, error, rules, name } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorText = useErrorText(name, errors);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onBlur, onChange, ref } }) => {
        const handleChange = (value: any) => {
          onChange(value);
        };

        if (label || errorText || error || rules) {
          return (
            <LabelInput
              label={label}
              error={Boolean(errorText) || error}
              errorText={errorText}
              className={labelClassName}
            >
              <PatternFormat
                getInputRef={ref}
                customInput={TextInput}
                value={value as any}
                onBlur={onBlur}
                className={className}
                onChange={handleChange}
                error={Boolean(errorText) || error}
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
            error={Boolean(errorText) || error}
            {...props}
          />
        );
      }}
    />
  );
}

export default TimeInput;
