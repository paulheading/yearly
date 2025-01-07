import settings from "~data/settings";

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
        },
        {
          title: settings.in_popular,
          group: { ...settings.groups.popularity },
          editable: true,
          value: false,
        },
        { title: settings.released_this_year, editable: true, value: false },
        {
          title: settings.in_explicit,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
        },
        {
          title: settings.out_explicit,
          group: { ...settings.groups.explicit },
          editable: true,
          value: false,
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
        },
      ],
    },
  ],
};
