import settings from "~data/settings";
import include from "~scripts/filters/include";
import data from "~scripts/selectors/data";
import attrs from "~scripts/selectors/attrs";
import setSettingData from "~scripts/setters/setSettingData";

let id = data.card.cindy;

let card = {
  id,
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
      image: "/config.jpg",
      settings: [
        {
          title: settings.discovered_this_year,
          editable: false,
          value: true,
          data: {
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.in_recommends,
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
