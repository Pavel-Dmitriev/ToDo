import { StyledButton } from "./styles";

import { IProps } from "./interface";

function Button(props: IProps) {
  const { name, icon, href, hidden } = props;

  if (hidden) return <></>;

  if (href) {
    return (
      <a href={href}>
        <StyledButton {...props}>
          {name}
          {icon}
        </StyledButton>
      </a>
    );
  }
  return (
    <StyledButton {...props}>
      {name}
      {icon}
    </StyledButton>
  );
}

export default Button;
