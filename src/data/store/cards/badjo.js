import settings from "~data/settings";
import include from "~scripts/filters/include";
import data from "~scripts/selectors/data";
import attrs from "~scripts/selectors/attrs";
import setSettingData from "~scripts/setters/setSettingData";

let id = data.card.badjo;

let card = {
  id,
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
          data: {
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.out_recommends,
          editable: false,
          value: true,
          data: {
            [attrs.data.type]: "toggle",
          },
        },
      ],
    },
  ],
};

card.content
  .filter(include.typeConfig)[0]
  .settings.map((setting) => setSettingData(setting, id));

export default card;
