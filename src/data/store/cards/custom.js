import settings from "~data/settings";
import include from "~scripts/filters/include";
import setTitleToSnakeCase from "~scripts/setters/setTitleToSnakeCase";

import { section } from "~scripts/selectors/data";

let id = section.custom;

let custom = {
  id,
  content: [
    {
      type: "config",
      title: "Custom",
      image: "/custom.jpg",
      settings: [
        {
          title: settings.least_popular_music,
          group: { ...settings.groups.popularity },
          editable: true,
          value: false,
          type: "toggle",
          card: id,
        },
        {
          title: settings.most_popular_music,
          group: { ...settings.groups.popularity },
          editable: true,
          value: false,
          type: "toggle",
          card: id,
        },
        {
          title: settings.explicit_music_only,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
          type: "toggle",
          card: id,
        },
        {
          title: settings.no_explicit_music,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
          type: "toggle",
          card: id,
        },
        {
          title: settings.min_length,
          group: { ...settings.groups.duration },
          editable: true,
          value: 0,
          range: {
            pos: "min",
            min: 0,
            max: 10,
          },
          type: "range",
          card: id,
        },
        {
          title: settings.max_length,
          group: { ...settings.groups.duration },
          editable: true,
          value: 0,
          range: {
            pos: "max",
            min: 0,
            max: 30,
          },
          type: "range",
          card: id,
        },
        {
          title: settings.year_added,
          group: { ...settings.groups.age("newest") },
          editable: true,
          value: 0,
          type: "select",
          options: [
            { title: "Added in 2025", data: 2025 },
            { title: "Added in 2024", data: 2024 },
            { title: "Added in 2023", data: 2023 },
            { title: "Added in 2022", data: 2022 },
            { title: "Added in 2021", data: 2021 },
          ],
          card: id,
        },
        {
          title: settings.year_released,
          group: { ...settings.groups.age("oldest") },
          editable: true,
          value: 0,
          type: "select",
          options: [
            { title: "Released in 2025", data: 2025 },
            { title: "Released in 2024", data: 2024 },
            { title: "Released in 2023", data: 2023 },
            { title: "Released in 2022", data: 2022 },
            { title: "Released in 2021", data: 2021 },
          ],
          card: id,
        },
      ],
    },
  ],
};

custom.content.filter(include.typeConfig)[0].settings.map(setTitleToSnakeCase);

export default custom;
