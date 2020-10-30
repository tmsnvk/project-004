import { Link } from "react-router-dom";
import styled from "styled-components";

const NagivationLink = styled(Link)`
  color: ${({ theme }) => theme.alternate};
  font-size: inherit;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.main};
  }
`;

export default NagivationLink;