import settings from "~data/settings";

export default {
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
      image: "/config.jpg",
      settings: [
        {
          title: settings.released_this_year,
          editable: false,
          value: true,
          type: "toggle",
        },
        {
          title: settings.out_recommends,
          editable: false,
          value: true,
          type: "toggle",
        },
      ],
    },
  ],
};
