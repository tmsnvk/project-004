import styled from "styled-components";

const TileButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.main};
  font-weight: 600;
  text-align: left;
  background-color: ${({ theme }) => theme.secondaryDark};
  margin: 1rem 0 1rem 0;
  padding: 2rem 2rem 2rem 2rem;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  border-radius: 0.5rem;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`;

export default TileButton;