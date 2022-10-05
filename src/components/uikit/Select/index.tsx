import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
import SelectComponent from "react-select";
import tw from "twin.macro";

import { IProps } from "./interface";

const Select = React.forwardRef<any, IProps>((props, ref) => {
  const { name } = props;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name as string}
      render={({ field }) => {
        const customStyles = {
          control: () => tw`flex text-xs`,
          singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
          },
        };

        return (
          <SelectComponent
            // ref={ref}
            {...field}
            {...props}
            styles={customStyles}
          />
        );
      }}
    />
  );
});

export default Select;
