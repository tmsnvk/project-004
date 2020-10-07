import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { HorizontalLine } from "components/commoncomponents/general";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";
import { LoadingSpinner } from "components/commoncomponents/general";
import { IconBlack, IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 100%;
`;

const ContainerArcsAndStories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ContainerArc = styled.div`
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

const ContainerStoryButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArcTitle = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  padding: 0 0 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
    text-align: left;
  }
`;

const StoryButton = styled(AdventureButton)`
  width: 20rem;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;

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

const ObtainedAchievement = styled.div`
  width: 20rem;
  background-color: ${props => props.theme.backgroundColor.secondary};
  color: ${props => props.theme.fontColor.secondaryDark};
  font-weight: bold;
  border: 0.3rem ${props => props.theme.backgroundColor.mainLight} solid;
  padding: 2rem 2rem 2rem 2rem;
  border-radius: 0.5rem;

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

const MissingAchievement = styled(ObtainedAchievement)`
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

const AchievementDesc = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize.small};
`;

const AchievementList = () => {
  const [achievements, setAchievements] = useState([]);
  const [eventTarget, setEventTarget] = useState({ arc: undefined, code: undefined });
  const [loading, setLoading] = useState(false);

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
    const getAchievements = async () => {
      const id = localStorage.getItem("id");
      try {
        if (eventTarget.arc === "one") {
          for (let i = 0; i < buttonList[0].length; i++) {
            if (eventTarget.code === buttonList[0][i].code) {
              setLoading(true);
              const response = await axios.get(`/users/achievements/${buttonList[0][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoading(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "two") {
          for (let i = 0; i < buttonList[1].length; i++) {
            if (eventTarget.code === buttonList[1][i].code) {
              setLoading(true);
              const response = await axios.get(`/users/achievements/${buttonList[1][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoading(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "three") {
          for (let i = 0; i < buttonList[2].length; i++) {
            if (eventTarget.code === buttonList[2][i].code) {
              setLoading(true);
              const response = await axios.get(`/users/achievements/${buttonList[2][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoading(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "four") {
          for (let i = 0; i < buttonList[3].length; i++) {
            if (eventTarget.code === buttonList[3][i].code) {
              setLoading(true);
              const response = await axios.get(`/users/achievements/${buttonList[3][i].code}`, { params: { _id: id }});
              setTimeout(() => setLoading(false), 1500);
              setAchievements(Object.entries(response.data));
            }
          }
        } else return null;
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
  }, [eventTarget, setLoading]);

  const handleClick = (event) => setEventTarget({ arc: event.currentTarget.dataset.arc, code: event.currentTarget.dataset.code });  

  const renderArcOneButtons = buttonList[0].map((element) => {
    return (
      <StoryButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </StoryButton>
    );
  });

  const renderArcTwoButtons = buttonList[1].map((element) => {
    return (
      <StoryButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </StoryButton>
    );
  });

  const renderArcThreeButtons = buttonList[2].map((element) => {
    return (
      <StoryButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </StoryButton>
    );
  });

  const renderArcFourButtons = buttonList[3].map((element) => {
    return (
      <StoryButton key={element.id} data-arc={element.arc} data-code={element.code} onClick={handleClick}>
        <IconYellow icon={iconList.trophy}></IconYellow>
        {element.title}
      </StoryButton>
    );
  });

  const renderAchievements = achievements.map((element) => {
    return (
      <WrapperAchievement key={element?.[1].id + 1}>
        {element?.[1].state ?
        <ObtainedAchievement>
          <AchievementTitle>
            <IconBlack icon={iconList.star}></IconBlack>
            {element?.[1].name}
          </AchievementTitle>
          <AchievementDesc>
            <IconBlack icon={iconList.scroll}></IconBlack>{
            element?.[1].description}
          </AchievementDesc>
        </ObtainedAchievement> : 
        <MissingAchievement>
          <AchievementTitle>
            <IconYellow icon={iconList.star}></IconYellow>
            {element?.[1].name}
          </AchievementTitle>
          <AchievementDesc>
            <IconYellow icon={iconList.scroll}></IconYellow>
            {element?.[1].description}
          </AchievementDesc>
        </MissingAchievement>}
      </WrapperAchievement>
    );
  });

  return (
    <ComponentLayout>
      <ContainerArcsAndStories>
        <ContainerArc>
          <ArcTitle>
            Tales of the Eastern Fief
          </ArcTitle>
          <ContainerStoryButton>
            {renderArcOneButtons}
          </ContainerStoryButton>
        </ContainerArc>
        <ContainerArc>
          <ArcTitle>
            Bad News from the North
          </ArcTitle>
          <ContainerStoryButton>
            {renderArcTwoButtons}
          </ContainerStoryButton>
        </ContainerArc>
        <ContainerArc>
          <ArcTitle>
            Diaries from the Royal Fief
          </ArcTitle>
          <ContainerStoryButton>
            {renderArcThreeButtons}
          </ContainerStoryButton>
        </ContainerArc>
        <ContainerArc>
          <ArcTitle>
            Friends or Foes?
          </ArcTitle>
          <ContainerStoryButton>
            {renderArcFourButtons}
          </ContainerStoryButton>
        </ContainerArc>
      </ContainerArcsAndStories>
      {loading ? <LoadingSpinner message={"Searching account in the database... Please wait!"} /> : null}
      {loading || eventTarget.arc === undefined ? null : <HorizontalLine width="33%" margin="10rem auto 5rem" />}
      <ContainerAchievements>
        {loading ? eventTarget.arc === undefined : renderAchievements}
      </ContainerAchievements>
    </ComponentLayout>
  );
};

export default AchievementList;