export const setColorLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? "border-b-1 pb-2 transition-[padding-bottom] duration-300 " : "hover:border-b-1";
