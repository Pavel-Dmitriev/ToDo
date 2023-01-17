import Button from "components/Button";

import { IButtonWithText } from "./interface";

function ButtonWithText({ textFilter }: IButtonWithText) {
  return (
    <>
      <Button name="Фильтры: " className="text-primary hover:text-blue" />
      <span className="cursor-pointer text-blue">{textFilter}</span>
    </>
  );
}

export default ButtonWithText;
