import styled from "styled-components";

const TileButton = styled.button`
  margin: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.secondaryDark};
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.main};
  font-weight: bold;
  text-align: left;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default TileButton;