import iconList from "utilities/iconList";

const adventuresMetaData = [
  {
    id: 0,
    arcTitle:"Tutorial",
    arcIcon: iconList.chessPawn,
    storyOne: { title: "Tutorial", link: "tutorial01", arc: "zero", code: "a0s1", isAvailable: "true" },
    storyTwo: { title: "Will's Dilemma", link: "tutorial02", arc: "zero", code: "a0s2", isAvailable: "true" },
    storyThree: { title: "Rosie's Escape", link: "tutorial03", arc: "zero", code: "a0s3", isAvailable: "false" }
  },
  {
    id: 1,
    arcTitle:"Tales of the Eastern Fief",
    arcIcon: iconList.burn,
    storyOne: { title: "To One Last New Beginning", link: "A1S1", arc: "one", code: "a1s1", isAvailable: "false" },
    storyTwo: { title: "A City to Burn", link: "A1S2", arc: "one", code: "a1s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "one", code: "a1s3", isAvailable: "false" }
  },
  {
    id: 2,
    arcTitle:"Bad News from the North",
    arcIcon: iconList.skull,
    storyOne: { title: "Greenskins, Greenskins everywhere", link: "A2S1", arc: "two", code: "a2s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "two", code: "a2s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "two", code: "a2s3", isAvailable: "false" }
  },
  {
    id: 3,
    arcTitle:"Diaries from the Royal Fief",
    arcIcon: iconList.chessKingAndQueen,
    storyOne: { title: "How to Lose an Empire", link: "A3S1", arc: "three", code: "a3s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "three", code: "a3s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "three", code: "a3s3", isAvailable: "false" }
  },
  {
    id: 4,
    arcTitle:"Friends or Foes?",
    arcIcon: iconList.peopleArrows,
    storyOne: { title: "Wild Elvish Sorcerers", link: "A4S1", arc: "four", code: "a4s1", isAvailable: "false" },
    storyTwo: { title: undefined, link: undefined, arc: "four", code: "a4s2", isAvailable: "false" },
    storyThree: { title: undefined, link: undefined, arc: "four", code: "a4s3", isAvailable: "false" }
  }
];

export default adventuresMetaData;