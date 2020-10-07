import styled from "styled-components";

const Label = styled.label`
  padding: 3rem 0 1rem 0;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

export default Label;