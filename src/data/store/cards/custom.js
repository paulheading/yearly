import settings from "~data/settings";
import include from "~scripts/filters/include";
import data from "~scripts/selectors/data";
import attrs from "~scripts/selectors/attrs";
import setSettingData from "~scripts/setters/setSettingData";

let id = data.card.custom;

let card = {
  id,
  content: [
    {
      type: "config",
      title: "Custom",
      image: "/custom.jpg",
      settings: [
        {
          title: settings.least_popular_music,
          editable: true,
          value: false,
          data: {
            ...settings.groups.popularity,
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.most_popular_music,
          editable: true,
          value: false,
          data: {
            ...settings.groups.popularity,
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.explicit_music_only,
          editable: true,
          value: false,
          data: {
            ...settings.groups.explicit,
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.no_explicit_music,
          editable: true,
          value: false,
          data: {
            ...settings.groups.explicit,
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.min_length,
          editable: true,
          value: 0,
          max: 10,
          min: 0,
          data: {
            ...settings.groups.duration,
            [attrs.data.type]: "range",
            [attrs.data["range-pos"]]: "min",
          },
        },
        {
          title: settings.max_length,
          editable: true,
          value: 0,
          max: 30,
          min: 0,
          data: {
            ...settings.groups.duration,
            [attrs.data.type]: "range",
            [attrs.data["range-pos"]]: "min",
          },
        },
        {
          title: settings.year_added,
          editable: true,
          value: 0,
          options: [
            { title: "Added in 2025", data: 2025 },
            { title: "Added in 2024", data: 2024 },
            { title: "Added in 2023", data: 2023 },
            { title: "Added in 2022", data: 2022 },
            { title: "Added in 2021", data: 2021 },
          ],
          data: {
            ...settings.groups.age("newest"),
            [attrs.data.type]: "select",
          },
        },
        {
          title: settings.year_released,
          editable: true,
          value: 0,
          options: [
            { title: "Released in 2025", data: 2025 },
            { title: "Released in 2024", data: 2024 },
            { title: "Released in 2023", data: 2023 },
            { title: "Released in 2022", data: 2022 },
            { title: "Released in 2021", data: 2021 },
          ],
          data: {
            ...settings.groups.age("oldest"),
            [attrs.data.type]: "select",
          },
        },
        {
          title: settings.prioritize_female_artists,
          editable: true,
          value: false,
          data: {
            ...settings.groups.gender,
            [attrs.data.type]: "toggle",
          },
        },
        {
          title: settings.prioritize_male_artists,
          editable: true,
          value: false,
          data: {
            ...settings.groups.gender,
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
