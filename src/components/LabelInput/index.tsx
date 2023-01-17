import clsx from "clsx";

import { LabelInput as StyledLabelInput } from "./styles";

import IProps from "./interface";

function LabelInput(props: IProps) {
  const { label, inline, className, labelClassName, error, errorText, children } = props;

  return (
    <StyledLabelInput inline={inline} className={clsx("max-w-full", className)} error={error}>
      {label && (
        <>
          <p
            className={clsx(labelClassName, {
              "mb-2": errorText,
              "mb-6": !errorText,
            })}
          >
            {label}
          </p>
        </>
      )}

      {errorText && (
        <p className="mb-6 text-xs text-red-700">
          {error && "Ошибка: "}
          {error ? errorText : ""}
        </p>
      )}

      {children}
    </StyledLabelInput>
  );
}

export default LabelInput;
