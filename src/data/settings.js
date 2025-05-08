import attrs from "#selectors/attrs";

let discovered_this_year = "Discovered this year";

let least_popular_music = "Least popular music";
let most_popular_music = "Most popular music";

let released_this_year = "Released this year";

let in_recommends = "Include recommends";
let out_recommends = "Exclude recommends";

let explicit_music_only = "Explicit music only";
let no_explicit_music = "No explicit music";

let max_length = "Max length";
let min_length = "Min length";

let year_added = "Year added";
let year_released = "Year released";

let prioritize_women = "Prioritize women";
let prioritize_men = "Prioritize men";

let groups = {
  popularity: {
    [attrs.data["group-name"]]: "popularity",
    [attrs.data["group-action"]]: "cancel",
  },
  explicit: {
    [attrs.data["group-name"]]: "explicit",
    [attrs.data["group-action"]]: "cancel",
  },
  duration: {
    [attrs.data["group-name"]]: "duration",
    [attrs.data["group-action"]]: "ceiling",
  },
  age: (value = null) => ({
    [attrs.data["group-name"]]: "age",
    [attrs.data["group-action"]]: value,
  }),
  gender: {
    [attrs.data["group-name"]]: "gender",
    [attrs.data["group-action"]]: "cancel",
  },
};

export default {
  discovered_this_year,
  least_popular_music,
  most_popular_music,
  released_this_year,
  in_recommends,
  out_recommends,
  explicit_music_only,
  no_explicit_music,
  max_length,
  min_length,
  groups,
  year_added,
  year_released,
  prioritize_women,
  prioritize_men,
};
