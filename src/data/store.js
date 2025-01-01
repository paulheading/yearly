import {
  discovered_this_year,
  exclude_explicit,
  exclude_recommends,
  include_explicit,
  include_recommends,
  least_popular,
  most_popular,
  released_this_year,
  groups,
  min_length,
  max_length,
} from "~data/settings";

export default {
  selected: {
    playlist: 0,
    track: null,
  },
  create: {
    playlist: {
      name: "",
      style: "",
      tracks: [],
      excess: [],
    },
  },
  user: {
    id: null,
    playlists: [],
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
            {
              title: least_popular,
              group: { ...groups.popularity },
              editable: true,
              value: false,
            },
            {
              title: most_popular,
              group: { ...groups.popularity },
              editable: true,
              value: false,
            },
            { title: released_this_year, editable: true, value: false },
            {
              title: include_explicit,
              group: { ...groups.explicit },
              editable: true,
              value: false,
            },
            {
              title: exclude_explicit,
              group: { ...groups.explicit },
              editable: true,
              value: false,
            },
            {
              title: min_length,
              group: { ...groups.duration },
              editable: true,
              value: 0,
              range: {
                pos: "min",
                min: 0,
                max: 10,
              },
            },
            {
              title: max_length,
              group: { ...groups.duration },
              editable: true,
              value: 0,
              range: {
                pos: "max",
                min: 0,
                max: 30,
              },
            },
          ],
        },
      ],
    },
  },
};
