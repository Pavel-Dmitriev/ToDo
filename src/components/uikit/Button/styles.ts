import tw, { styled } from "twin.macro";

import { IStyledButton } from "./interface";

export const StyledButton = styled.button<IStyledButton>`
  ${tw`inline-flex items-center focus:outline-none break-words select-none p-4`};

  ${({ full }) => full && tw`flex`}

  ${({ disabled }) => disabled && tw`text-gray-300 cursor-not-allowed`};
  ${({ hidden }) => hidden && tw`hidden`};
`;
