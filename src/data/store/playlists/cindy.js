import { discovered_this_year, in_recommends } from "~data/settings";

export default {
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
        { title: in_recommends, editable: false, value: true },
      ],
    },
  ],
};
