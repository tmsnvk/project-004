import iconList from "utilities/iconList";

const adventuresMetaData = [
  {
    id: 0,
    arcTitle:"Tutorial",
    arcIcon: iconList.chessPawn,
    storyOne: { title: "Tutorial", link: "to_one_last_new_beginning_0101", available: "true" },
    storyTwo: { title: undefined, link: undefined, available: "false" },
    storyThree: { title: undefined, link: undefined, available: "false" }
  },
  {
    id: 1,
    arcTitle:"Tales of the Eastern Fief",
    arcIcon: iconList.burn,
    storyOne: { title: "To One Last New Beginning", link: "to_one_last_new_beginning_0101", available: "true" },
    storyTwo: { title: "A City to Burn", link: "a_city_to_burn_0102", available: "false" },
    storyThree: { title: undefined, link: undefined, available: "false" }
  },
  {
    id: 2,
    arcTitle:"Bad News from the North",
    arcIcon: iconList.skull,
    storyOne: { title: "Greenskins, Greenskins everywhere", link: "greenskins_greenskins_everywhere_0201", available: "false" },
    storyTwo: { title: undefined, link: undefined, available: "false" },
    storyThree: { title: undefined, link: undefined, available: "false" }
  },
  {
    id: 3,
    arcTitle:"Diaries from the Royal Fief",
    arcIcon: iconList.chessKingAndQueen,
    storyOne: { title: "How to Lose an Empire", link: "how_to_lose_an_empire_0301", available: "false" },
    storyTwo: { title: undefined, link: undefined, available: "false" },
    storyThree: { title: undefined, link: undefined, available: "false" }
  },
  {
    id: 4,
    arcTitle:"Friends or Foes?",
    arcIcon: iconList.peopleArrows,
    storyOne: { title: "Wild Elvish Sorcerers", link: "wild_elvish_sorcerers_0401", available: "false" },
    storyTwo: { title: undefined, link: undefined, available: "false" },
    storyThree: { title: undefined, link: undefined, available: "false" }
  }
];

export default adventuresMetaData;