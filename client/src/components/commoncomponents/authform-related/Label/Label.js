import styled from "styled-components";

const Label = styled.label`
  padding: 3rem 0 1rem 0;
  font-size: ${props => props.theme.fontSize.xLarge};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;

export default Label;