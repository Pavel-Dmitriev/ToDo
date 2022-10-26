import { Controller, useFormContext } from "react-hook-form";

import InputMask from "../InputMask";
import LabelInput from "../LabelInput";

import { IProps } from "./interface";

function TimeInput(props: IProps) {
  const { mask, label, description, error, rules, name } = props;

  const { control, getValues } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={getValues(name)}
      render={({ field: { value, onBlur, onChange } }) => {
        const handleChange = (value: any) => {
          onChange(value);
        };

        const {
          formState: { errors },
        } = useFormContext();
        const errorText = errors?.[name]?.message;

        if (label || description || errorText || error || rules) {
          return (
            <LabelInput label={label} description={description} error={Boolean(errorText) || error}>
              <InputMask
                {...props}
                mask={mask}
                value={value as any}
                defaultValue={value}
                onBlur={onBlur}
                onChange={handleChange}
              />
            </LabelInput>
          );
        }

        return (
          <InputMask
            {...props}
            mask={mask}
            value={value as any}
            defaultValue={value}
            onBlur={onBlur}
            onChange={handleChange}
          />
        );
      }}
    />
  );
}

export default TimeInput;