import styled from "styled-components";

const Textarea = styled.textarea`
  align-self: center;
  width: 25rem;
  background-color: ${props => props.theme.backgroundColor.mainDark};
  font-family: inherit;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.fontColor.main};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 5rem 0.5rem 0 2rem;
  border-radius: 0.5rem;
  line-height: 1.5;
  cursor: text;
  resize: none;

  &:hover {
    border: 0.3rem ${props => props.theme.backgroundColor.secondary} solid;
  }

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 35rem;
  }
`;

export default Textarea;