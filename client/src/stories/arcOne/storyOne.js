const arcOneStoryOne = [
  {
    achiNumber: "3E"
  },
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
        text: "You quickly realise this is bad - and you decide to use your fists.",
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
        text: "You decide to withdraw but still keep pinning them into the corner.",
        nextEventId: "8N",
      },
      {
        text: "You keep punching them in the face.",
        nextEventId: "8G",
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
        text: "You see two soldiers rushing in to the tavern and run up the staircase. It suddenly dawns on you who they are after. Your curiosity gets the better of you and decide to follow them."
      },
      {
        text: "On the top of the stairs you hear shouting and muffled noises."
      }
    ],
    options: [
      {
        text: "Enter the room.",
        nextEventId: "7N_1",
      },
      {
        text: "Hide somewhere safe.",
        nextEventId: "7N_2",
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
        text: "You run up to the top of the stairs and find a small cabinet right on your right. You enter it and find out that it's a storage room for linens and other equipment."
      },
      {
        text: "You don't hesitate to silently close the door, hide behind one of the shelves and listen."
      },
      {
        text: "The shuffling noise turns into shouting as somone enters the room of your new acquaintances. 'Where's the third one?' Asks a deep voice. You don't hear the asnwer for his question was but recognise the unmistakable sound of a sword drawn and put through a body."
      },
      {
        text: "A few minutes later you hear those people going back down the staircase."
      }
    ],
    options: [
      {
        text: "You decide to go and check out the room.",
        nextEventId: "6N_1",
      },
      {
        text: "You want to leave this place immediately, so you go down the stairs.",
        nextEventId: "6N_2",
      }
    ]
  },
  {
    id: "6N_1",
    paragraphs: [
      {
        text: "CHECKING OUT ROOM"
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
      }
    ]
  },
  {
    id: "6N_2",
    paragraphs: [
      {
        text: "You carefully reach the bottom of the stairs, and see two soldiers with mugs and plates in front of them at one of the tables. You take a deep breath and shuffle towards the tavern's main door."
      },
      {
        text: "You are halfway through the hall when the keeper returns from the kitchen, and shouts 'That's the third one! I recognise him!'"
      },
      {
        text: "The soldiers are on you without wasting a breath. One of them punches you in the stomach that makes you go down on your knees, while the other grabs into your hair and pulls you back up. 'This one is going to hang. That'll teach his miserable figure how not to treat young girls.'"
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      }
    ]
  },
  {
    id: "7N_1",
    paragraphs: [
      {
        text: "You enter the room and one of the soldiers immediately turns towards you."
      },
      {
        text: "'And the third of the bastards decided to honour us with his presence,' he shouts, then punches you in the stomach that makes you go down on your knees, while the other grabs into your hair and pulls you back up. 'This one is going to hang. That'll teach his miserable figure how not to treat young girls.'"
      }
    ],
    options: [
      {
        text: "GAMEOVER",
        nextEventId: "GAMEOVER",
      }
    ]
  },
  {
    id: "7N_2",
    paragraphs: [
      {
        text: "You find a small cabinet on your right. You enter it and see that it's a storage room for linens and other equipment."
      },
      {
        text: "You don't hesitate to silently close the door, hide behind one of the shelves and listen."
      },
      {
        text: "'Where's the third one?' Asks a deep voice from your acquaintances' room. You don't hear the asnwer for his question was but recognise the unmistakable sound of a sword drawn and put through a body."
      },
      {
        text: "A few minutes later you hear those people going back down the staircase."
      }
    ],
    options: [
      {
        text: "You decide to go and check out the room.",
        nextEventId: "6N_1",
      },
      {
        text: "You want to leave this place immediately, so you go down the stairs.",
        nextEventId: "6N_2",
      }
    ]
  },
  {
    id: "8N",
    paragraphs: [
      {
        text: "The one you hit is still shaking it off, however the other one is quick to draw his knife. Lucky for you, at that moment two soldiers enter the tavern and finish what you've started."
      },
      {
        text: "'These two will hang nicely and send an excellent message to other miserable rapists and thiefs.'"
      },
      {
        text: "The two soldiers tie their hands and feet together and gag their mouth, then one of them turns towards you. 'Good to see that there are still honourable men in this city. Allow us to buy you a mug of fine ale.'"
      }
    ],
    options: [
      {
        text: "Excuse and withdraw yourself.",
        nextEventId: "9N",
      },
      {
        text: "You're thirsty and hungry, so there's no reason to turn the offer down.",
        nextEventId: "9G",
      }
    ]
  },
  {
    id: "8G",
    paragraphs: [
      {
        text: "You keep pouching one of them and don't see that the other is ready to hit you with one of his mugs."
      },
      {
        text: "Suddenly everything becomes black."
      }
    ],
    options: [
      {
        text: "Slowly sit up, once you came to your senses.",
        nextEventId: "13N_1",
      },
      {
        text: "Jerk up and raise your fists in defence.",
        nextEventId: "13N_2",
      }
    ]
  },
  {
    id: "9N",
    paragraphs: [
      {
        text: "You can't shake off the familiarity those two bastards greeted you, so you excuse yourself in the hope of sneaking into their room and have a look around."
      },
      {
        text: "The soldiers don't mind you as they are already deep in their plates and mugs and discussing the hanging of their prisoners."
      }
    ],
    options: [
      {
        text: "Make your way towards the staircase to enter the room.",
        nextEventId: "6N_1",
      },
      {
        text: "Take a last look at the soldiers.",
        nextEventId: "10N",
      }
    ]
  },
  {
    id: "9G",
    paragraphs: [
      {
        text: "The soldiers make room for you at their table and shortly the keeper brings you a plate of hot food and a mug of ale. You make a quick work of it, then realise the soldiers hearty laugh."
      },
      {
        text: "'Slow down, good man. There's no reason to hurry.'"
      }
    ],
    options: [
      {
        text: "Listen to the soldiers' talk.",
        nextEventId: "11N_1",
      },
      {
        text: "Contemplate on what has just happened.",
        nextEventId: "11N_2",
      },
      {
        text: "Get up and make your way towards your acquaintances' room.",
        nextEventId: "11N_3",
      }
    ]
  }, 
  {
    id: "10N",
    paragraphs: [
      {
        text: "One of the soldiers catches your eyes and turns towards you. 'Hey you!'"
      },
      {
        text: "'Appricate your bravery, The Empire needs men like you. The Baroness of the Eastern Fief and the Lord of Tarpont Hills need men like you. But more importantly the Colonel of this stinking hole needs men like you. Safety, good job and hot meals in front of you every day. Think about it.' And with that he shoves a recruiting pampflet in your hands."
      },
      {
        text: "You mumble something then make your way towards the staircase."
      }
    ],
    options: [
      {
        text: "Climb the stairs and enter your acquaintances' room.",
        nextEventId: "6N_1",
      }
    ]
  },
  {
    id: "11N_1",
    paragraphs: [
      {
        text: "Talk of war against the Greenskins, mistrust in the Elvish Kingdom and of course the revolutionaries - just the usual."
      },
      {
        text: "You realise you could probably sneak into and lookg around the empty room of those two bastards. You thank the soldiers for the meal and decide to leave."
      },
      {
        text: "One of the soldiers talks to you and hands a pampflet towards you."
      }
    ],
    options: [
      {
        text: "Listen to him, but refuse the note.",
        nextEventId: "12N",
      },
      {
        text: "Listen to him and take the note.",
        nextEventId: "12G",
      }
    ]
  }, 
  {
    id: "11N_2",
    paragraphs: [
      {
        text: "While shoving the food into your mouth, you try to sum up everything that has happened. Your Lord has gotten rid of you - for sure, this time. Then you woke up here with those bastards acting way too familiar with you. Then the soldiers has appeared. That makes their room empty and you suddenly hope that something in there could help you put the pieces together. The keeper is probably waiting for the soldiers to leave to loot the room himself."
      },
      {
        text: "You thank the soldiers for the meal and decide to leave. One of them turns to you and hands a pampflet towards you."
      }
    ],
    options: [
      {
        text: "Listen to him, but refuse the note.",
        nextEventId: "12N",
      },
      {
        text: "Listen to him and take the note.",
        nextEventId: "12G",
      }
    ]
  },
  {
    id: "11N_3",
    paragraphs: [
      {
        text: "After quickly finishing your meal, you suddenly realise that something in those bastards' room could help you put the pieces of last night and this morning together. The keeper is probably waiting for the soldiers to leave to loot the room himself."
      },
      {
        text: "You thank the soldiers for the meal and decide to leave. One of them turns to you and hands a pampflet towards you."
      }
    ],
    options: [
      {
        text: "Listen to him, but refuse the note.",
        nextEventId: "12N",
      },
      {
        text: "Listen to him and take the note.",
        nextEventId: "12G",
      }
    ]
  },
  {
    id: "12N",
    paragraphs: [
      {
        text: "'Appricate your bravery, The Empire needs men like you. The Baroness of the Eastern Fief and the Lord of Tarpont Hills need men like you. But more importantly the Colonel of this stinking hole needs men like you. Safety, good job and hot meals in front of you every day. Think about it.' And with that he shoves a recruiting pampflet in your hands."
      },
      {
        text: "You mumble something but leave the note on their table, then make your way towards the staircase."
      }
    ],
    options: [
      {
        text: "Climb the stairs and enter your acquaintances' room.",
        nextEventId: "6N_1",
      }
    ]
  },
  {
    id: "12G",
    paragraphs: [
      {
        text: "'Appricate your bravery, The Empire needs men like you. The Baroness of the Eastern Fief and the Lord of Tarpont Hills need men like you. But more importantly the Colonel of this stinking hole needs men like you. Safety, good job and hot meals in front of you every day. Think about it.' And with that he shoves a recruiting pampflet in your hands."
      },
      {
        text: "You mumble something, pocket the note, then make your way towards the staircase."
      }
    ],
    options: [
      {
        text: "Climb the stairs and enter your acquaintances' room.",
        nextEventId: "6N_1",
      }
    ]
  },
  {
    id: "13N_1",
    paragraphs: [
      {
        text: "You turn your head around and realise you are sitting at a table with a plate and mug in front of you."
      },
      {
        text: "One of the soldiers smiles at you, 'We entered the tavern the moment they striked you down. Eat and drink, you deserve it.'"
      },
      {
        text: "You make a quick work of the food."
      }
    ],
    options: [
      {
        text: "Listen to the soldiers' talk.",
        nextEventId: "11N_1",
      },
      {
        text: "Contemplate on what has just happened.",
        nextEventId: "11N_2",
      },
      {
        text: "Get up and make your way towards your acquaintances' room.",
        nextEventId: "11N_3",
      }
    ]
  },
  {
    id: "13N_2",
    paragraphs: [
      {
        text: "'Hey, take it easy, good man!' Tells you one of the soldiers with calming motions. 'Sit down, eat this plate of food and calm down. We entered the tavern the moment they striked you down. Eat up, you deserve it.'"
      },
      {
        text: "You sit down, however, you are not calm. You are still thinking about those bastards."
      }
    ],
    options: [
      {
        text: "Get up and make your way towards your acquaintances' room.",
        nextEventId: "11N_3",
      }
    ]
  },
  {
    id: "6N_1",
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
      }
    ]
  }
];


export default arcOneStoryOne;

// {
//   id: "6N_1",
//   paragraphs: [
//     {
//       text: ""
//     }
//   ],
//   options: [
//     {
//       text: "GAMEOVER",
//       nextEventId: "GAMEOVER",
//     },
//     {
//       text: "GAMEOVER",
//       nextEventId: "GAMEOVER",
//     }
//   ]
// }