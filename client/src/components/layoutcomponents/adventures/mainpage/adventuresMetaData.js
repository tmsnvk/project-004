import iconList from "utilities/iconList";

const adventuresMetaData = [
  {
    id: 0,
    arcTitle:"Tutorial",
    arcIcon: iconList.chessPawn,
    arcFocus: false,
    storyOne: { title: "Tutorial", link: "to_one_last_new_beginning_0101", active: "true" },
    storyTwo: { title: undefined, link: undefined, active: "false" },
    storyThree: { title: undefined, link: undefined, active: "false" }
  },
  {
    id: 1,
    arcTitle:"Tales of the Eastern Fief",
    arcIcon: iconList.burn,
    arcFocus: false,
    storyOne: { title: "To One Last New Beginning", link: "to_one_last_new_beginning_0101", active: "true" },
    storyTwo: { title: "A City to Burn", link: "a_city_to_burn_0102", active: "false" },
    storyThree: { title: undefined, link: undefined, active: "false" }
  },
  {
    id: 2,
    arcTitle:"Bad News from the North",
    arcIcon: iconList.skull,
    arcFocus: false,
    storyOne: { title: "Greenskins, Greenskins everywhere", link: "greenskins_greenskins_everywhere_0201", active: "false" },
    storyTwo: { title: undefined, link: undefined, active: "false" },
    storyThree: { title: undefined, link: undefined, active: "false" }
  },
  {
    id: 3,
    arcTitle:"Diaries from the Royal Fief",
    arcIcon: iconList.chessKingAndQueen,
    arcFocus: false,
    storyOne: { title: "How to Lose an Empire", link: "how_to_lose_an_empire_0301", active: "false" },
    storyTwo: { title: undefined, link: undefined, active: "false" },
    storyThree: { title: undefined, link: undefined, active: "false" }
  },
  {
    id: 4,
    arcTitle:"Friends or Foes?",
    arcIcon: iconList.peopleArrows,
    arcFocus: false,
    storyOne: { title: "Wild Elvish Sorcerers", link: "wild_elvish_sorcerers_0401", active: "false" },
    storyTwo: { title: undefined, link: undefined, active: "false" },
    storyThree: { title: undefined, link: undefined, active: "false" }
  }
];

export default adventuresMetaData;