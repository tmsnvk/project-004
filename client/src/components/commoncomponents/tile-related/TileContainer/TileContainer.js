import styled from "styled-components";

const TileContainer = styled.div`
  margin: 1rem 0 1rem 0;
  background-color: ${({ theme }) => theme.secondaryDark};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.main};
  text-align: left;
  border: 0.3rem ${({ theme }) => theme.secondaryLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;
`;

export default TileContainer;