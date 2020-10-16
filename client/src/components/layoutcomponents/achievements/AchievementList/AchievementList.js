import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TileButton, TileContainer } from "components/commoncomponents/adventure-related";
import { HorizontalLine, LoadingSpinner } from "components/commoncomponents/general";
import { IconBlack, IconYellow } from "components/commoncomponents/styled-icons";
import TitleArc from "./TitleArc";
import iconList from "utilities/iconList";
import { AdventureTile, adventuresMetaData } from "components/layoutcomponents/adventures/mainpage";

// const ContainerComponent = styled.div`
//   grid-column-start: 1;
//   grid-column-end: 4;
//   grid-row-start: 3;
//   grid-row-end: 4;
// `;

// const WrapperMain = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `;

// const WrapperAdventureArc = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 0.5rem auto;

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
//     margin: 2.5rem 2.5rem 0 0;
//   }

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
//     flex-grow: 1;
//     min-width: 20%;
//   }
// `;

// const WrapperAdventureButton = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const AdventureButton = styled(TileButton)`
//   width: 30rem;
//   font-size: ${props => props.theme.fontSize.small};
//   font-weight: bold;
//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   &:hover {
//     background-color: ${props => props.theme.backgroundColor.secondary};
//     color: ${props => props.theme.fontColor.secondaryDark};
//   }

//   &:hover ${IconYellow} {
//     color: ${props => props.theme.fontColor.secondaryDark};
//   }
// `;

// const ContainerAchievements = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 1%;

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
// `;

// const WrapperAchievement = styled.div`
//   align-self: center;
//   margin: 1rem 0 0 0;

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
//     flex-grow: 1;
//     max-width: 50%;
//   }
// `;

// const AchievementObtained = styled(TileContainer)`
//   width: 20rem;
//   background-color: ${props => props.theme.backgroundColor.secondary};
//   color: ${props => props.theme.fontColor.secondaryDark};
//   font-family: ${props => props.theme.fontFamily.secondary};
//   font-weight: bolder;

//   &:hover {
//     transform: scale(1.05);
//     transition: transform 0.2s;
//   }

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
//     width: 25rem;
//   }

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
//     width: 35rem;
//   }

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
//     width: 30rem;
//   }

//   @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
//     width: 40rem;
//   }
// `;

// const AchievementMissing = styled(AchievementObtained)`
//   background-color: ${props => props.theme.backgroundColor.mainDark};
//   color: ${props => props.theme.fontColor.main};
// `;

// const AchievementTitle = styled.p`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   font-size: ${props => props.theme.fontSize.small};
//   padding: 0 0 2rem 0;
// `;

// const AchievementDescription = styled(AchievementTitle)`
//   padding: 0;
// `;

const ContainerComponent = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;
  width: fit-content;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 1;
    grid-column-end: 4;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const AnotherContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: column;
  margin: 5rem auto 0;

  /* @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
    align-items: flex-end;
    margin: 5rem 0 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    grid-column-start: 3;
    grid-column-end: 5;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xLarge}) {
    align-items: flex-start;
    grid-column-start: 3;
    grid-column-end: 5;
  } */
`;

const ArcButton = styled(TileButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.mainDark : backgroundColor.secondary};
  background-color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.secondary : backgroundColor.mainDark};

  ${IconYellow} {
    color: ${({ highlight, theme: { backgroundColor } }) => highlight ? backgroundColor.mainDark : backgroundColor.secondary};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }
`;

const ContainerArc = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 35rem;
  }
