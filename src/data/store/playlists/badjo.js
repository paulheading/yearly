import { out_recommends, released_this_year } from "~data/settings";

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
      title: "",
      image: "/config.jpg",
      settings: [
        { title: released_this_year, editable: false, value: true },
        { title: out_recommends, editable: false, value: true },
      ],
    },
  ],
};
