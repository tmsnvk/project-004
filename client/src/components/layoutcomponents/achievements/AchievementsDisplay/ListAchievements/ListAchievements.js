import React from "react";
import styled from "styled-components";
import { TileContainer } from "components/commoncomponents/tile-related";
import { HorizontalLine, LoadingSpinner } from "components/commoncomponents/general";
import { IconBlack, IconYellow } from "components/commoncomponents/styled-icons";
import { iconList } from "utilities";

const ComponentContainer = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
`;

const AchievementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    justify-content: flex-start;
  }
`;

const ElementWrapper = styled.div`
  align-self: center;
  margin: 1rem 1rem 0 1rem;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    max-width: 50%;
  }
`;

const Obtained = styled(TileContainer)`
  width: 25rem;
  background-color: ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.secondaryDark};
  font-family: ${props => props.theme.fontFamily.secondary};
  font-weight: bolder;
  padding: 1rem 0 1rem 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    width: 40rem;
  }
`;

const Missing = styled(Obtained)`
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
`;

const Title = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize.default};
  padding: 0 0 2rem 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

const Description = styled(Title)`
  padding: 0;
`;

const NotAvailable = styled(TileContainer)`
  margin: 0 auto;
  font-weight: bolder;
  font-size: ${props => props.theme.fontSize.default};
  text-align: center;
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

const ListAchievements = ({ dataSet, loadingSpinner, displayAchievements }) => {
  const renderAchievements = displayAchievements.map((element) => {
    return (
      displayAchievements.length !== 1 ?
      <ElementWrapper key={element?.[1].id}>
        {element?.[1].state ?
        <Obtained>
          <Title>
            <IconBlack icon={iconList.star}></IconBlack>
            {element?.[1].name}
          </Title>
          <Description>
            <IconBlack icon={iconList.scroll}></IconBlack>
            {element?.[1].description}
          </Description>
          <Description>
            <IconBlack icon={iconList.calendarUnlocked}></IconBlack>
            {new Date(element?.[1].date).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}
          </Description>
        </Obtained> :
        <Missing>
          <Title>
            <IconYellow icon={iconList.star}></IconYellow>
            {element?.[1].name}
          </Title>
          <Description>
            <IconYellow icon={iconList.scroll}></IconYellow>
            {element?.[1].description}
          </Description>
          <Description>
            <IconYellow icon={iconList.calendarLocked}></IconYellow>
            Not yet unlocked.
          </Description>
        </Missing>}
      </ElementWrapper> :
      <NotAvailable key={displayAchievements[0]?.[0]}>{displayAchievements[0]?.[1].message}</NotAvailable>
    );
  });

  return (
    <ComponentContainer>
      {loadingSpinner ? <LoadingSpinner message={"The Tower librarians are retriving the requested data from their Archives."} /> : null}
      {loadingSpinner || dataSet.arc === undefined ? null : <HorizontalLine width="33%" margin="10rem auto 5rem" />}
      <AchievementsWrapper>
        {loadingSpinner ? dataSet.arc === undefined : renderAchievements}
      </AchievementsWrapper>
    </ComponentContainer>
  );
};

export default ListAchievements;