import React from "react";

import { Input as StyledInput } from "./styles";

import IProps from "./interface";

const TextInput = React.forwardRef<HTMLInputElement, IProps>((props, ref) => (
  <StyledInput {...props} ref={ref} />
));

export default TextInput;
