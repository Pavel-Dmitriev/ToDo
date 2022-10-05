import { IOption } from "components/uikit/Select/interface";
import { IColor } from "./interface";

export const OPTIONS: IOption[] = [
  { value: "blue", label: "Синяя категория" },
  { value: "red", label: "Красная категория" },
  { value: "orange", label: "Оранжевая категория" },
  { value: "yellow", label: "Желтая категория" },
  { value: "green", label: "Зелёная категория" },
];

export const COLOR_OPTIONS: { [key: string]: IColor } = {
  blue: {
    color: "text-blue-400",
    bgColor: "bg-blue-200",
    borderColor: "border-blue-400",
  },
  red: {
    color: "text-red-400",
    bgColor: "bg-red-200",
    borderColor: "border-red-400",
  },
  yellow: {
    color: "text-yellow-400",
    bgColor: "bg-yellow-200",
    borderColor: "border-yellow-400",
  },
  orange: {
    color: "text-orange-400",
    bgColor: "bg-orange-200",
    borderColor: "border-orange-400",
  },
  green: {
    color: "text-green-400",
    bgColor: "bg-green-200",
    borderColor: "border-green-400",
  },
};
