import React from "react";

import { IButton } from "./interface";

function Button(props: IButton) {
  const { className } = props;
  return <button className={className}>Button</button>;
}

export default Button;
