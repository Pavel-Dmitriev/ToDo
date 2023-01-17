import { Controller, useFormContext } from "react-hook-form";
import SelectComponent from "react-select";
import tw from "twin.macro";

import { IProps } from "./interface";

function Select(props: IProps) {
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
          menu: (provided: any) => {
            const otherStyles = tw`z-50`;

            return { ...provided, ...otherStyles };
          },
        };

        return (
          <SelectComponent
            {...field}
            {...props}
            noOptionsMessage={() => "Нет данных"}
            styles={customStyles}
          />
        );
      }}
    />
  );
}

export default Select;
