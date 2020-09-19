import styled from "styled-components";

const Label = styled.label`
  padding: 3rem 0 0.5rem 0;
  font-size: ${props => props.theme.fontSize.xLarge};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

export default Label;