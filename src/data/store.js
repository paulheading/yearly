export default {
  selected: {
    id: "",
    playlist: {
      name: "",
      tracks: [],
    },
  },
  user: {
    id: null,
  },
  loaded: {
    callback: false,
  },
  cards: {
    playlists: [
      {
        id: "cindy",
        content: [
          {
            type: "cover",
            title: "Cindy",
            image: "/cindy.jpg",
            editable: false,
            copy: [
              `We’re all friends here. Let’s find your recent favs and share the love.`,
            ],
          },
          {
            type: "config",
            title: "",
            image: "/config.jpg",
            editable: false,
            copy: [`Discovered this year`, `Recommends included`],
          },
        ],
      },
      {
        id: "badjo",
        content: [
          {
            type: "cover",
            title: "BadJo",
            image: "/badjo.jpg",
            editable: false,
            copy: [`Don’t waste my time. Fresh discoveries only. Get out.`],
          },
          {
            type: "config",
            title: "",
            image: "/config.jpg",
            editable: false,
            copy: [`Released this year`, `No recommends`],
          },
        ],
      },
    ],
    custom: {
      id: "custom",
      content: [
        {
          type: "config",
          title: "Custom",
          image: "/custom.jpg",
          editable: true,
          copy: [
            `Released this year`,
            `Prioritize fewest plays`,
            `Include recommends`,
          ],
        },
      ],
    },
  },
};
