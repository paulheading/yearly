import settings from "~data/settings";

function classify(value) {
  let className = value.toLowerCase();
  return className.split(" ").join("-");
}

export default {
  id: "custom",
  content: [
    {
      type: "config",
      title: "Custom",
      image: "/custom.jpg",
      settings: [
        {
          title: settings.out_popular,
          group: { ...settings.groups.popularity },
          editable: true,
          value: false,
          type: "toggle",
        },
        {
          title: settings.in_popular,
          group: { ...settings.groups.popularity },
          editable: true,
          value: false,
          type: "toggle",
        },
        {
          title: settings.in_explicit,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
          type: "toggle",
        },
        {
          title: settings.out_explicit,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
          type: "toggle",
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
        },
        {
          title: settings.year_added,
          group: { ...settings.groups.age },
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
          className: classify(settings.year_added),
        },
        {
          title: settings.year_released,
          group: { ...settings.groups.age },
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
          className: classify(settings.year_released),
        },
      ],
    },
  ],
};
