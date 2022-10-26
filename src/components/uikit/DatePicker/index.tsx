import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import CalendarToday from "@mui/icons-material/CalendarToday";

import LabelInput from "components/uikit/LabelInput";

import { StyledDatePicker } from "./styles";

import { IProps } from "./interface";

function DatePicker(props: IProps) {
  const {
    label,
    description,
    error,
    rules,
    name,
    addRefToField,
    className,
    format = "dd.MM.y",
    clearIcon,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={getValues(name)}
      render={({ field: { value, onBlur, onChange, ref } }) => {
        let convertedValue = typeof value === "string" ? new Date(value) : value;
        const additionalProps: any = {};

        if (addRefToField) {
          additionalProps.ref = ref;
        }

        const handleChange = (value: any) => {
          onChange(value);
          if (props.onChangeValue) {
            props.onChangeValue(value);
          }
        };

        const errorText = errors?.[name]?.message;

        if (label || description || errorText || error || rules) {
          return (
            <LabelInput label={label} description={description} error={Boolean(errorText) || error}>
              <StyledDatePicker
                {...additionalProps}
                {...props}
                id={name}
                defaultValue={convertedValue}
                onBlur={onBlur}
                format={format}
                dayPlaceholder="дд"
                monthPlaceholder="мм"
                yearPlaceholder="гггг"
                calendarIcon={<CalendarToday fontSize="small" />}
                value={convertedValue}
                isOpen={isOpen}
                clearIcon={clearIcon ? clearIcon : null}
                className={`${className ? className : ""} ${value ? "text-gray-900" : ""}`}
                onChange={handleChange}
                onCalendarClose={() => {
                  !clearIcon && setIsOpen(false);
                }}
              />
            </LabelInput>
          );
        }

        return (
          <StyledDatePicker
            {...additionalProps}
            {...props}
            id={name}
            defaultValue={convertedValue}
            onBlur={onBlur}
            format={format}
            dayPlaceholder="дд"
            monthPlaceholder="мм"
            yearPlaceholder="гггг"
            calendarIcon={<CalendarToday fontSize="small" />}
            value={convertedValue}
            isOpen={isOpen}
            clearIcon={clearIcon ? clearIcon : null}
            className={`${className ? className : ""} ${value ? "text-gray-900" : ""}`}
            onChange={handleChange}
            onCalendarClose={() => {
              !clearIcon && setIsOpen(false);
            }}
          />
        );
      }}
    />
  );
}

export default DatePicker;
