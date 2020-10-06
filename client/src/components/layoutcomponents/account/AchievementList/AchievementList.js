import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AdventureButton } from "components/layoutcomponents/adventures/storypage";
import { IconBlack, IconYellow } from "components/commoncomponents/styled-icons";
import iconList from "utilities/iconList";

const ComponentLayout = styled.div`
  width: 100%;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    /* width: 70%; */
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.large}) {
    /* width: 70%; */
    margin: 10rem auto;
  }
`;

const ContainerStoryButton = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {
    /* width: 70%; */
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-direction: row;
  }
`;

const ArcTitle = styled.p`
  font-size: ${props => props.theme.fontSize.xLarge};
  font-weight: bold;
  padding: 0 0 2rem 0;

  &:nth-of-type(2) {
    padding: 5rem 0 2rem 0;
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.xxLarge};
  }
`;

const StoryButton = styled(AdventureButton)`
  width: 20rem;
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover ${IconYellow} {
    color: ${props => props.theme.fontColor.secondaryDark};
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    margin: 0 2rem 0 0;
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const ContainerAchievements = styled.div`
  margin: 5rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const WrapperAchievement = styled.div`
  margin: 2rem 0 0 0;

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    flex-grow: 1;
    min-width: 33%;
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
    width: 50rem;
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
  font-size: ${props => props.theme.fontSize.medium};
  padding: 0 0 1rem 0;
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const AchievementDesc = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => props.theme.fontSize.medium};
  
  @media only screen and (min-width: ${props => props.theme.mediaQueries.xSmall}) {
  
  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.small}) {

  }

  @media only screen and (min-width: ${props => props.theme.mediaQueries.medium}) {
    font-size: ${props => props.theme.fontSize.large};
  }
`;

const AchievementList = () => {
  const [achievements, setAchievements] = useState([undefined]);
  const [eventTarget, setEventTarget] = useState({ arc: undefined, code: undefined });

  const buttonList = [
    [
      { id: 1, arc: "one", code: "a1s1", title: "To One Last New Beginning", },
      { id: 2, arc: "one", code: "a1s2", title: "A City to Burn", }
    ],
    [
      { id: 1, arc: "two", code: "a2s1", title: "Greenskins, Greenskins everywhere", }
    ],
    [
      { id: 1, code: "a3s1", title: "How to Lose an Empire", }
    ],
    [
      { id: 1, code: "a4s1", title: "Wild Elvish Sorcerers", }
    ]
  ];

  useEffect(() => {
    const getAchievements = async () => {
      const id = localStorage.getItem("id");
      try {
        if (eventTarget.arc === "one") {
          for (let i = 0; i < buttonList[0].length; i++) {
            if (eventTarget.code === buttonList[0][i].code) {
              const response = await axios.get(`/users/achievements/${buttonList[0][i].code}`, { params: { _id: id }});
              setAchievements(Object.entries(response.data));
            }
          }
        } else if (eventTarget.arc === "two") {
          for (let i = 0; i < buttonList[1].length; i++) {
            if (eventTarget.code === buttonList[1][i].code) {
              const response = await axios.get(`/users/achievements/${buttonList[1][i].code}`, { params: { _id: id }});
              setAchievements(Object.entries(response.data));
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAchievements();
  }, [eventTarget]);
  
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
        <ArcTitle>
          Tales of the Eastern Fief
        </ArcTitle>
        <ContainerStoryButton>
          {renderArcOneButtons}
        </ContainerStoryButton>
        <ArcTitle>
          Bad News from the North
        </ArcTitle>
        <ContainerStoryButton>
          {renderArcTwoButtons}
        </ContainerStoryButton>
        <ContainerAchievements>
          {eventTarget.arc === "one" ? renderAchievements : null}
        </ContainerAchievements>
      
        <ContainerAchievements>
          {eventTarget.arc === "two" ? renderAchievements : null}
        </ContainerAchievements>
      
    </ComponentLayout>
  );
};

export default AchievementList;