import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid ${props => props.currentColor};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.currentColor};
  }
`;
