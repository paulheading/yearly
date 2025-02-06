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

let groups = {
  popularity: {
    name: "popularity",
    action: "cancel",
  },
  explicit: {
    name: "explicit",
    action: "cancel",
  },
  duration: {
    name: "duration",
    action: "ceiling",
  },
  age: (value = null) => ({
    name: "age",
    action: value
  })
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
};
