import {
  discovered_this_year,
  include_recommends,
  released_this_year,
  exclude_recommends,
  fewest_plays,
} from "~data/playlist_settings";

export default {
  style: "",
  create: {
    playlist: {
      name: "",
      tracks: [],
    },
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
            copy: [discovered_this_year, include_recommends],
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
            copy: [released_this_year, exclude_recommends],
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
          copy: [released_this_year, fewest_plays, include_recommends],
        },
      ],
    },
  },
};
