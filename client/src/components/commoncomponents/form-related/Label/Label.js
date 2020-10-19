import styled from "styled-components";

const Label = styled.label`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily.secondary};
  font-weight: bold;
  letter-spacing: 0.25rem;
  position: relative;
  top: 4rem;
  left: 2rem;
  transition: all 150ms ease-in;
  transform: ${({ activeFormField }) => activeFormField ? "scale(0.85) translate(-10%, -85%)" : ""};
  cursor: text;
`;

export default Label;