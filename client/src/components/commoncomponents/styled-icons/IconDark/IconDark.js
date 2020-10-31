import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconDark = styled(FontAwesomeIcon)`
  display: inline-block;
  color: ${({ theme }) => theme.secondaryDark};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: 1rem 1rem 1rem 1rem;
`;

export default IconDark;