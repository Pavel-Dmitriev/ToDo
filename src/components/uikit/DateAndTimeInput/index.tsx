import TimeInput from "../TimeInput";
import DatePicker from "../DatePicker";

import IProps from "./interface";

function DateAndTimeInput(props: IProps) {
  const { dateName, timeName, isDescription = true } = props;

  function validateTime(value: any) {
    const hours = Number(value?.substring(0, 2));
    const minutes = Number(value?.substring(3, 5));

    if (Number.isInteger(hours) && Number.isInteger(minutes)) {
      if (minutes > 59 || hours > 23) return "Неверное время";
    }

    return true;
  }

  return (
    <div className="flex items-end justify-between">
      <DatePicker
        label={isDescription ? "Дата" : undefined}
        name={`${dateName}`}
        minDate={new Date()}
        className="inline-flex max-w-[200px]"
        labelClassName="text-xs"
      />
      <TimeInput
        label={isDescription ? "Время" : undefined}
        name={`${timeName}`}
        placeholder="__:__"
        format="##:##"
        mask="_"
        labelClassName="text-xs w-[105px]"
        className="transition-[border-color, color, fill, stroke] flex-0 inline-flex !min-h-48 max-w-[105px] items-center border-1 !border-solid border-gray-400 px-12 placeholder-gray-500 hover:border-gray-500 focus:text-gray-900"
        rules={{ validate: validateTime }}
      />
    </div>
  );
}

export default DateAndTimeInput;
