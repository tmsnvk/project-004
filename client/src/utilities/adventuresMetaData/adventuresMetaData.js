import iconList from "utilities/iconList";

const adventuresMetaData = [
  {
    id: 0,
    arcTitle:"Tutorial",
    arcIcon: iconList.chessPawn,
    storyOne: { title: "Tutorial", link: "tutorial", arc: "zero", code: "a0s1", isAvailable: "true" },
    storyTwo: { title: undefined, link: undefined, arc: "zero", code: "a0s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "zero", code: "a0s3", isAvailable: "false" }
  },
  {
    id: 1,
    arcTitle:"Tales of the Eastern Fief",
    arcIcon: iconList.burn,
    storyOne: { title: "To One Last New Beginning", link: "to_one_last_new_beginning_a1s1", arc: "one", code: "a1s1", isAvailable: "true" },
    storyTwo: { title: "A City to Burn", link: "a_city_to_burn_0102", arc: "one", code: "a1s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "one", code: "a1s3", isAvailable: "false" }
  },
  {
    id: 2,
    arcTitle:"Bad News from the North",
    arcIcon: iconList.skull,
    storyOne: { title: "Greenskins, Greenskins everywhere", link: "greenskins_greenskins_everywhere_a2s1", arc: "two", code: "a2s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "two", code: "a2s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "two", code: "a2s3", isAvailable: "false" }
  },
  {
    id: 3,
    arcTitle:"Diaries from the Royal Fief",
    arcIcon: iconList.chessKingAndQueen,
    storyOne: { title: "How to Lose an Empire", link: "how_to_lose_an_empire_a3s1", arc: "three", code: "a3s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "three", code: "a3s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "three", code: "a3s3", isAvailable: "false" }
  },
  {
    id: 4,
    arcTitle:"Friends or Foes?",
    arcIcon: iconList.peopleArrows,
    storyOne: { title: "Wild Elvish Sorcerers", link: "wild_elvish_sorcerers_a4s1", arc: "four", code: "a4s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "four", code: "a4s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "four", code: "a4s3", isAvailable: "false" }
  }
];

export default adventuresMetaData;