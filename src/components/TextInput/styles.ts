import tw, { styled } from "twin.macro";

import { IStyled } from "./interface";

export const Input = styled.input<IStyled>`
  ${({ inline }) => (inline ? tw`inline-flex` : tw`flex`)};

  ${tw`items-center rounded-default bg-white px-8 min-h-40 focus:outline-none border-none text-primary`};

  ${({ error }) =>
    error && tw`border-red-700 hover:border-red-700 focus:border-red-700 active:border-red-700`};

  ${({ asDisplay }) =>
    asDisplay === "transparent" &&
    tw`rounded-2 border-1 border-solid border-transparent bg-transparent px-8 min-h-40 transition-colors duration-300 hover:border-gray-200 hover:bg-white`};

  &:disabled,
  &[disabled] {
    ${tw`pointer-events-none bg-gray-200 border-gray text-gray`};
  }
`;
