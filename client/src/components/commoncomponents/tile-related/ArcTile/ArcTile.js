import styled from "styled-components";
import TileButton from "../TileButton";
import { IconYellow } from "components/commoncomponents/styled-icons";

const ArcTile = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.main : ({ theme }) => theme.secondaryDark};
  color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.secondaryDark : ({ theme }) => theme.main};

  ${IconYellow} {
    color: ${({ isHighlighted }) => isHighlighted ? ({ theme }) => theme.secondaryDark : ({ theme }) => theme.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${({ theme }) => theme.secondaryDark};
  }
`;

export default ArcTile;