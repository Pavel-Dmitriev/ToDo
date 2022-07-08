import tw, { styled } from "twin.macro";

import { IStyled } from "./interface";

export const StyledTextarea = styled.textarea<IStyled>`
  ${({ inline }) => (inline ? tw`inline-flex` : tw`flex`)};
  ${tw`items-center py-8 px-8 rounded-2 bg-white focus:outline-none border-none text-primary`};
  ${({ error }) =>
    error && tw`border-red-700 hover:border-red-700 focus:border-red-700 active:border-red-700`};

  &:disabled,
  &[disabled] {
    ${tw`pointer-events-none bg-gray-200 border-gray text-gray`};
  }
`;