`;

const AchievementList = () => {
  const [achievements, setAchievements] = useState([]);
  const [eventTarget, setEventTarget] = useState({ arc: undefined, code: undefined });
  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const [displayArcTitles, setDisplayArcTitles] = useState(1);
  const [storyTitlesData, setStoryTitlesData] = useState([undefined]);

  useEffect(() => {
    setStoryTitlesData([adventuresMetaData[displayArcTitles]]);

  }, [displayArcTitles]);

  const handleArcChoice = (index) => setDisplayArcTitles(index);

  const handleClick = (event) => setEventTarget({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });

  // DATAARC + DATACODE INFO NEEDS TO BE WRITTEN INTO ADVENTRUES META DATA


  const renderArcTitles = adventuresMetaData.map(({ id, arcIcon, arcTitle }, index) => {
    const isActive = index === displayArcTitles ? true : false;

    return (
      <ArcButton key={id} highlight={isActive} data-id={id} onClick={() => handleArcChoice(index)}>
        <IconYellow icon={arcIcon}></IconYellow>{arcTitle}
      </ArcButton>
    );
  });




  const renderDisplayedStoryTiles = storyTitlesData.map((element) => {
    if (element?.id === undefined) return null;

    return (
      <ContainerArc key={element?.id}>
        {element.storyOne.title !== undefined ? <AdventureTile available={element?.storyOne.available} storyTitle={element?.storyOne.title} linkId={element?.storyOne.link} /> : null}
        {element.storyTwo.title !== undefined ? <AdventureTile available={element?.storyTwo.available} storyTitle={element?.storyTwo.title} linkId={element?.storyTwo.link} /> : null}
        {element.storyThree.title !== undefined ? <AdventureTile available={element?.storyThree.available} storyTitle={element?.storyThree.title} linkId={element?.storyThree.link} /> : null}
      </ContainerArc>
    );
  });

  // const buttonList = [
  //   [
  //     { id: 1, arc: "one", code: "a1s1", title: "To One Last New Beginning", },
  //     { id: 2, arc: "one", code: "a1s2", title: "A City to Burn", }
  //   ],
  //   [
  //     { id: 1, arc: "two", code: "a2s1", title: "Greenskins, Greenskins everywhere", }
  //   ],
  //   [
  //     { id: 1, arc: "three", code: "a3s1", title: "How to Lose an Empire", }
  //   ],
  //   [
  //     { id: 1, arc: "four", code: "a4s1", title: "Wild Elvish Sorcerers", }
  //   ]
  // ];
  
  useEffect(() => {
    const getAchievements = () => {
      if (eventTarget.arc === undefined) return;
      const id = localStorage.getItem("auth-id");
      const storyCode = ["a1s1", "a1s2", "a2s1", "a3s1", "a4s1"];

      try {
        setLoadingSpinner(true);
        storyCode.forEach(async (element) => {
          if (eventTarget.code === element) {
            const response = await axios.get(`/achievement/showcase/${element}`, { params: { _id: id }});
            setTimeout(() => setLoadingSpinner(false), 1500);
            setAchievements(Object.entries(response.data));
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
    return () => setAchievements([]);
  }, [eventTarget, setLoadingSpinner]);

  // const handleClick = (event) => setEventTarget({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });

  // const renderArcOneButtons = buttonList[0].map((element) => {
  //   return (
  //     <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
  //       <IconYellow icon={iconList.trophy}></IconYellow>
  //       {element.title}
  //     </AdventureButton>
  //   );
  // });

  // const renderArcTwoButtons = buttonList[1].map((element) => {
  //   return (
  //     <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
  //       <IconYellow icon={iconList.trophy}></IconYellow>
  //       {element.title}
  //     </AdventureButton>
  //   );
  // });

  // const renderArcThreeButtons = buttonList[2].map((element) => {
  //   return (
  //     <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
  //       <IconYellow icon={iconList.trophy}></IconYellow>
  //       {element.title}
  //     </AdventureButton>
  //   );
  // });

  // const renderArcFourButtons = buttonList[3].map((element) => {
  //   return (
  //     <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
  //       <IconYellow icon={iconList.trophy}></IconYellow>
  //       {element.title}
  //     </AdventureButton>
  //   );
  // });

  // const renderAchievements = achievements.map((element) => {
  //   return (
  //     <WrapperAchievement key={element?.[1].id + 1}>
  //       {element?.[1].state ?
  //       <AchievementObtained>
  //         <AchievementTitle>
  //           <IconBlack icon={iconList.star}></IconBlack>
  //           {element?.[1].name}
  //         </AchievementTitle>
  //         <AchievementDescription>
  //           <IconBlack icon={iconList.scroll}></IconBlack>
  //           {element?.[1].description}
  //         </AchievementDescription>
  //         <AchievementDescription>
  //           <IconBlack icon={iconList.calendarUnlocked}></IconBlack>
  //           {new Date(element?.[1].date).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: true })}
  //         </AchievementDescription>
  //       </AchievementObtained> : 
  //       <AchievementMissing>
  //         <AchievementTitle>
  //           <IconYellow icon={iconList.star}></IconYellow>
  //           {element?.[1].name}
  //         </AchievementTitle>
  //         <AchievementDescription>
  //           <IconYellow icon={iconList.scroll}></IconYellow>
  //           {element?.[1].description}
  //         </AchievementDescription>
  //         <AchievementDescription>
  //           <IconYellow icon={iconList.calendarLocked}></IconYellow>
  //           Not yet unlocked.
  //         </AchievementDescription>
  //       </AchievementMissing>}
  //     </WrapperAchievement>
  //   );
  // });

  return (
    <>
    <ContainerComponent>
      {renderArcTitles}
      {/* <WrapperMain>
        <WrapperAdventureArc>
          <TitleArc title="Tales of the Eastern Fief" />
          <WrapperAdventureButton>
            {renderArcOneButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc title="Bad News from the North" />
          <WrapperAdventureButton>
            {renderArcTwoButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc title="Diaries from the Royal Fief" />
          <WrapperAdventureButton>
            {renderArcThreeButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc title="Friends or Foes?" />
          <WrapperAdventureButton>
            {renderArcFourButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
      </WrapperMain>
      {loadingSpinner ? <LoadingSpinner message={"The caretakers of the Tower are retriving the requested data from the Archives."} /> : null}
      {loadingSpinner || eventTarget.arc === undefined ? null : <HorizontalLine width="33%" margin="10rem auto 5rem" />}
      <ContainerAchievements>
        {loadingSpinner ? eventTarget.arc === undefined : renderAchievements}
      </ContainerAchievements> */}
    </ContainerComponent>
    <AnotherContainer>
    {renderDisplayedStoryTiles}
    </AnotherContainer>
    </>
  );
};

export default AchievementList;