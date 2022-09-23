import tw, { styled } from "twin.macro";

export const StyledButton = styled.button`
  ${tw`inline-flex items-center focus:outline-none break-words select-none p-4`};

  ${({ disabled }) => disabled && tw`text-gray-300 cursor-not-allowed`};
  ${({ hidden }) => hidden && tw`hidden`};
`;
