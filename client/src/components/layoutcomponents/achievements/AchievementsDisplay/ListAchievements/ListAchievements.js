import React from "react";
import styled from "styled-components";
import { TileContainer } from "components/commoncomponents/tile-related";
import { HorizontalLine, LoadingSpinner } from "components/commoncomponents/general";
import { IconDark, IconLight } from "components/commoncomponents/styled-icons";
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

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    justify-content: flex-start;
  }
`;

const ElementWrapper = styled.div`
  align-self: center;
  margin: 1rem 1rem 0 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    max-width: 50%;
  }
`;

const Obtained = styled(TileContainer)`
  width: 25rem;
  background-color: ${({ theme }) => theme.main};
  color: ${({ theme }) => theme.secondaryDark};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: bolder;
  padding: 1rem 0 1rem 1rem;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.xLarge}) {
    width: 40rem;
  }
`;

const Missing = styled(Obtained)`
  background-color: ${({ theme }) => theme.secondaryDark};
  color: ${({ theme }) => theme.main};
`;

const Title = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.default};
  padding: 0 0 2rem 0;

  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const Description = styled(Title)`
  padding: 0;
`;

const NotAvailable = styled(TileContainer)`
  margin: 0 auto;
  font-weight: bolder;
  font-size: ${({ theme }) => theme.fontSize.default};
  text-align: center;
  
  @media only screen and (min-width: ${({ theme }) => theme.mediaQuery.small}) {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

const ListAchievements = ({ dataSet, displayAchievements, elapsedLoadingTime, loadingSpinner, showSpinnerIfGreaterThanTime }) => {
  const renderAchievements = displayAchievements.map((element) => {
    return (
      displayAchievements.length !== 1 ?
      <ElementWrapper key={element?.[1].id}>
        {element?.[1].state ?
        <Obtained>
          <Title>
            <IconDark icon={iconList.star}></IconDark>
            {element?.[1].name}
          </Title>
          <Description>
            <IconDark icon={iconList.scroll}></IconDark>
            {element?.[1].description}
          </Description>
          <Description>
            <IconDark icon={iconList.calendarUnlocked}></IconDark>
            {new Date(element?.[1].date).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}
          </Description>
        </Obtained> :
        <Missing>
          <Title>
            <IconLight icon={iconList.star}></IconLight>
            {element?.[1].name}
          </Title>
          <Description>
            <IconLight icon={iconList.scroll}></IconLight>
            {element?.[1].description}
          </Description>
          <Description>
            <IconLight icon={iconList.calendarLocked}></IconLight>
            Not yet unlocked.
          </Description>
        </Missing>}
      </ElementWrapper> :
      <NotAvailable key={displayAchievements[0]?.[0]}>{displayAchievements[0]?.[1].message}</NotAvailable>
    );
  });

  return (
    <ComponentContainer>
      {loadingSpinner && elapsedLoadingTime > showSpinnerIfGreaterThanTime ? <LoadingSpinner message={"The Tower librarians are retriving the requested data from their Archives."} /> : null}
      {dataSet.arc === undefined ? null : <HorizontalLine width="33%" margin="10rem auto 5rem" />}
      <AchievementsWrapper>
        {dataSet.arc === undefined ? null : renderAchievements}
      </AchievementsWrapper>
    </ComponentContainer>
  );
};

export default ListAchievements;