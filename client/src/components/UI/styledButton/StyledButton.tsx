import styled from "styled-components";

interface StyledButtonProps {
  currentColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid ${(props: StyledButtonProps) => props.currentColor};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props: StyledButtonProps) => props.currentColor};
  }
`;
