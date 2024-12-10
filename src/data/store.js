import {
  discovered_this_year,
  exclude_recommends,
  include_recommends,
  least_popular,
  most_popular,
  released_this_year,
} from "~data/settings";

export default {
  style: "",
  create: {
    playlist: {
      name: "",
      tracks: [],
      excess: [],
    },
  },
  saved: {
    track: null,
  },
  user: {
    id: null,
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
            copy: [
              `We’re all friends here. Let’s find your recent favs and share the love.`,
            ],
          },
          {
            type: "config",
            title: "",
            image: "/config.jpg",
            settings: [
              { title: discovered_this_year, editable: false, value: true },
              { title: include_recommends, editable: false, value: true },
            ],
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
            copy: [`Don’t waste my time. Fresh discoveries only. Get out.`],
          },
          {
            type: "config",
            title: "",
            image: "/config.jpg",
            settings: [
              { title: released_this_year, editable: false, value: true },
              { title: exclude_recommends, editable: false, value: true },
            ],
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
          settings: [
            { title: least_popular, editable: true, value: false },
            { title: most_popular, editable: true, value: false },
            { title: include_recommends, editable: true, value: false },
            { title: released_this_year, editable: true, value: false },
          ],
        },
      ],
    },
  },
};
