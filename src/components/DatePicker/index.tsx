import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

import CalendarToday from "@mui/icons-material/CalendarToday";

import { StyledDatePicker } from "./styles";

import LabelInput from "components/LabelInput";

import useErrorText from "hooks/useErrorText";

import { IProps } from "./interface";

function DatePicker(props: IProps) {
  const {
    label,
    error,
    rules,
    name,
    addRefToField,
    className,
    labelClassName,
    format = "dd.MM.y",
    clearIcon,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext();

  const errorText = useErrorText(name, errors);

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

        if (label || errorText || error || rules) {
          return (
            <LabelInput
              label={label}
              error={Boolean(errorText) || error}
              labelClassName={labelClassName}
            >
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
