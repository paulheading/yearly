import {
  out_explicit,
  in_explicit,
  out_popular,
  in_popular,
  released_this_year,
  groups,
  min_length,
  max_length,
} from "~data/settings";

export default {
  id: "custom",
  content: [
    {
      type: "config",
      title: "Custom",
      image: "/custom.jpg",
      settings: [
        {
          title: out_popular,
          group: { ...groups.popularity },
          editable: true,
          value: false,
        },
        {
          title: in_popular,
          group: { ...groups.popularity },
          editable: true,
          value: false,
        },
        { title: released_this_year, editable: true, value: false },
        {
          title: in_explicit,
          group: { ...groups.explicit },
          editable: true,
          value: false,
        },
        {
          title: out_explicit,
          group: { ...groups.explicit },
          editable: true,
          value: false,
        },
        {
          title: min_length,
          group: { ...groups.duration },
          editable: true,
          value: 0,
          range: {
            pos: "min",
            min: 0,
            max: 10,
          },
        },
        {
          title: max_length,
          group: { ...groups.duration },
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
