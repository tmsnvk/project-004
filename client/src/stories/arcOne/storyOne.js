const arcOneStoryOne = [
  {
    id: 1,
    paragraphs: [
      {
        text: "Step One Par One"
      },
      {
        text: "Step One Par Two"
      }
    ],
    options: [
      {
        text: "CHOOSE THIS 1",
        nextEventId: 2,
      },
      {
        text: "CHOOSE THIS 2",
        nextEventId: 3,
      },
      {
        text: "CHOOSE THIS 3",
        nextEventId: 4
      }
    ]
  },
  {
    id: 2,
    paragraphs: [
      {
        text: "Step Two Par One"
      },
      {
        text: "Step Two Par Two"
      }
    ],
    options: [
      {
        text: "CHOOSE THIS 1",
        nextEventId: 1,
      },
      {
        text: "CHOOSE THIS 2",
        nextEventId: 5,
      },
      {
        text: "CHOOSE THIS 3",
        nextEventId: 2
      }
    ]
  },
  {
    id: 3,
    paragraphs: [
      {
        text: "Step Three Par One"
      },
      {
        text: "Step Three Par Two"
      }
    ],
    options: [
      {
        text: "CHOOSE THIS",
        nextEventId: 2,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 2,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 4
      }
    ]
  },
  {
    id: 4,
    paragraphs: [
      {
        text: "Step Four Par One"
      },
      {
        text: undefined
      }
    ],
    options: [
      {
        text: "CHOOSE THIS",
        nextEventId: 5,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 3,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 3
      }
    ]
  },
  {
    id: 5,
    paragraphs: [
      {
        text: "Step Five Par One"
      },
      {
        text: undefined
      }
    ],
    options: [
      {
        text: "CHOOSE THIS",
        nextEventId: 2,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 3,
      },
      {
        text: "CHOOSE THIS",
        nextEventId: 4
      }
    ]
  }
];

export default arcOneStoryOne;