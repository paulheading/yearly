import settings from "#data/settings";
import include from "#filters/include";
import data from "#selectors/data";
import attrs from "#selectors/attrs";
import setSettingData from "#setters/setSettingData";

let id = data.card.badjo;
let image = "/" + id + ".jpg";

let card = {
  id,
  content: [
    {
      type: "cover",
      title: "BadJo",
      image,
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
