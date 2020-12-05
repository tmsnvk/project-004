import styled from "styled-components";
import TileButton from "../TileButton";
import { IconLight } from "components/shared/styled-icons";

const ArcTile = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.main : ({ theme }) => theme.secondaryDark};
  color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.secondaryDark : ({ theme }) => theme.main};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  ${IconLight} {
    color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.secondaryDark : ({ theme }) => theme.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.secondaryDark};
  }

  &:hover ${IconLight} {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

export default ArcTile;