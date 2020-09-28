const arcOneStoryOne = [
  {
    id: "1",
    paragraphs: [
      {
        text: "You wake up in the common room at a table in a lousy tavern just before dawn. At first, you don't remember how you ended up here - you look around you (dirty clothes, a number of empty mugs, a half-eaten dish) and it all comes back together. Another failed assignment - probably the last one this time - and you are on the streets."
      },
      {
        text: "Fascinating how low you can get in such a short time as a Knight once your Lord has gotten rid of you."
      },
      {
        text: "You look around yourself and see several others passed out on other tables or in front of the hearth, a non-caring and half-dosing keeper and two rather nasty looking fellows pestering two young lasses on the other side of the hall."
      }
    ],
    options: [
      {
        text: "Your hungry eyes follow the girls' shapes.",
        nextEventId: "2E",
      },
      {
        text: "You continue staring out from your head.",
        nextEventId: "2N",
      },
      {
        text: "Your knightly noble instincts kick in - you decide to protect the two girls and tear at least one of the brutes a new one",
        nextEventId: "2G"
      }
    ]
  },
  {
    id: "GAMEOVER",
    paragraphs: [
      {
        text: "DED"
      }
    ],
    options: [
      {
        text: undefined,
        nextEventId: undefined,
      }
    ]
  },
  {
    id: "2E",
    paragraphs: [
      {
        text: "You take interest in them after watching them for a while and decide to step up to them. The two brutes cautiously look at you but their greeting is familiar."
      },
      {
        text: "'Hi there,' one of them tells you. 'Didn't want to disturb your stupor after our drinking but hoped you'd join us in this early morning fun. Go on, touch and enjoy how smooth their skin is.'"
      },
      {
        text: "You wonder what has happened during the night. You decide to ask questions later, for now you join the situation."
      }
    ],
    options: [
      {
        text: "You continue enjoying yourself in your stupor.",
        nextEventId: "3E",
      },
      {
        text: "You realise this is bad - and you decide to use your fists.",
        nextEventId: "3G",
      }
    ]
  },
  {
    id: "2N",
    paragraphs: [
      {
        text: "Even though those fellas look vaguely familiar, in your stupor you decide not to mind them. You continue to ponder on your life and possibilities. After a short while you see them walking towards the stairs, probably going to their room, you think. "
      },
      {
        text: "One of them winks at you."
      },
      {
        text: "Thinking that they might offer some explanation how you ended up in this miserable state, you decide to follow them."
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER"
      }
    ]
  },
  {
    id: "2G",
    paragraphs: [
      {
        text: "Your initial stupor fades as you look at those two fellas harassing those two girls in the corner. No matter what has happened to you, you feel the urge to step up and help them."
      },
      {
        text: "The two brutes cautiously look at you but their greeting is familiar."
      },
      {
        text: "'Hi there,' one of them tells you. 'Didn't want to disturb your stupor after our drinking but hoped you'd join us in this early morning fun. Go on, touch and enjoy her smooth skin while you can.'"
      },
      {
        text: "You feel disgusted by them and decide to punch the closer one in the face."
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER"
      }
    ]
  },
  {
    id: "3E",
    paragraphs: [
      {
        text: "Soon you feel damn good about yourself. Suddenly, one of the fellas slams one of the girls on the temple and kicks the other. They both pass out."
      },
      {
        text: "'Alright, boys - fun is over. We have important things to attend to.'"
      },
      {
        text: "'You, too.' He turns to you. 'Time to get down to some serious business since you were that eager last night. Gather yourself and meet us in our room. First floor, second door on the left., in case you've forgotten it.' And with that they leave you."
      }
    ],
    options: [
      {
        text: "Follow them to their room.",
        nextEventId: "4N_1",
      },
      {
        text: "Decide to sit at their table for a little bit to gather your thoughts.",
        nextEventId: "4N_2",
      }
    ]
  },
  {
    id: "3G",
    paragraphs: [
      {
        text: "Suddenly, your knightly noble instincts kick in and your head is free of your previous stupor. You realise you're doing something terrible and decide to punch of the bullies in the face."
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER"
      }
    ]
  },
  {
    id: "4N_1",
    paragraphs: [
      {
        text: "You shake your head, stand up and walk towards the staircase."
      },
      {
        text: "Near at the top of the stairs, you hear shouting and shuffling from downstairs."
      }
    ],
    options: [
      {
        text: "Rush into your companions' room.",
        nextEventId: "5N_1",
      },
      {
        text: "Decide to hide somewhere else.",
        nextEventId: "5N_2",
      }
    ]
  },
  {
    id: "4N_2",
    paragraphs: [
      {
        text: ""
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER"
      }
    ]
  },
  {
    id: "5N_1",
    paragraphs: [
      {
        text: "You rush into the second room on the left and find your companions packing their gear. They look surprised first at your panicking face, then at the pair of soldiers rushing into the room."
      },
      {
        text: "You have time to turn toward them, nonetheless they slaughter all three of you on the spot."
      }
    ],
    options: [
      {
        text: "GAME OVER",
        nextEventId: "GAMEOVER",
      }
    ]
  },
  {
    id: "5N_2",
    paragraphs: [
      {
        text: ""
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      },
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER"
      }
    ]
  }
];

export default arcOneStoryOne;