import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TileButton, TileContainer } from "components/commoncomponents/adventure-related";
import { HorizontalLine, LoadingSpinner } from "components/commoncomponents/general";
import { IconBlack, IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContainerDeath = styled(TileContainer)`
  width: fit-content;
  margin: 0 auto 5rem;
  font-size: ${props => props.theme.fontSize.small};

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    margin: 0 33% 5rem;
  }
`;

const WrapperAdventureArc = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    margin: 2.5rem 2.5rem 0 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    min-width: 20%;
  }
`;

const WrapperAdventureButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleArc = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  padding: 0 0 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
    text-align: left;
  }
`;

const AdventureButton = styled(TileButton)`
  width: 20rem;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${props => props.theme.backgroundColor.secondary};
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 25rem;
  }
`;

const ContainerAchievements = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1%;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const WrapperAchievement = styled.div`
  align-self: center;
  margin: 1rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    max-width: 50%;
  }
`;

const AchievementObtained = styled(TileContainer)`
  width: 20rem;
  background-color: ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.secondaryDark};
  font-family: ${props => props.theme.fontFamily.secondary};
  font-weight: bolder;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
    width: 25rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    width: 35rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    width: 30rem;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    width: 40rem;
  }
`;

const AchievementMissing = styled(AchievementObtained)`
  background-color: ${props => props.theme.backgroundColor.mainDark};
  color: ${props => props.theme.fontColor.main};
`;

const AchievementTitle = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize.small};
  padding: 0 0 1rem 0;
`;

const AchievementDescription = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize.small};
`;

const AchievementList = () => {
  const [numberOfDeath, setNumberOfDeath] = useState(undefined);
  const [achievements, setAchievements] = useState([]);
  const [eventTarget, setEventTarget] = useState({ arc: undefined, code: undefined });
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const id = localStorage.getItem("auth-id");

  const buttonList = [
    [
      { id: 1, arc: "one", code: "a1s1", title: "To One Last New Beginning", },
      { id: 2, arc: "one", code: "a1s2", title: "A City to Burn", }
    ],
    [
      { id: 1, arc: "two", code: "a2s1", title: "Greenskins, Greenskins everywhere", }
    ],
    [
      { id: 1, arc: "three", code: "a3s1", title: "How to Lose an Empire", }
    ],
    [
      { id: 1, arc: "four", code: "a4s1", title: "Wild Elvish Sorcerers", }
    ]
  ];

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getNumberOfDeath = async () => {
      try {
        const response = await axios.get("/users/achievements/death", { params: { _id: id }, cancelToken: source.token });
        setNumberOfDeath(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error);
        } else {
          throw error;
        }
      }
    };

    getNumberOfDeath();
    return () => source.cancel() && setNumberOfDeath(0);
  }, [id]);

  useEffect(() => {
    const getAchievements = async () => {
      try {
        if (eventTarget.arc === "one") {
          for (let i = 0; i < buttonList[0].length; i++) {
            if (eventTarget.code === buttonList[0][i].code) {
              setLoadingSpinner(true);
              const response = await axios.get(`/users/achievements/${buttonList[0][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoadingSpinner(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "two") {
          for (let i = 0; i < buttonList[1].length; i++) {
            if (eventTarget.code === buttonList[1][i].code) {
              setLoadingSpinner(true);
              const response = await axios.get(`/users/achievements/${buttonList[1][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoadingSpinner(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "three") {
          for (let i = 0; i < buttonList[2].length; i++) {
            if (eventTarget.code === buttonList[2][i].code) {
              setLoadingSpinner(true);
              const response = await axios.get(`/users/achievements/${buttonList[2][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoadingSpinner(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "four") {
          for (let i = 0; i < buttonList[3].length; i++) {
            if (eventTarget.code === buttonList[3][i].code) {
              setLoadingSpinner(true);
              const response = await axios.get(`/users/achievements/${buttonList[3][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoadingSpinner(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else return null;
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
  }, [eventTarget, id, setLoadingSpinner]);

  const handleClick = (event) => setEventTarget({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });

  const renderArcOneButtons = buttonList[0].map((element) => {
    return (
      <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </AdventureButton>
    );
  });

  const renderArcTwoButtons = buttonList[1].map((element) => {
    return (
      <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </AdventureButton>
    );
  });

  const renderArcThreeButtons = buttonList[2].map((element) => {
    return (
      <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </AdventureButton>
    );
  });

  const renderArcFourButtons = buttonList[3].map((element) => {
    return (
      <AdventureButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </AdventureButton>
    );
  });

  const renderAchievements = achievements.map((element) => {
    return (
      <WrapperAchievement key={element?.[1].id + 1}>
        {element?.[1].state ?
        <AchievementObtained>
          <AchievementTitle>
            <IconBlack icon={iconList.star}></IconBlack>
            {element?.[1].name}
          </AchievementTitle>
          <AchievementDescription>
            <IconBlack icon={iconList.scroll}></IconBlack>{
            element?.[1].description}
          </AchievementDescription>
        </AchievementObtained> : 
        <AchievementMissing>
          <AchievementTitle>
            <IconYellow icon={iconList.star}></IconYellow>
            {element?.[1].name}
          </AchievementTitle>
          <AchievementDescription>
            <IconYellow icon={iconList.scroll}></IconYellow>
            {element?.[1].description}
          </AchievementDescription>
        </AchievementMissing>}
      </WrapperAchievement>
    );
  });

  return (
    <ComponentLayout>
      <ContainerDeath>
      Number of death across all games: {numberOfDeath}
      </ContainerDeath>
      <WrapperMain>
        <WrapperAdventureArc>
          <TitleArc>
            Tales of the Eastern Fief
          </TitleArc>
          <WrapperAdventureButton>
            {renderArcOneButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc>
            Bad News from the North
          </TitleArc>
          <WrapperAdventureButton>
            {renderArcTwoButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc>
            Diaries from the Royal Fief
          </TitleArc>
          <WrapperAdventureButton>
            {renderArcThreeButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
        <WrapperAdventureArc>
          <TitleArc>
            Friends or Foes?
          </TitleArc>
          <WrapperAdventureButton>
            {renderArcFourButtons}
          </WrapperAdventureButton>
        </WrapperAdventureArc>
      </WrapperMain>
      {loadingSpinner ? <LoadingSpinner message={"The dragons are fetching your data..."} /> : null}
      {loadingSpinner || eventTarget.arc === undefined ? null : <HorizontalLine width="33%" margin="10rem auto 5rem" />}
      <ContainerAchievements>
        {loadingSpinner ? eventTarget.arc === undefined : renderAchievements}
      </ContainerAchievements>
    </ComponentLayout>
  );
};

export default AchievementList;