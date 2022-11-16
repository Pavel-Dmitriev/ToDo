import TimeInput from "../TimeInput";
import DatePicker from "../DatePicker";

import IProps from "./interface";

function DateAndTimeInput(props: IProps) {
  const { dateName, timeName, isDescription = true } = props;

  return (
    <div className="flex justify-between">
      <DatePicker
        label={isDescription ? "Дата" : undefined}
        name={`${dateName}`}
        className="inline-flex w-[200px]"
        labelClassName="text-xs"
      />
      <TimeInput
        label={isDescription ? "Время" : undefined}
        name={`${timeName}`}
        placeholder="__:__"
        format="##:##"
        mask="_"
        labelClassName="text-xs"
        className="transition-[border-color, color, fill, stroke] inline-flex  !min-h-48 w-[105px] items-center border-1 !border-solid border-gray-400 px-12 placeholder-gray-500 hover:border-gray-500 focus:text-gray-900"
      />
    </div>
  );
}

export default DateAndTimeInput;
