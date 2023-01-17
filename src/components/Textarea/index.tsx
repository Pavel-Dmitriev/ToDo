import React from "react";

import { StyledTextarea } from "./styles";

import IProps from "./interface";

const Textarea = React.forwardRef<HTMLTextAreaElement, IProps>((props, ref) => (
  <StyledTextarea {...props} ref={ref} />
));

export default Textarea;
