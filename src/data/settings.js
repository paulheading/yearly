let discovered_this_year = "Discovered this year";

let out_popular = "Least popular music";
let in_popular = "Most popular music";

let released_this_year = "Released this year";

let in_recommends = "Include recommends";
let out_recommends = "Exclude recommends";

let in_explicit = "Explicit music only";
let out_explicit = "No explicit music";

let max_length = "Max length";
let min_length = "Min length";

let choose_year = "Choose year";

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
};

export default {
  choose_year,
  discovered_this_year,
  out_popular,
  in_popular,
  released_this_year,
  in_recommends,
  out_recommends,
  in_explicit,
  out_explicit,
  max_length,
  min_length,
  groups,
};
