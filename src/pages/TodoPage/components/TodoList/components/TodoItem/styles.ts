import tw, { styled } from "twin.macro";

export const List = styled.li`
  box-shadow: 0px 0.3px 0.9px rgb(0 0 0 / 10%), 0px 1.6px 3.6px rgb(0 0 0 / 10%);
`;
export const Span = styled.span`
  ${tw`relative mr-12 inline-block h-[18px] w-[18px] rounded-full border-1 border-blue-500 bg-transparent text-blue-500`}
`;
