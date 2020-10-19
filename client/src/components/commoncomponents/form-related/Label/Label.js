import styled from "styled-components";

const Label = styled.label`
  align-self: center;
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fontFamily.secondary};
  font-weight: bold;
  letter-spacing: 0.2rem;
  position: relative;
  top: 4rem;
  transition: all 150ms ease-in;
  transform: ${({ activeFormField }) => activeFormField ? "scale(0.85) translate(0, -80%)" : ""};
  cursor: text;
`;

export default Label;