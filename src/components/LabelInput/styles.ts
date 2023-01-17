import tw, { styled } from "twin.macro";

import { IStyled } from "./interface";

export const LabelInput = styled.label<IStyled>`
  ${({ inline }) => (inline ? tw`inline-flex` : tw`flex`)};
  ${tw`flex-col relative`};

  & p,
  & input,
  & textarea {
    ${tw`z-10`};
  }
`;
