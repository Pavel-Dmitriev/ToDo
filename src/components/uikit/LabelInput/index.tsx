import clsx from "clsx";

import { LabelInput as StyledLabelInput } from "./styles";
import IProps from "./interface";

function LabelInput(props: IProps) {
  const {
    label,
    description,
    inline,
    className,
    labelClassName,
    error,
    errorText,
    children,
    required,
    descriptionBottom,
  } = props;

  return (
    <StyledLabelInput inline={inline} className={clsx("max-w-full", className)} error={error}>
      {label && (
        <>
          <p
            className={clsx(labelClassName, {
              "mb-2": description || errorText,
              "mb-6": !description || !errorText,
            })}
          >
            {label}
            {required && <span className="ml-4 text-red-700">*</span>}
          </p>
        </>
      )}
      {errorText && (
        <p className="mb-6 text-red-700">
          {error && "Ошибка: "}
          {error ? errorText : ""}
        </p>
      )}
      {description && !descriptionBottom && <p className="mb-6 text-gray-500">{description}</p>}
      {children}
      {description && descriptionBottom && <p className="mb-6 text-gray-500">{description}</p>}
    </StyledLabelInput>
  );
}

export default LabelInput;
