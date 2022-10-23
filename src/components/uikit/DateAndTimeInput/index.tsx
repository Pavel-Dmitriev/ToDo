import { useFormState } from "react-hook-form";
import clsx from "clsx";

import TimeInput from "../TimeInput";
import DatePicker from "../DatePicker";

import IProps from "./interface";

function DateAndTimeInput(props: IProps) {
  const { dateName, timeName, isDescription = true } = props;

  return (
    <div className="flex justify-between">
      <DatePicker
        description={isDescription ? "Дата" : undefined}
        name={`${dateName}`}
        className="inline-flex w-[200px]"
      />
      <TimeInput
        description={isDescription ? "Время" : undefined}
        name={`${timeName}`}
        mask="__:__"
        className="w-[105px]"
      />
    </div>
  );
}

export default DateAndTimeInput;
